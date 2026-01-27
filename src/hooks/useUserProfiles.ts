import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Session } from "@supabase/supabase-js";

type Role = "admin" | "user";

type UserProfile = {
  id: string;
  full_name: string;
  email: string;
  role: Role;
};

export function useUserProfile(session: Session | null | undefined) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⛔ mientras la sesión se resuelve, NO decidir nada
    if (session === undefined) return;

    // 🔓 no logueado
    if (!session) {
      setProfile(null);
      setLoading(false);
      return;
    }

    // 🔐 logueado → cargar perfil
    const fetchProfile = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (!error) setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, [session]);

  return { profile, loading };
}
