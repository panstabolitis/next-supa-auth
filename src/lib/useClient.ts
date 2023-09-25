import { createClient } from '@supabase/supabase-js'; // Import this if not already imported
import { useSession } from 'next-auth/react';

// Use `useSession()` or `unstable_getServerSession()` to get the NextAuth session.
const { data: session } = useSession() || {};
const { supabaseAccessToken } = session || {}; // Destructure supabaseAccessToken and use an empty object as a fallback if session is undefined.

const createSupabaseClient = () => {
  // Check if supabaseAccessToken is null or empty
  if (!supabaseAccessToken) {
    // Return client without the "global"
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  
  // Return client with the "global"
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    }
  );
}

export const supabase = createSupabaseClient();
