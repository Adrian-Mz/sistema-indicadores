  import { useEffect, useState } from "react";
  import { getAllProfiles, upsertProfile, deleteProfile, createUserWithAuthAndProfile } from "../services/adminServices";
  import { 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CButton, 
    CAlert,
  } from "@coreui/react";
  import { UserFormModal } from "../components/UserFormModal";
  import { ConfirmDeleteModal } from "../components/ConfirmModalDelete";
  import UserList from "../components/UserList";

 type User = {
    id: string;
    full_name: string;
    email: string;
    role: "user" | "admin";
  }

  const AdminDashboardPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const result = await getAllProfiles();
    setUsers(result || []);
    setLoading(false);
  };

  const handleSave = async (user: User) => {
    try {
      if (!user.id) {
        await createUserWithAuthAndProfile(user);
        setSuccessMessage("Usuario creado correctamente.");
      } else {
        await upsertProfile(user);
        setSuccessMessage("Usuario actualizado correctamente.");
      }
      fetchUsers();
      setModalVisible(false);
      setErrorMessage("");
    } catch (error) {
      console.error("Error al guardar usuario:", error);
      setErrorMessage("Ocurrió un error al guardar el usuario.");
    }
  };

  const handleDelete = async () => {
    if (!selectedUser) return;
    try {
      await deleteProfile(selectedUser.id);
      setSuccessMessage("Usuario eliminado correctamente.");
      fetchUsers();
    } catch (error) {
      setErrorMessage("No se pudo eliminar el usuario." + error);
    } finally {
      setDeleteVisible(false);
      setSelectedUser(null);
    }
  };

  useEffect(() => {
    fetchUsers();
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