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
  const MAX_VISIBLE_PAGES = 5;

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

  const getVisiblePages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= MAX_VISIBLE_PAGES + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");

    pages.push(totalPages);

    return pages;
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
              <CTableDataCell>
                {new Date(log.fecha).toLocaleString()}
              </CTableDataCell>
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

            {getVisiblePages().map((page, index) =>
              page === "..." ? (
                <CPaginationItem key={`ellipsis-${index}`} disabled>
                  ...
                </CPaginationItem>
              ) : (
                <CPaginationItem
                  key={page}
                  active={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </CPaginationItem>
              )
            )}

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
