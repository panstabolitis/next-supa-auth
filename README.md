NextJS x Supabase Authentication demo
Simple demo that allows the user to log in, log out using the Google Provider!

# Setup
1. Create a new `.env.local` file.
    Supabase URL and ANON Key can be found by going to [Project Settings / API](https://supabase.com/dashboard/)

    ```bash
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
    ```

2. Create a new Supabase project and enable the Google Auth Provider. **You can create a Google Client ID by visiting the** [Google Console](https://console.cloud.google.com/)

3. Install dependencies
    ```bash
    npm install
    ```

4. Run Dev 
    ```bash
    npm run dev
    ```