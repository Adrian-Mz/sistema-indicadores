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

  const userId = session?.user?.id ?? null;

  useEffect(() => {
    if (session === undefined) return;

    if (!userId) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (!error) setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, [userId]); // <- OJO: si quieres, puedes quitar session y dejar solo [userId]
  // Mejor: SOLO [userId] (recomendado)

  return { profile, loading };
}
