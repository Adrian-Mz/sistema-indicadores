import { useState, useEffect } from 'react';
import {
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton,
  CFormInput,
  CFormLabel,
  CFormSelect
} from '@coreui/react';

type UserFormModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
  user?: User | null;
};

type User = {
  id: string;
  full_name: string;
  email: string;
  role: "user" | "admin";
};

const defaultUser: User = { id: "", full_name: "", email: "", role: "user" };

export const UserFormModal = ({ visible, onClose, onSave, user }: UserFormModalProps) => {
  const [form, setForm] = useState<User>(defaultUser);

  useEffect(() => {
    setForm(user || defaultUser);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <CModal alignment="center" visible={visible} onClose={onClose}>
      <CModalHeader>
        <CModalTitle>{form.id ? "Editar Usuario" : "Nuevo Usuario"}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormLabel>Nombre Completo</CFormLabel>
        <CFormInput name="full_name" value={form.full_name} onChange={handleChange} />

        <CFormLabel>Email</CFormLabel>
        <CFormInput name="email" type="email" value={form.email} onChange={handleChange} />

        <CFormLabel>Rol</CFormLabel>
        <CFormSelect name="role" value={form.role} onChange={handleChange}>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </CFormSelect>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>Cancelar</CButton>
        <CButton 
          color="primary" 
          onClick={() => {
            const { id, full_name, email, role } = form;
            onSave({ id, full_name, email, role });
          }}
          disabled={!form.full_name || !form.email || !form.role}
        >
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};
