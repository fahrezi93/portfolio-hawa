export type Photo = {
  src: string | null
  alt: string
  caption: string
  position: string
  width: number
  height: number
}

// Tambahkan berkas ke public/images, lalu isi src dengan '/images/nama-berkas.webp'.
// Null berarti komposisi tetap ditampilkan tanpa foto atau permintaan aset kosong.
export const photos: Record<string, Photo> = {
  portrait: { src: null, alt: 'Potret Siti Hawa Dewi Utari', caption: 'Hawa · Gizi, edukasi, dan masyarakat', position: '50% 40%', width: 800, height: 1000 },
  education: { src: null, alt: 'Dokumentasi edukasi gizi dalam Gizi Peduli Indonesia', caption: 'Gizi Peduli Indonesia · Bogor, 2023', position: '50% 50%', width: 1200, height: 800 },
  entrepreneurship: { src: null, alt: 'Dokumentasi produk kewirausahaan Chicheebay', caption: 'Chicheebay · PMW Universitas Sriwijaya', position: '50% 50%', width: 1200, height: 800 },
  content: { src: null, alt: 'Dokumentasi konten promosi kesehatan saat magang', caption: 'Promosi kesehatan · RSUD Ahmad Yani, 2025', position: '50% 50%', width: 1200, height: 800 },
}

export const profile = {
  name: 'Siti Hawa Dewi Utari',
  nameLines: ['Siti Hawa', 'Dewi Utari'],
  displayName: 'Hawa',
  introduction: 'Saya Hawa, berlatar pendidikan gizi di Universitas Sriwijaya. Pengalaman saya mencakup edukasi masyarakat, praktik gizi klinis melalui magang, dan pembuatan konten kesehatan.',
  about: [
    'Bagi saya, belajar gizi juga berarti belajar memahami keseharian orang lain. Melalui pendidikan di Universitas Sriwijaya dan pengalaman magang, saya mengenal proses asuhan gizi serta layanan kesehatan yang hadir langsung di tengah masyarakat.',
    'Saya tertarik pada cara informasi kesehatan disampaikan: melalui percakapan, kegiatan edukasi, maupun konten digital. Pengalaman-pengalaman ini menjadi bekal saya untuk terus belajar dan berkontribusi di bidang gizi dan kesehatan.',
  ],
  education: { program: 'Program Studi Gizi', institution: 'Universitas Sriwijaya', period: '2022–2025', gpa: '3,76' },
  email: 'hawaaluya7@gmail.com',
  linkedin: null as string | null,
  cv: '/documents/CV-Siti-Hawa-Dewi-Utari.pdf' as string | null,
}

export const experiences = [
  {
    year: '2025', type: 'Magang dietetik', institution: 'RSUD Ahmad Yani', location: 'Lampung',
    points: ['Melakukan asesmen pada pasien yang berisiko malnutrisi.', 'Terlibat dalam proses asuhan dan konseling gizi selama magang.', 'Membuat konten promosi kesehatan melalui TikTok.'],
  },
  {
    year: '2025', type: 'Magang layanan kesehatan masyarakat', institution: 'Puskesmas Makrayu', location: 'Palembang',
    points: ['Melakukan pengukuran tinggi dan berat badan dalam kegiatan layanan keliling, serta edukasi kesehatan.', 'Mengikuti kunjungan rumah untuk pemantauan sosial dan kesehatan pasien dengan obesitas.', 'Melakukan pengukuran tekanan darah dalam program Cek Kesehatan Gratis.'],
  },
  {
    year: '2023', type: 'Delegasi Gizi Peduli Indonesia', institution: 'IPB University', location: 'Bogor',
    points: ['Memberikan edukasi gizi di sekolah dasar di Uncal, Bogor.', 'Berkolaborasi mengembangkan produk pangan berbahan ubi ungu.', 'Mengikuti kegiatan pengabdian masyarakat selama tiga hari.'],
  },
]

export const stories = [
  {
    number: '01', category: 'Edukasi masyarakat', title: 'Mengenalkan gizi sejak bangku sekolah', year: '2023', photo: 'education',
    description: 'Sebagai delegasi Gizi Peduli Indonesia, saya terlibat dalam edukasi gizi bagi siswa sekolah dasar di Uncal, Bogor. Kegiatan ini merupakan bagian dari pengabdian masyarakat selama tiga hari.',
    note: 'Gizi Peduli Indonesia · IPB University',
  },
  {
    number: '02', category: 'Kewirausahaan', title: 'Chicheebay: dari gagasan ke pemasaran', year: null, photo: 'entrepreneurship',
    description: 'Saya mengembangkan proposal inovasi kewirausahaan Chicheebay yang memperoleh pendanaan PMW Universitas Sriwijaya. Saya juga terlibat dalam penjualan produk serta memimpin pemasaran digital dan promosi melalui media sosial.',
    note: 'Pendanaan PMW · Universitas Sriwijaya',
  },
  {
    number: '03', category: 'Komunikasi kesehatan', title: 'Membawa pesan kesehatan ke ruang digital', year: '2025', photo: 'content',
    description: 'Saat menjalani magang di RSUD Ahmad Yani, saya membuat konten promosi kesehatan melalui TikTok. Ini menjadi kesempatan untuk mengolah informasi kesehatan ke dalam format digital.',
    note: 'Konten promosi kesehatan · Program magang',
  },
]

export const organizations = [
  { name: 'HIKAGI Universitas Sriwijaya', period: '2023–2024', role: 'Staf bidang pengembangan keterampilan mahasiswa', description: 'Mengikuti kegiatan ILMAGI dan menjadi delegasi Gizi Peduli Indonesia di IPB University.' },
  { name: 'BKM Adz-Dzikra', period: '2023–2024', role: 'Staf bidang kajian Islam · Fakultas Kesehatan Masyarakat', description: 'Menjadi ketua pelaksana One Day One Juz dan Millennial Islamic Festival, serta sekretaris pelaksana Kajian Islami Mahasiswa (KAMAMI).' },
]
