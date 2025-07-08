// src/features/admin/components/AuditLogList.tsx
import React, { useState } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,
  CPaginationItem
} from "@coreui/react";
import { Auditoria } from "../services/adminServices";

interface Props {
  logs: Auditoria[];
  itemsPerPage?: number;
}

const AuditLogList: React.FC<Props> = ({ logs, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(logs.length / itemsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return logs.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <CTable striped hover responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Fecha</CTableHeaderCell>
            <CTableHeaderCell>Correo</CTableHeaderCell>
            <CTableHeaderCell>Acción</CTableHeaderCell>
            <CTableHeaderCell>Descripción</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {getCurrentPageData().map((log) => (
            <CTableRow key={log.id}>
              <CTableDataCell>{new Date(log.fecha).toLocaleString()}</CTableDataCell>
              <CTableDataCell>{log.correo}</CTableDataCell>
              <CTableDataCell>{log.accion}</CTableDataCell>
              <CTableDataCell>{log.descripcion}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      {totalPages > 1 && (
        <div className="mt-3 d-flex justify-content-center">
          <CPagination align="center">
            <CPaginationItem
              aria-label="Anterior"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &laquo;
            </CPaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <CPaginationItem
                key={i + 1}
                active={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </CPaginationItem>
            ))}

            <CPaginationItem
              aria-label="Siguiente"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &raquo;
            </CPaginationItem>
          </CPagination>
        </div>
      )}
    </>
  );
};

export default AuditLogList;
