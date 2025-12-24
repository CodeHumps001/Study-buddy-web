import supabase from "./supabase";

export async function getCurrentUser() {
  // 1. Check if there is an active session in the browser
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // 2. Get the user object from the Auth Vault
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  // 3. Fetch the custom profile data from your 'profiles' table
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (profileError) {
    console.error("Profile could not be loaded");
    return null;
  }

  // Return a combined object of Auth and Profile data
  return { ...data.user, ...profile };
}
