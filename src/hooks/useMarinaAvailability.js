import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useMarinaAvailability(marinaId) {
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!marinaId) return;

    const fetchAvailability = async () => {
      setLoading(true);

      const today = new Date().toISOString().split("T")[0];

      const { data, error } = await supabase
        .from("marina_availability")
        .select("date, is_available")
        .eq("marina_id", marinaId)
        .gte("date", today)
        .order("date", { ascending: true });
		
      if (error) {
        setError(error);
      } else {
        setAvailability(data);
      }

      setLoading(false);
    };

    fetchAvailability();
  }, [marinaId]);

  return { availability, loading, error };
}