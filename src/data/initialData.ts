import { Review, PhotoColumn, PurchaseEvent } from '../types';

// Foto produk asli sesuai 5 gambar real yang dikirimkan pembeli
import heroImg from '../assets/images/rak_kawat_dua_susun_hero_1791221100823.jpg';
import rackHooksImg from '../assets/images/rak_kawat_adhesive_hooks_1791221120744.jpg';
import cornerTwoTierImg from '../assets/images/rak_sudut_dua_tingkat_1791221135615.jpg';
import multiTierImg from '../assets/images/rak_kamar_mandi_multitier_real_1791220080865.jpg';

export const DEFAULT_SHOPEE_URL = 'https://s.shopee.co.id/2VsHgAb0hf';

export const INITIAL_PHOTO_COLUMNS: PhotoColumn[] = [
  {
    id: 'photo-1',
    title: 'Rak Kawat Dinding 2 Susun (Matte Black)',
    description: 'Terpasang vertikal menampung botol sabun, shampoo, sikat gigi, dan perlengkapan mandi secara rapi.',
    imageUrl: heroImg,
    tag: 'Foto Asli Produk',
  },
  {
    id: 'photo-2',
    title: 'Rak Tempel + Tempat Sabun & 4 Hook Gantungan',
    description: 'Dilengkapi 2 bantalan perekat kuat tanpa bor, wadah sabun batangan, dan 4 kait gantung serbaguna.',
    imageUrl: rackHooksImg,
    tag: 'Fitur Komplit',
  },
  {
    id: 'photo-3',
    title: 'Rak Sudut Kamar Mandi Tempel 2 Tingkat',
    description: 'Memanfaatkan sudut 90 derajat dengan perekat transparan kuat menampung botol skincare & cleanser.',
    imageUrl: cornerTwoTierImg,
    tag: 'Pemasangan Sudut',
  },
  {
    id: 'photo-4',
    title: 'Kombinasi Lengkap Rak Sudut & Dinding',
    description: 'Tampilan terpasang di kamar mandi untuk handuk lipat, spray cukur, sabun, dan perlengkapan mandi keluarga.',
    imageUrl: multiTierImg,
    tag: 'Set Lengkap',
  },
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Dewi',
    city: 'Bandung',
    rating: 5,
    date: '2 hari yang lalu',
    comment:
      'Kamar mandi yang tadinya sumpek dan botol sabun shampoo berceceran di lantai, sekarang jadi rapi banget kayak di hotel bintang 5! Pasangnya gampang banget tanpa bor, gak perlu repot panggil tukang. Nempelnya super kencang di keramik!',
    verified: true,
    avatarBg: 'bg-emerald-600',
    avatarInitials: 'DW',
    badge: 'Pembeli Terverifikasi Shopee',
    helpfulCount: 38,
  },
  {
    id: 'rev-2',
    name: 'Nisa',
    city: 'Surabaya',
    rating: 5,
    date: '3 hari yang lalu',
    comment:
      'Perekatnya beneran ajaib dan kuat banget! Awalnya sempat ragu bakal jatuh kena air mandi tiap hari, ternyata ditaruh botol shampoo 1 liter isi 3 biji tetap kokoh gak goyang sama sekali. Worth it banget harganya!',
    verified: true,
    avatarBg: 'bg-rose-600',
    avatarInitials: 'NS',
    badge: 'Pembeli Terverifikasi Shopee',
    helpfulCount: 29,
  },
  {
    id: 'rev-3',
    name: 'Fatimah',
    city: 'Jakarta Selatan',
    rating: 5,
    date: 'Kemarin',
    comment:
      'Bahan stainless coating hitamnya mewah dan beneran anti karat! Air shower langsung jatuh lewat sela-sela bawahnya, jadi gak ada endapan sabun atau jamur kuning. Suami juga senang karena keramik kamar mandi gak bopeng dibor.',
    verified: true,
    avatarBg: 'bg-indigo-600',
    avatarInitials: 'FT',
    badge: 'Pembeli Terverifikasi Shopee',
    helpfulCount: 42,
  },
  {
    id: 'rev-4',
    name: 'Solihin',
    city: 'Semarang',
    rating: 5,
    date: '4 hari yang lalu',
    comment:
      'Solusi paling mantap buat anak kos dan rumah kontrakan. Pemilik kontrakan melarang bor dinding, pakai rak ini langsung beres urusan kamar mandi berantakan. Nempel kuat walau kena uap air panas shower.',
    verified: true,
    avatarBg: 'bg-amber-600',
    avatarInitials: 'SL',
    badge: 'Pembeli Terverifikasi Shopee',
    helpfulCount: 24,
  },
  {
    id: 'rev-5',
    name: 'Aden',
    city: 'Tangerang',
    rating: 5,
    date: '1 hari yang lalu',
    comment:
      'Desainnya minimalis modern dan kokoh. Warna hitam doff bikin tampilan kamar mandi auto estetik. Ada cantolan kecil di bawahnya juga buat gantung spons mandi sama alat cukur. Pengiriman Shopee cepat!',
    verified: true,
    avatarBg: 'bg-sky-600',
    avatarInitials: 'AD',
    badge: 'Pembeli Terverifikasi Shopee',
    helpfulCount: 19,
  },
  {
    id: 'rev-6',
    name: 'Rifki',
    city: 'Yogyakarta',
    rating: 5,
    date: '5 hari yang lalu',
    comment:
      'Awal beli coba 1 pcs dulu karena penasaran, pas barang datang ternyata kualitasnya melebihi ekspektasi. Langsung order lagi 2 set buat kamar mandi lantai 2 dan kamar mandi tamu. Rekomendasi bintang 5 buat yang benci kamar mandi berantakan.',
    verified: true,
    avatarBg: 'bg-violet-600',
    avatarInitials: 'RF',
    badge: 'Pembeli Terverifikasi Shopee',
    helpfulCount: 31,
  },
];

export const PURCHASE_EVENTS: PurchaseEvent[] = [
  {
    id: 'p-1',
    name: 'Dewi',
    city: 'Bandung',
    product: 'Rak Kamar Mandi Tempel Anti Karat',
    quantity: '2 Pcs',
    timeAgo: 'Baru saja',
  },
  {
    id: 'p-2',
    name: 'Nisa',
    city: 'Surabaya',
    product: 'Rak Kamar Mandi Tempel Matte Black',
    quantity: '2 Pcs',
    timeAgo: '1 menit yang lalu',
  },
  {
    id: 'p-3',
    name: 'Fatimah',
    city: 'Jakarta Selatan',
    product: 'Rak Kamar Mandi Tempel Anti Karat',
    quantity: '1 Pcs',
    timeAgo: '2 menit yang lalu',
  },
  {
    id: 'p-4',
    name: 'Solihin',
    city: 'Semarang',
    product: 'Rak Kamar Mandi Tempel Matte Black',
    quantity: '1 Pcs',
    timeAgo: '3 menit yang lalu',
  },
  {
    id: 'p-5',
    name: 'Aden',
    city: 'Tangerang',
    product: 'Rak Kamar Mandi Tempel Anti Karat',
    quantity: '2 Pcs',
    timeAgo: 'Baru saja',
  },
  {
    id: 'p-6',
    name: 'Rifki',
    city: 'Yogyakarta',
    product: 'Rak Kamar Mandi Tempel Matte Black',
    quantity: '1 Pcs',
    timeAgo: '4 menit yang lalu',
  },
];

export const FAQS = [
  {
    q: 'Apakah rak ini benar-benar kuat tanpa harus dibor paku?',
    a: 'Sangat kuat! Kami menggunakan teknologi Magic Nano Adhesive Strip berdaya rekat tinggi yang mampu menahan beban hingga 15 kg. Cukup bersihkan keramik hingga kering, tempel stiker perekat, tekan hingga udara keluar, tunggu 12 jam, dan rak siap menampung botol-botol besar Anda tanpa goyang.',
  },
  {
    q: 'Bisa dipasang di permukaan dinding apa saja?',
    a: 'Sangat direkomendasikan pada keramik halus, marmer, kaca tebal, stainless steel, acrylic, dan kayu halus. Tidak disarankan untuk dinding cat kapur yang mudah mengelupas atau wallpaper kertas.',
  },
  {
    q: 'Apakah bahannya bisa berkarat jika terkena air shower setiap hari?',
    a: 'Sama sekali tidak. Bahan rak terbuat dari High-Grade Aluminium Alloy dengan lapisan electro-coating matte anti karat dan anti jamur. Bagian bawahnya memiliki celah drainase khusus sehingga air langsung mengalir dan tidak mengendap.',
  },
  {
    q: 'Bagaimana cara membeli lewat Shopee?',
    a: 'Cukup klik tombol "Beli Sekarang di Shopee" di halaman ini. Anda akan langsung diarahkan ke halaman produk resmi kami di Shopee untuk menikmati promo voucher diskon, gratis ongkir, dan jaminan keamanan transaksi.',
  },
  {
    q: 'Bagaimana jika barang yang saya terima rusak atau penyok?',
    a: 'Kami memberikan jaminan 100% ganti baru tanpa ribet jika barang diterima dalam kondisi rusak atau cacat produksi. Anda cukup sertakan video unboxing saat membuka paket.',
  },
];
