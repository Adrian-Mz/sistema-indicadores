// src/features/admin/services/adminServices.tsx
import { supabase } from "../../../../utils/supabaseClient";
import { supabaseAuthless } from "../../../../utils/supabaseClientAuthless";
import { sendUserCredentialsEmail } from "../../../../utils/emailService";

export type User = {
  id: string;
  full_name: string;
  email: string;
  role: "user" | "admin";
};

export type Auditoria = {
  id: string;
  usuario_id: string;
  correo: string;
  accion: string;
  modulo: string;
  descripcion: string;
  fecha: string;
};

export const getAuditoriaLogs = async (): Promise<Auditoria[]> => {
  const { data, error } = await supabase
    .from("auditoria")
    .select("*")
    .order("fecha", { ascending: false });

  if (error) {
    console.error("Error al obtener logs de auditoría:", error.message);
    return [];
  }

  return data ?? [];
};

// Obtener todos los perfiles
export const getAllProfiles = async (): Promise<User[]> => {
  const { data, error } = await supabase.from("profiles").select("*");
  if (error) {
    console.error("Error al obtener usuarios:", error.message);
    return [];
  }

  // Asegura que los datos tienen el tipo correcto
  return (data ?? []).map((item) => ({
    id: item.id,
    full_name: item.full_name,
    email: item.email,
    role: item.role as "user" | "admin", // 🔴 sin esto el tipo queda como string
  }));
};

// Obtener un perfil por ID
export const getProfileById = async (id: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error al obtener perfil:", error.message);
    return null;
  }

  return data;
};

// Crear actualizar un perfil
 export const upsertProfile = async (user: { id: string; full_name: string; email: string; role: string }) => {
  console.log("Actualizando usuario con ID:", user.id);
  console.log("Intentando actualizar:", user);

  const { data, error } = await supabase
    .from("profiles")
    .update({
      full_name: user.full_name,
      email: user.email,
      role: user.role,
    })
    .eq("id", user.id)
    .select();  // 👈 NECESARIO para que devuelva filas actualizadas

  if (error) {
    console.error("Error actualizando usuario:", error.message);
    return null;
  }

  console.log("Actualizando con:", user);

  if (data.length === 0) {
    console.warn("⚠️ No se actualizó ninguna fila. Revisa si el ID es correcto.");
  }

  return data;
};




// Eliminar un perfil
export const deleteProfile = async (id: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", id)
    .select(); // 🔑 Esto también es clave para que devuelva algo

  if (error) {
    console.error("Error eliminando usuario:", error.message);
    return null;
  }

  return data;
};

export const createUserWithAuthAndProfile = async ({
  full_name,
  email,
  role,
}: {
  full_name: string;
  email: string;
  role: "user" | "admin";
}) => {
  // 1. Generar una contraseña aleatoria
  const password = Math.random().toString(36).slice(-10);

  // 2. Crear el usuario en Supabase Auth
  const { data, error: signUpError } = await supabaseAuthless.auth.signUp({
    email,
    password,
  });

  if (signUpError || !data.user) {
    throw new Error(signUpError?.message || "Error al registrar el usuario");
  }

  // 3. Insertar en la tabla profiles
  const { error: profileError } = await supabase.from("profiles").insert([
    {
      id: data.user.id,
      full_name,
      email,
      role,
    },
  ]);

  if (profileError) {
    throw new Error(profileError.message || "Error al crear perfil");
  }

  // 4. Enviar el correo con credenciales
  const correoEnviado = await sendUserCredentialsEmail(full_name, email, password);

  if (!correoEnviado) {
    console.warn("Usuario creado, pero falló el envío del correo.");
  }

  return true;
};

