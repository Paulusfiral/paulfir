Langkah singkat untuk men-deploy ke GitHub Pages

1) Siapkan repository di GitHub

- Buat repository baru di GitHub (misal nama repo: `paulfir`). Jika ingin menggunakan CLI:

```bash
# ganti <USERNAME> dan <REPO>
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

2) Atur GitHub Pages

- Buka Settings → Pages pada repo GitHub Anda.
- Pilih Source: `Branch: main` dan folder `/ (root)` lalu Save.

3) URL yang dihasilkan

- Jika repo bernama `<REPO>` dan user `<USERNAME>`, URL akan: `https://<USERNAME>.github.io/<REPO>/`

4) Menambahkan foto profil Anda

- Letakkan file foto (jpg) di root repo dengan nama `profile.jpg`.
- Jika Anda memiliki file `profile.jpg`, tambahkan dan push. Contoh:

```bash
git add profile.jpg
git commit -m "Add profile photo"
git push
```

Catatan: file `profile.svg` sudah disertakan sebagai fallback.

5) Alternatif: menggunakan `gh` (GitHub CLI)

```bash
gh repo create <USERNAME>/<REPO> --public --source=. --remote=origin --push
```

Setelah push, halaman Pages akan tersedia dalam beberapa menit.
