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

// Obtener todos los perfiles
export const getAllProfiles = async () => {
  const { data, error } = await supabase.from("profiles").select("*");
  if (error) {
    console.error("Error al obtener usuarios:", error.message);
    return [];
  }
  return data;
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
  const { data, error } = await supabase
    .from("profiles")
    .update({
      full_name: user.full_name,
      email: user.email,
      role: user.role,
    })
    .eq("id", user.id);

  if (error) {
    console.error("Error actualizando usuario:", error.message);
    return null;
  }

  return data;
};

// Eliminar un perfil
export const deleteProfile = async (id: string) => {
  const { data, error } = await supabase.from("profiles").delete().eq("id", id);
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
