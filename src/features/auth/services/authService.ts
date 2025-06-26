import { supabase } from "../../../utils/supabaseClient";

export async function login(email: string, password: string) {
  // 1. Buscar si existe el perfil con ese correo
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", email)
    .single();

  if (profileError || !profile) {
    throw new Error("No tienes acceso al sistema. Contacta con el administrador.");
  }

  // 2. Si existe, realizar login
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}