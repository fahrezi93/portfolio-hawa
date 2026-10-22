# Portfolio Hawa

Website personal Siti Hawa Dewi Utari menggunakan React, TypeScript, Vite, dan CSS biasa. Tidak ada backend, analytics, atau deployment.

## Menjalankan

Memerlukan Node.js 22 atau versi kompatibel dengan Vite 6.

```sh
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite, biasanya http://127.0.0.1:5173. Di PowerShell dengan kebijakan skrip terbatas, gunakan `npm.cmd` sebagai pengganti `npm`.

```sh
npm run build
npm run preview
```

Build menjalankan pemeriksaan TypeScript lalu menghasilkan folder `dist`.

## Mengedit konten dan foto

Seluruh profil, pendidikan, pengalaman, cerita karya, organisasi, email, LinkedIn, CV, serta konfigurasi foto berada di **src/content.ts**. Tampilan di **src/App.tsx**, palet dan tata letak di **src/styles.css**, metadata di **index.html**.

1. Simpan potret dan dokumentasi asli ke `public/images/` (buat folder jika perlu).
2. Ubah `photos.portrait.src` menjadi `/images/potret-hawa.webp`.
3. Sesuaikan `alt`, `caption`, `position` (CSS object-position), `width`, dan `height` dengan foto asli.
4. Lakukan hal yang sama untuk `education`, `entrepreneurship`, dan `content` saat dokumentasi tersedia. Tanpa gambar, cerita tetap ditampilkan sebagai artikel lengkap. Potret menggunakan fallback tipografi dekoratif, bukan gambar orang lain.

Rekomendasi: potret 800 × 1000 px (4:5), dokumentasi 1200 × 800 px (3:2), format WebP yang telah dikompres. Jangan masukkan foto pasien, data responden, maupun PDF sumber penelitian ke `public/`.

`profile.linkedin` sengaja `null` sesuai arahan pemilik setelah ditemukan perbedaan alamat pada CV. Isi URL HTTPS lengkap setelah dikonfirmasi. `profile.cv` dapat diubah menjadi `null` untuk menyembunyikan semua tombol unduh.

## Catatan sumber dan kurasi

- Konten diverifikasi dari halaman 1–2 CV lokal yang diberikan. Halaman 3 informed consent tidak dipakai dan tidak disalin ke proyek.
- CV publik di `public/documents/CV-Siti-Hawa-Dewi-Utari.pdf` berisi **hanya dua halaman pertama**, dibuat sebagai dokumen PDF baru. Jumlah halaman, isi, dan render kedua halaman telah diperiksa. Berkas sumber gabungan tidak berada di aset publik.
- CV unduhan mempertahankan isi dan tata letak sumber, termasuk ringkasan yang masih menyebut mahasiswa, nomor kontak, dan teks LinkedIn sumber. Perbarui CV setelah status pendidikan dan alamat LinkedIn dikonfirmasi. Website menggunakan frasa netral tentang pendidikan, menyembunyikan LinkedIn, dan tidak menampilkan telepon.
- Periode pendidikan 2022–2025 dan IPK 3,76 mengikuti CV; tidak ditafsirkan sebagai konfirmasi kelulusan atau lisensi profesi.
- Program dietetik dan MIJP tercatat pada institusi/tahun yang sama. Halaman menyeleksi kontribusi magang dietetik agar tidak mengulang kegiatan; singkatan MIJP tidak dikembangkan.
- Chicheebay dan kolaborasi produk ubi ungu adalah kegiatan terpisah. Tahun Chicheebay tidak disebut di CV sehingga tidak diberi tahun rekaan.
- Pada 22 Oktober 2026, semua 13 berkas dalam folder Google Drive sertifikat telah dibaca dan dicocokkan dengan nama Hawa, termasuk sertifikat delegasi Gizi Peduli Indonesia 2023. Data judul, penyelenggara, peran, tanggal, serta ID berkas berada dalam `certificates` di `src/content.ts`; tautan folder berada pada `certificateFolderUrl`. Dokumen dibuka langsung melalui Drive, tanpa menyalin berkas sertifikat ke aset publik website.
- Sertifikat RSUD membuktikan orientasi mahasiswa praktik pada 11 Agustus 2025, bukan sertifikat kelulusan magang dietetik. Sertifikat workshop karier adalah keikutsertaan workshop, bukan pengalaman internship. Keikutsertaan seminar dan pelatihan tidak ditafsirkan sebagai lisensi profesi atau tingkat kemampuan tertentu.

## Yang perlu dilengkapi

Dokumentasi kegiatan/produk, konfirmasi status pendidikan terbaru, CV yang diperbarui, dan alamat LinkedIn. Potret sudah menggunakan `public/fotoprofil.webp`; sertifikat sudah terhubung ke Drive. Website dapat ditinjau tanpa aset tambahan tersebut.

## Verifikasi

Animasi masuk saat scroll diatur di `src/useScrollReveal.ts`: fade-in 240 ms dengan pergeseran 12 px, sekali per elemen. Menggunakan API browser bawaan tanpa dependensi tambahan. Pembuka tetap langsung terlihat; judul bagian, pengalaman, karya, organisasi, sertifikat, dan kontak muncul saat masuk layar. Reduced motion mematikan animasi. Jika API tidak tersedia atau animasi gagal, konten tetap terlihat.

Lihat `docs/verification.md` untuk hasil pemeriksaan. Berkas sementara pengujian dan render berada di `tmp/`, yang diabaikan Git dan tidak masuk build.
