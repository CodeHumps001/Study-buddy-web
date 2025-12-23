import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://exsinbedfsqfixfnijyk.supabase.co";
const supabaseKey = "sb_publishable_7VTdxZRryqSFpL3JGCyWtA_Gcrp1Dj2";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
