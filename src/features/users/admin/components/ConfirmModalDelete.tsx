import { CModal, CModalHeader, CModalBody, CModalFooter, CModalTitle, CButton } from "@coreui/react";

type ConfirmDeleteModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  user?: { full_name: string } | null;
};

export const ConfirmDeleteModal = ({
  visible,
  onClose,
  onConfirm,
  user,
}: ConfirmDeleteModalProps) => (
  <CModal alignment="center" visible={visible} onClose={onClose}>
    <CModalHeader>
      <CModalTitle>Confirmar eliminación</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ¿Estás seguro de eliminar a <strong>{user?.full_name}</strong>?
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" onClick={onClose}>Cancelar</CButton>
      <CButton color="danger" onClick={onConfirm}>Eliminar</CButton>
    </CModalFooter>
  </CModal>
);
