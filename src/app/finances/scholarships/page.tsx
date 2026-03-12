"use client";

import ScholarshipCard from "@/components/layouts/finances/ScholarshipCard";
import FaqList from "@/components/layouts/admissions/FaqList";

const scholarships = [
  {
    title: "Pastor Scholar",
    description: "Beasiswa S1",
    items: [
      "Diperuntukkan bagi mahasiswa S1 dan menjadikan STTB sebagai pilihan pertama",
      "Beasiswa meliputi biaya pendidikan dari semester 1.",
      "Memiliki prestasi yang menonjol di SMA (rata-rata rapor minimal 8.0)",
      "Memiliki panggilan yang jelas",
      "Memiliki rekomendasi yang kuat",
      "Minimal IPK 2.75 pada semester 1 dan minimal IPK 3,0 pada semester 2-4",
      "Bersedia mengalokasikan waktu 15 jam/bulan untuk membantu kegiatan administrasi/akademik di STTB",
      "Kelanjutan beasiswa akan dievaluasi per semester",
      "Bersedia memenuhi ikatan dinas 0.5 N (setara 2 tahun) setelah mahasiswa lulus",
    ],
  },
  {
    title: "Formattio",
    description: "Beasiswa S1",
    items: [
      "Beasiswa meliputi biaya pendidikan S1 dari tahun kedua atau telah menempuh semester 2",
      "Memiliki prestasi belajar yang baik serta lolos seleksi dan wawancara",
      "Kelanjutan beasiswa akan dievaluasi per semester",
      "Bersedia menyediakan waktu 15 jam/bulan untuk membantu kegiatan administrasi/akademik di STTB",
      "Bersedia memenuhi ikatan dinas 0.5 N",
    ],
  },
  {
    title: "Transformative Leadership",
    description: "Beasiswa S1 - S2",
    items: [
      "Diperuntukkan bagi mahasiswa S2 dengan prestasi akademik maupun non akademik yang menonjol",
      "Memiliki integritas dan panggilan yang jelas",
      "Meliputi maksimal 50% dari total biaya pendidikan",
      "Memberikan surat keterangan yang menyatakan telah melakukan pelayanan sebanyak 10 jam di pelayanan di lembaga pelayanan atau lembaga domisili setempat",
      "Bersedia menjadi bagian kepanitiaan acara event STTB dan bersedia menjadi ketua & koordinator kelas.",
      "Tidak diberlakukan ikatan dinas",
    ],
  },
];

const faq = {
  one: ["Ya, STTB menyediakan beasiswa bagi mahasiswa S1 dan S2"],
  two: ["Apa saja jenis beasiswa yang STTB tawarkan?"],
  three: [
    "Secara umum yaitu mahasiswa aktif penuh waktu yang memenuhi syarat dan lolos proses seleksi. ",
  ],
  four: [
    "Syarat dan ketentuan berbeda untuk setiap jenis beasiswa. Penjelasan dapat ditemukan di halaman masing-masing jenis beasiswa",
  ],
  five: [
    "Pendaftaran beasiswa dilakukan dengan mengunduh form aplikasi beasiswa yang disediakan serta melampirkan syarat-syarat yang ditentukan. Form beasiswa dapat diunduh di www.sttb.ac.id",
  ],
  six: [
    "Aplikasi beasiswa dapat diunduh dan dikirimkan kembali setiap saat selambat-lambatnya 3 (tiga) minggu sebelum proses pendaftaran periode ditutup.  Mahasiswa dihimbau melihat jadwal pengumpulan, proses seleksi beasiswa setiap tahun ajaran.",
  ],
  seven: [
    "Bisa, jika hasil evaluasi setiap semester/setiap tahun tidak mendukung, maka beasiswa akan dihentikan.",
  ],
  eight: [
    "Bagi penerima beasiswa tidak dapat mengajukan beasiswa jenis yang lain di periode berikutnya.",
  ],
  nine: [
    "Ya, jika mahasiswa yang pernah mengajukan beasiswa namun tidak berhasil, masih dapat mengajukan di periode berikutnya.",
  ],
};

export default function Scholarships() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            STTB Scholarships
          </h1>
          <p className="text-xl text-gray-200">
            STTB provides several scholarship categories for qualified students
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-sttb-dark-blue text-center pb-10">
              STTB Scholarships
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <ScholarshipCard
                  key={index}
                  title={scholarship.title}
                  description={scholarship.description}
                  items={scholarship.items}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-2">
            <h2 className="text-4xl font-bold text-sttb-dark-blue text-center pb-2">
              Scholarships FAQs
            </h2>
            <div className="flex flex-col gap-5">
              <FaqList
                title="Apakah STTB menyediakan beasiswa bagi mahasiswa?"
                requirements={faq.one}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Apa saja jenis beasiswa yang STTB tawarkan?"
                requirements={faq.two}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Siapa saja yang bisa mendapatkan beasiswa?"
                requirements={faq.three}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Apa syarat dan ketentuannya?"
                requirements={faq.four}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Bagaimana cara saya mendaftar aplikasi beasiswa?"
                requirements={faq.five}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Kapan saya bisa mengirim aplikasi beasiswa?"
                requirements={faq.six}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Apakah saya bisa kehilangan beasiswa saya selama masa studi?"
                requirements={faq.seven}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Apakah penerima beasiswa jenis tertentu dapat mengajukan jenis beasiswa yang lain?"
                requirements={faq.eight}
                className="bg-white p-8 rounded-xl"
              />
              <FaqList
                title="Jika saya tidak lolos seleksi, apakah saya dapat mengajukan aplikasi untuk periode berikutnya? "
                requirements={faq.nine}
                className="bg-white p-8 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Syarat & Ketentuan Beasiswa */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-1 bg-red-600"></div>
              <div className="p-8">
                <h3 className="text-sm font-semibold text-sttb-dark-blue tracking-wide uppercase mb-1">
                  Syarat &amp; Ketentuan
                </h3>
                <h2 className="text-3xl font-extrabold text-sttb-dark-blue mb-6">
                  BEASISWA
                </h2>
                <ul className="list-disc list-outside ml-4 space-y-3 text-gray-700 text-sm leading-relaxed">
                  <li>
                    Mengisi formulir beasiswa dan melengkapi dokumen penunjang
                    serta mengirimkan kembali ke unit beasiswa sesuai jadwal
                    yang ditetapkan
                  </li>
                  <li>
                    Memenuhi kriteria beasiswa yang didaftarkan, mengikuti
                    proses seleksi dan wawancara
                  </li>
                  <li>
                    Mengikuti evaluasi semester yang diadakan oleh unit beasiswa
                    dan jika dinyatakan tidak lolos, maka beasiswa tidak
                    dilanjutkan
                  </li>
                  <li>
                    Memiliki prestasi akademik yang baik (bagi siswa SMA
                    memiliki nilai rata-rata minimal 8,5 dan bagi mahasiswa
                    aktif, memiliki IPK minimal
                  </li>
                  <li>
                    Bersedia memenuhi ikatan dinas (pada jenis beasiswa yang
                    mewajibkan ikatan dinas)
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Sanksi Bagi Penerima Beasiswa */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-1 bg-red-600"></div>
              <div className="p-8">
                <h3 className="text-sm font-semibold text-sttb-dark-blue tracking-wide uppercase mb-1">
                  Sanksi Bagi Penerima
                </h3>
                <h2 className="text-3xl font-extrabold text-sttb-dark-blue mb-6">
                  BEASISWA
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Yang melanggar ketentuan dan peraturan STTB dan mendapatkan
                  Surat Peringatan, maka:
                </p>
                <ol className="list-decimal list-outside ml-4 space-y-3 text-gray-700 text-sm leading-relaxed mb-6">
                  <li>
                    Dana beasiswa akan diberhentikan pada semester berjalan
                  </li>
                  <li>
                    Penerima beasiswa wajib mengembalikan seluruh dukungan
                    beasiswa yang telah diterima
                  </li>
                  <li>Penerima beasiswa akan di skorsing selama 1 semester</li>
                </ol>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Yang tidak memenuhi persyaratan IPK minimal yaitu pada
                  semester I, IPK = min 2,75 dan semester II, IPK = 3, maka dana
                  beasiswa akan diberhentikan pada semester berjalan
                </p>
              </div>
            </div>

            {/* Full-width - Formulir Pengajuan Beasiswa */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-1 bg-red-600"></div>
              <div className="p-8 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-red-600 tracking-wide uppercase mb-1">
                    Formulir Pengajuan
                  </h3>
                  <h2 className="text-3xl font-extrabold text-sttb-dark-blue mb-4">
                    BEASISWA
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Pemohon dapat mengunduh form aplikasi beasiswa &amp;
                    melengkapinya serta mengirim melalui email ke
                    beasiswa@sttb.ac.id.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="/scholarship-form/Form-Aplikasi-Beasiswa-Baru-S1.pdf"
                    className="bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 px-8 rounded transition-colors"
                  >
                    UNDUH FORMULIR S1
                  </a>
                  <a
                    href="/scholarship-form/Form-Aplikasi-Beasiswa-Baru-S1.pdf"
                    className="bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 px-8 rounded transition-colors"
                  >
                    UNDUH FORMULIR S2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
