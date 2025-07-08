  import { useEffect, useState } from "react";
  import { getAllProfiles, upsertProfile, deleteProfile, createUserWithAuthAndProfile } from "../services/adminServices";
  import { 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CButton, 
    CAlert,
    CTabs, 
    CTabList, 
    CTab, 
    CTabContent, 
    CTabPanel
  } from "@coreui/react";
  import { UserFormModal } from "../components/UserFormModal";
  import { ConfirmDeleteModal } from "../components/ConfirmModalDelete";
  import UserList from "../components/UserList";
  import type { User } from "../services/adminServices";
  import { registrarAuditoria } from "../../../../utils/auditoriaServices";
  import AuditLogList from "../components/AuditLogList";
  import AdminProfileCard from "../components/AdminProfileCard";
  import { getAuditoriaLogs, Auditoria } from "../services/adminServices";

  const AdminDashboardPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [logs, setLogs] = useState<Auditoria[]>([]);

  const fetchLogs = async () => {
    const result = await getAuditoriaLogs();
    setLogs(result || []);
  };

  const fetchUsers = async () => {
    setLoading(true);
    const result = await getAllProfiles();
    setUsers(result || []);
    setLoading(false);
  };

  const handleSave = async (user: User) => {
    console.log("Actualizando usuario con ID:", user.id);
    try {
      if (!user.id) {
        await createUserWithAuthAndProfile(user);
        setSuccessMessage("Usuario creado correctamente.");

        await registrarAuditoria({
          accion: "crear_usuario",
          modulo: "admin",
          descripcion: "El usuario " + user.email + " ha sido creado por el administrador",
        });
      } else {
        const data = await upsertProfile(user);
        console.log("Guardado:", data); // 👈 Debe mostrar el array actualizado
        setSuccessMessage("Usuario actualizado correctamente.");

        await registrarAuditoria({
          accion: "actualizar_usuario",
          modulo: "admin",
          descripcion: "El usuario " + user.email + " ha sido actualizado por el administrador",
        });
      }
      await fetchUsers(); // asegúrate que refresque
      setModalVisible(false);
      setErrorMessage("");
    } catch (error) {
      console.error("Error al guardar usuario:", error);
      setErrorMessage("Ocurrió un error al guardar el usuario.");
    }
  };


  const handleDelete = async () => {
    if (!selectedUser) return;

    console.log("🗑️ Eliminando usuario:", selectedUser);

    try {
      const result = await deleteProfile(selectedUser.id);
      if (!result) {
        setErrorMessage("No se pudo eliminar el usuario.");
        return;
      }
      
      await registrarAuditoria({
        accion: "eliminar_usuario",
        modulo: "admin",
        descripcion: `Se eliminó el usuario ${selectedUser.email}`,
      });

      setSuccessMessage("Usuario eliminado correctamente.");
      fetchUsers();
    } catch (error) {
      console.error("Error en eliminación:", error);
      setErrorMessage("No se pudo eliminar el usuario." + error);
    } finally {
      setDeleteVisible(false);
      setSelectedUser(null);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLogs();
  }, []);

  return (
    <div>
      {successMessage && (
        <CAlert color="success" dismissible onClose={() => setSuccessMessage("")}>
          {successMessage}
        </CAlert>
      )}
      {errorMessage && (
        <CAlert color="danger" dismissible onClose={() => setErrorMessage("")}>
          {errorMessage}
        </CAlert>
      )}

      <CTabs defaultActiveItemKey={1}>
        <CTabList variant="underline">
          <CTab itemKey={1}>Perfil</CTab>
          <CTab itemKey={2}>Usuarios</CTab>
          <CTab itemKey={3}>Auditoría</CTab>
        </CTabList>
        <CTabContent>
          <CTabPanel itemKey={1}>
            <CCard>
              <CCardHeader className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">Mi Perfil</h4>
              </CCardHeader>
              <CCardBody>
                <AdminProfileCard />
              </CCardBody>
            </CCard>
          </CTabPanel>
          <CTabPanel itemKey={2}>
            <CCard>
              <CCardHeader className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">Gestión de Usuarios</h4>
                <CButton onClick={() => {
                  setSelectedUser(null);
                  setModalVisible(true);
                }}>
                  Crear Usuario
                </CButton>
              </CCardHeader>
              <CCardBody>
                {loading ? (
                  <p>Cargando usuarios...</p>
                ) : (
                  <UserList
                    users={users}
                    onEdit={(user) => {
                      setSelectedUser(user);
                      setModalVisible(true);
                    }}
                    onDelete={(user) => {
                      setSelectedUser(user);
                      setDeleteVisible(true);
                    }}
                  />
                )}
              </CCardBody>
            </CCard>
          </CTabPanel>

          <CTabPanel itemKey={3}>
            <CCard>
              <CCardHeader><h5>Registros de Auditoría</h5></CCardHeader>
              <CCardBody>
                <AuditLogList logs={logs} />
              </CCardBody>
            </CCard>
          </CTabPanel>
        </CTabContent>
      </CTabs>

      <UserFormModal
        visible={modalVisible}
        user={selectedUser}
        onSave={handleSave}
        onClose={() => setModalVisible(false)}
      />

      <ConfirmDeleteModal
        visible={deleteVisible}
        user={selectedUser}
        onConfirm={handleDelete}
        onClose={() => {
          setDeleteVisible(false);
          setSelectedUser(null);
        }}
      />

    </div>
  );
};

export default AdminDashboardPage;