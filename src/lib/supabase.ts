import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Link {
  id: string;
  slug: string;
  long_url: string;
  clicks: number;
  created_at: string;
  last_clicked_at: string | null;
}
