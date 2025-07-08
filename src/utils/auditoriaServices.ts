// src/utils/auditoriaService.ts
import { supabase } from "./supabaseClient"

export const registrarAuditoria = async ({
  accion,
  modulo,
  descripcion,
}: {
  accion: string;
  modulo: string;
  descripcion?: string;
}) => {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("auditoria").insert([
    {
      usuario_id: user.id,
      correo: user.email,
      accion,
      modulo,
      descripcion: descripcion || "",
    },
  ]);
};
