Cara deploy:
1. Push ke github

2. Integrate sama vercel

3. Tambahin .env, bisa mengacu ke .env.example (NEXT_PUBLIC_BASE_URL, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, JWT_SECRET, DATABASE_URL,  SUPABASE_SERVICE_ROLE_KEY)

4. Create database pake Supabase (ini yg free dan lumayan mudah untuk integrasinya)
buat env nya DATABSE_URL ini: DATABASE_URL="postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
password sm project ref nya bisa cari di settings https://app.supabase.com/project/_/settings/database

5. Bikin juga storage bucket di Supabase sama folder uploads di dalamnya. sama bikin policy untuk Update + Select

6. Nanti klo udah edit build command divercel nya sesuai yg di screenshot (untuk initialize migration) [gambar 2]

7. Coba di redeploy lagi commit nya [gambar 3] 


Referensi:
https://github.com/supabase/storage-api/issues/86
https://supabase.com/docs/reference/javascript/v1/storage-from-upload
https://stackoverflow.com/questions/72861584/supabase-bucket-policy-to-insert-file-not-working 
