import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xnhshopejbhpsuwkthbv.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuaHNob3BlamJocHN1d2t0aGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNzEwNzQsImV4cCI6MjEwMDc0NzA3NH0.7_WGMdoVecW3ciON4fuI8eEKr_rq4DiHPZkAsSje-Yc";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);