import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export type Role = "admin" | "user";

type UserProfile = {
  id: string;
  full_name: string;
  email: string;
  role: Role;
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null); // perfil del usuario
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: session } = await supabase.auth.getSession();
      const user = session?.session?.user;
      if (!user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!error) setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  return { profile, loading };
}
