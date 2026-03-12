"use client";

import { useState } from "react";
import {
  ChevronDown,
  Heart,
  BookOpen,
  Lightbulb,
  BanknoteIcon,
  Mail,
} from "lucide-react";

const faqData = [
  {
    question: "Apakah STTB memiliki program beasiswa?",
    answer: "Ya, STTB memiliki 5 (lima) jenis beasiswa.",
  },
  {
    question: "Bagaimana saya dapat berpartisipasi mendukung program ini?",
    answer:
      "STTB sangat mengharapkan dukungan Bapak/Ibu untuk pengadaan beasiswa bagi mahasiswa S1 dan S2 dan Bapak/Ibu dapat mengisi form yang telah kami sediakan. Setelah form kami terima, maka unit beasiswa akan menghubungi Bapak/Ibu untuk menindaklanjutinya.",
  },
  {
    question: "Apakah STTB akan menyediakan laporan beasiswa bagi sponsor?",
    answer:
      "Ya, STTB akan menyediakan laporan tahunan kepada Bapak/Ibu sponsor beasiswa.",
  },
  {
    question: "Berapa dana untuk dapat berpartisipasi dalam program beasiswa?",
    answer:
      "Kami menyediakan gambaran besaran dana untuk setiap jenis beasiswa. Besaran ini dapat berubah dengan pemberitahuan sebelumnya seiring dengan perubahan besaran biaya. Untuk info lebih lengkap dapat menghubungi email: beasiswa@sttb.ac.id",
  },
  {
    question: "Bagaimana saya dapat memberikan dana sponsor beasiswa?",
    answer:
      "Bapak/Ibu dapat melakukan transfer dana ke rekening STTB yang akan tertera di form pemberian sponsor beasiswa.",
  },
];

const priorityCards = [
  {
    icon: Heart,
    title: "Beasiswa",
    color: "bg-sttb-accent-red",
    buttonColor:
      "border-sttb-accent-red text-sttb-accent-red hover:bg-sttb-accent-red hover:text-white",
    description:
      "Sebagian pribadi yang Tuhan panggil untuk melanjutkan ke jenjang pendidikan S1 bahkan S2 terkadang terkendala dengan pendanaan, dan mereka tidak tahu bagaimana dan kemana mereka bisa mendapat dukungan untuk mewujudkan panggilan tersebut.",
    details:
      "Dukungan beasiswa terbuka bagi mahasiswa yang sudah menjalani proses belajar sampai dengan semester ke-2 dengan minimal IPK 3,0 dan telah lulus proses seleksi serta wawancara dengan Tim Beasiswa sebelumnya.",
    link: "/finances/scholarships",
  },
  {
    icon: BookOpen,
    title: "Perpustakaan Digital",
    color: "bg-sttb-primary-blue",
    buttonColor:
      "border-sttb-primary-blue text-sttb-primary-blue hover:bg-sttb-primary-blue hover:text-white",
    description:
      "Perpustakaan STTB memiliki sekitar 50.000 buku dan terus berusaha memperkaya koleksi buku-buku baru yang dibutuhkan. Selain koleksi buku fisik, STTB juga menyediakan akses layanan e-book dan e-journal.",
    details:
      "Koleksi e-books tersebut dapat dimanfaatkan oleh dosen, mahasiswa, dan alumni. Ketersediaan buku baik fisik, e-book maupun jurnal yang tepat merupakan salah satu syarat utama dari terwujudnya kualitas pendidikan yang baik.",
    link: "#",
  },
  {
    icon: Lightbulb,
    title: "Dukungan Lain",
    color: "bg-sttb-dark-blue",
    buttonColor:
      "border-sttb-dark-blue text-sttb-dark-blue hover:bg-sttb-dark-blue hover:text-white",
    description:
      "Sebagai lembaga pendidikan yang terus menciptakan pendidik-pendidik yang bukan saja bertambah secara kuantitas tapi secara kualitas semakin baik. STTB tentunya tidak akan berhenti berinovasi dan berkembang sesuai dengan kemajuan dan kebutuhan jaman.",
    details:
      "Berbagai perencanaan ke depan telah kami persiapkan untuk mengembangkan semua sumber daya termasuk pembangunan, digital ministry, pembuatan studio rekaman video dan audio, dan program-program lainnya.",
    link: "#",
  },
];

export default function SupportSTTB() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dukung STTB</h1>
          <p className="text-xl text-gray-200">
            Kontribusi Anda menolong mereka mewujudkan panggilan Tuhan
          </p>
          <a
            href="#cara-donasi"
            className="inline-block mt-6 bg-sttb-accent-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition-colors"
          >
            CARA DONASI →
          </a>
        </div>
      </section>

      {/* Kontribusi Anda Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-lg font-bold text-sttb-accent-red tracking-widest uppercase italic">
                Kontribusi
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-sttb-dark-blue">
                ANDA
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
              <p className="text-center font-medium italic text-lg">
                dapat menolong STTB melanjutkan amanat Kristus untuk
                mempersiapkan dan mendidik pelayan-pelayan Tuhan yang sangat
                dibutuhkan untuk menjawab tantangan jaman agar menjadi
                pelayan-pelayan Tuhan yang berdampak bagi masyarakat.
              </p>
              <p>
                STTB sebagai Sekolah Tinggi yang terbuka bagi siapapun yang
                terpanggil untuk mau diperlengkapi, dibentuk dan dididik melalui
                program Studi S1 dan S2.
              </p>
              <p>
                Dukungan Bapak/Ibu akan sangat membantu biaya studi mahasiswa
                yang memiliki kendala finansial, peningkatan sumber daya,
                kualitas pendidik dan pendidikan, serta menunjang fasilitas
                teknologi pembelajaran.
              </p>
              <p>
                Bagi STTB, kontribusi Bapak/Ibu sangat penting, seberapapun
                nilainya akan sangat menolong kehidupan mahasiswa dan STTB.
                Terima kasih untuk dukungan dana dan doa yang telah diberikan
                yang sangat berdampak bagi pelayanan kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prioritas Penggunaan Donasi Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg font-bold text-sttb-accent-red tracking-widest uppercase">
              Prioritas Penggunaan
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-sttb-dark-blue">
              DONASI
            </h3>
            <div className="w-16 h-1 bg-sttb-accent-red mx-auto mt-3"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {priorityCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card Header with Icon */}
                <div
                  className={`${card.color} p-6 flex items-center justify-center`}
                >
                  <card.icon
                    className="w-16 h-16 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-sttb-dark-blue mb-3">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {card.details}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={card.link}
                      className={`inline-block border-2 ${card.buttonColor} font-semibold py-2 px-6 rounded transition-colors text-sm tracking-wide`}
                    >
                      SELENGKAPNYA
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kesediaan Mendukung + FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left - Introduction */}
            <div>
              <h2 className="text-lg font-bold text-sttb-accent-red tracking-widest uppercase italic mb-1">
                Kesediaan
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-sttb-dark-blue mb-4">
                MENDUKUNG
              </h3>
              <div className="w-16 h-1 bg-sttb-accent-red mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                Dengan segala kerendahan hati, kami mengundang Bapak/Ibu untuk
                menjadi rekan bagi pengembangan Kerajaan Allah dengan
                menginvestasikan pemimpin-pemimpin masa depan yang dapat
                mentransformasi kehidupan dan komunitas.
              </p>
            </div>

            {/* Right - FAQ Accordion */}
            <div className="flex flex-col">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-5 text-left hover:bg-gray-50 transition-colors px-2"
                  >
                    <span className="text-base font-bold text-sttb-dark-blue pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-sttb-accent-red shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-2 pb-5 text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulir Dukungan / Donation Section */}
      <section id="cara-donasi" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg font-bold text-sttb-accent-red tracking-widest uppercase">
              Formulir
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-sttb-dark-blue">
              DUKUNGAN
            </h3>
            <div className="w-16 h-1 bg-sttb-accent-red mx-auto mt-3"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Bank Transfer Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-1.5 bg-sttb-accent-red"></div>
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <BanknoteIcon
                    className="w-16 h-16 text-sttb-primary-blue mb-6"
                    strokeWidth={1.5}
                  />

                  <p className="text-gray-600 mb-6 text-lg">
                    Bentuk kontribusi dapat berupa Bank Transfer
                  </p>

                  <div className="space-y-1 mb-6">
                    <p className="text-lg font-bold text-sttb-dark-blue">
                      BCA Surya Sumantri
                    </p>
                    <p className="text-lg font-bold text-sttb-dark-blue">
                      Account No. 282 300 5555
                    </p>
                    <p className="text-lg font-bold text-sttb-dark-blue">
                      Yayasan STT Bandung
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sttb-primary-blue">
                    <Mail className="w-5 h-5" />
                    <a
                      href="mailto:keuangan@sttb.ac.id"
                      className="text-sttb-primary-blue hover:underline font-medium"
                    >
                      keuangan@sttb.ac.id
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
