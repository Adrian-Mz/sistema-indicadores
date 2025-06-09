// src/features/admin/components/UserList.tsx

import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
}

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserList = ({ users, onEdit, onDelete }: Props) => {
  return (
    <CTable hover responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Nombre</CTableHeaderCell>
          <CTableHeaderCell>Correo</CTableHeaderCell>
          <CTableHeaderCell>Rol</CTableHeaderCell>
          <CTableHeaderCell>Acciones</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {users.map((user) => (
          <CTableRow key={user.id}>
            <CTableDataCell>{user.full_name}</CTableDataCell>
            <CTableDataCell>{user.email}</CTableDataCell>
            <CTableDataCell>{user.role}</CTableDataCell>
            <CTableDataCell>
              <CButton
                size="sm"
                color="info"
                className="me-2"
                onClick={() => onEdit(user)}
              >
                Editar
              </CButton>

              <CButton
                size="sm"
                color="danger"
                onClick={() => onDelete(user)}
                disabled={user.role === "admin"}
                title={user.role === "admin" ? "No se puede eliminar un administrador" : ""}
              >
                Eliminar
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default UserList;
