Cara deploy [Vercel + Supabase]
1. Push ke github

2. Create database pake Supabase (ini yg free dan lumayan mudah untuk integrasinya)
buat env nya DATABASE_URL ini: `DATABASE_URL="postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"`
password sm project ref nya bisa cari di settings https://app.supabase.com/project/_/settings/database

3. Bikin juga storage bucket di Supabase sama folder uploads di dalamnya. sama bikin policy untuk Update + Select ![image](https://user-images.githubusercontent.com/31380193/230716577-4f8ce8c2-21d6-45b9-b40b-b1968b5266e2.png)

4. Integrate dengan vercel

5. Tambahin .env pada vercel, bisa mengacu ke .env.example untuk isi ENV yg perlu ditambahkan![image](https://user-images.githubusercontent.com/31380193/230716659-703c9da5-5303-4f71-8d85-864036207051.png)

6. Override build command divercel nya sesuai yg di screenshot (untuk initialize migration) ![image](https://user-images.githubusercontent.com/31380193/230716583-ebf3039c-9189-4ce2-81d9-5c7d4ed6522a.png)

7. Ditunggu hingga process build selesai dan coba cek pada domain yg diassign Vercel
![image](https://user-images.githubusercontent.com/31380193/230716757-310d243d-3048-4329-a7e2-6938163c8396.png)

8. Untuk build command nya bisa di off in lagi saja overridenya kecuali nanti ada yg mau di migrate lagi tabel baru nya
![image](https://user-images.githubusercontent.com/31380193/230716802-2916400e-a4b0-49ed-bd00-29a43283d5c5.png)
