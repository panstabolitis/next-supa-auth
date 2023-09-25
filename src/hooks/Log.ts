import { supabase } from "@/lib/useClient";

export async function signInWithGoogle() {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
      
        if (error) throw error;
        console.log('Signed in:', data);
      
    } catch (error) {
        console.error('Error signing in:', error);
    }
}

export async function signOut() {
    try {
        const { error } = await supabase.auth.signOut();
      
        if (error) throw error;
      
        console.log('Successfully signed out!');
      
    } catch (error) {
        console.error('Error signing out:', error);
    }
}
  