# Verifikasi portfolio Hawa

Dilakukan pada 16 Oktober 2026, secara lokal tanpa deployment.

- `npm.cmd run build`: pemeriksaan TypeScript dan build Vite berhasil.
- Render browser Microsoft Edge headless melalui Playwright pada viewport 375, 768, 1024, dan 1440 px. Screenshot pembuka dan halaman penuh ditinjau; bagian pengalaman, karya, organisasi, serta kontak juga ditinjau melalui screenshot terpisah.
- Keempat viewport: respons HTTP 200, lebar dokumen sama dengan lebar viewport, satu H1, tanpa gambar rusak, tanpa target jangkar yang hilang, tanpa error JavaScript.
- Menu ponsel membuka dan menutup, `aria-expanded` sesuai keadaan; memilih navigasi menutup menu dan menuju bagian tujuan.
- Navigasi jangkar memperhitungkan header sticky. Posisi bagian pengalaman sesudah klik berada di bawah header pada keempat viewport.
- Fokus keyboard terlihat dengan outline solid. Skip link tersedia. Preferensi reduced motion mengubah scroll menjadi langsung.
- Tautan email menggunakan `mailto:hawaaluya7@gmail.com`; tidak mengirim pesan selama pengujian. LinkedIn tidak dirender sesuai pilihan pemilik.
- Tombol CV diuji dengan unduhan browser. Berkas unduhan identik dengan aset publik, jumlah halaman tepat dua. Teks kedua halaman diperiksa dan tidak mengandung informed consent. Kedua halaman PDF dirender ke PNG lalu diperiksa secara visual.
- Rasio kontras warna teks utama 13,11:1, teks sekunder 5,38:1, tombol utama 5,10:1, teks cerita 4,98:1, teks kontak 4,73:1. Semua pasangan teks utama yang diperiksa memenuhi minimum WCAG AA 4,5:1.
- Font memakai Georgia dan Segoe UI dengan fallback bawaan, sehingga tidak bergantung pada layanan font eksternal.
- Tidak ada foto orang lain atau aset dokumentasi rekaan. Foto kosong menggunakan komposisi tipografi atau artikel teks yang lengkap.
- Pendidikan tidak diberi status kelulusan, gelar, atau lisensi rekaan. Pengalaman klinis dan puskesmas dilabeli magang. Chicheebay dan produk ubi ungu dipisahkan.

## Batasan yang diketahui

Tidak ada koneksi browser interaktif yang tersedia dari alat preview chat; tinjauan visual dilakukan terhadap render dan screenshot browser lokal otomatis. Belum ada uji pembaca layar atau perangkat fisik. Foto asli, sertifikat pendukung, status pendidikan terkini, dan LinkedIn belum terkonfirmasi. CV unduhan mempertahankan isi sumber, termasuk ringkasan mahasiswa dan alamat LinkedIn yang perlu diperbarui; halaman website sudah memakai frasa netral dan menyembunyikan LinkedIn.

## Pembaruan sertifikat — 22 Oktober 2026

- Folder Drive yang diberikan pemilik dapat dibaca tanpa login: 12 gambar sertifikat dan satu PDF dua halaman, seluruhnya mencantumkan nama Hawa. Semua gambar diperiksa secara visual; dua halaman PDF diekstrak teksnya dan dirender untuk pemeriksaan visual.
- Seluruh 13 dokumen ditampilkan pada bagian `#sertifikat`, dengan judul kegiatan, penyelenggara, peran, tanggal, serta tautan langsung ke berkas Drive. Tautan folder lengkap juga tersedia. Berkas sumber hanya diunduh ke `tmp/certificates/` untuk pemeriksaan dan tidak dimasukkan ke `public/`.
- Nama penerima dan isi dokumen telah diperiksa; pemeriksaan ini tidak menyatakan autentikasi tanda tangan atau keabsahan penerbit secara independen.
- Sertifikat RSUD dicatat sebagai orientasi mahasiswa praktik, workshop karier sebagai peserta workshop, dan pelatihan/seminar sebagai keikutsertaan. Tidak ada gelar, lisensi profesi, atau tingkat kemampuan bahasa yang ditambahkan.
- `node node_modules/typescript/bin/tsc --noEmit` berhasil. Sesuai instruksi pemilik, **tidak menjalankan `npm run build`**.
- Pemeriksaan browser lokal Microsoft Edge headless pada 375, 768, 1024, dan 1440 px berhasil: 13 ID tautan sesuai daftar berkas Drive, tautan folder benar, target tab baru memakai `noopener`, tidak ada overflow horizontal, tidak ada gambar rusak atau error JavaScript, fokus keyboard terlihat, dan navigasi sertifikat menempatkan bagian di bawah header sticky.
- Screenshot bagian sertifikat ditinjau pada keempat ukuran. Foto profil yang diberikan pemilik sudah aktif; dokumentasi kegiatan/produk, status pendidikan terbaru, CV yang diperbarui, dan LinkedIn masih perlu dilengkapi atau dikonfirmasi.

## Animasi scroll — 22 Oktober 2026

- Fade-in 240 ms dengan pergeseran vertikal 12 px, berjalan sekali saat elemen masuk layar. Menggunakan IntersectionObserver dan Web Animations API tanpa dependensi tambahan. Pembuka langsung terlihat.
- TypeScript diperiksa dengan `tsc --noEmit`; tidak menjalankan build.
- Pengujian browser pada 375 dan 1440 px memverifikasi durasi, arah gerak, animasi sekali per elemen, tanpa overflow atau error JavaScript. Screenshot di tengah animasi juga ditinjau.
- Reduced motion tidak menjalankan animasi. Simulasi IntersectionObserver tidak tersedia dan kegagalan API animasi tetap menghasilkan konten terlihat. Animasi dibersihkan saat komponen dilepas, preferensi gerakan berubah, atau elemen menerima fokus keyboard.
