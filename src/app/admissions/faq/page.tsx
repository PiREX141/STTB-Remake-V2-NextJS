"use client";

import FaqList from "@/components/layouts/admissions/FaqList";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CalendarDays,
  ClipboardList,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const navButtons: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Schedule", href: "/admissions/schedule", icon: CalendarDays },
  { label: "Procedure", href: "/admissions/procedure", icon: ClipboardList },
  { label: "FAQ", href: "/admissions/faq", icon: HelpCircle },
];

const contents = {
  // ... (isinya sama, tidak saya ubah agar hemat tempat)
  consideration: [
    "Karunia kemampuan/talenta Anda dan rencana pelayanan Anda di masa depan secara spesifik",
    "Peluang tempat dan jenis pelayanan di masa depan berkaitan dengan program studi yang Anda pilih",
    "Isi kurikulum program studi, program pembinaan mahasiswa",
    "Kualitas dosen dan pandangan iman STT",
    "Kemampuan finansial pribadi dalam membiayai studi sampai lulus.",
    "Manajemen waktu Anda – khususnya bagi Anda yang akan mengambil studi S2",
    "Komunitas belajar Anda kelak – siapakah yang akan menjadi teman-teman",
    "Fasilitas STT khususnya yang mendukung pembelajaran Anda",
  ],
  consultation: [
    "Hamba Tuhan di gereja Anda",
    "Pembina rohani/mentor rohani Anda",
    "Pihak admisi STT yang Anda ingin tuju tersebut",
    "Sebelum memutuskan untuk mengambil studi di STT, kami menyarankan Anda tetap berkonsultasi",
  ],
  research: [
    "Bertanya atau mendengarkan testimoni alumni dari STT",
    "Mengikuti open house yang diselenggarakan STT tersebut",
    "Mencari informasi dari website, video Youtube, posting media sosial",
  ],
};

export default function Faq() {
  // 1. STATE UNTUK DATA API FAQ
  const [faqData, setFaqData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. FETCH DATA DARI BACKEND .NET
  useEffect(() => {
    fetch("https://localhost:7029/api/FAQ")
      .then((res) => res.json())
      .then((data) => {
        setFaqData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data FAQ:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {/* ... SECTION 1-4 SAYA SKIP TULISANNYA AGAR FOKUS KE SECTION BAWAH, TETAP GUNAKAN KODE ASLIMU DI ATAS ... */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200">
            Criteria for prospective students
          </p>
        </div>
      </section>

      <section className="pt-12 pb-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            <div className="flex flex-col gap-1 items-cente pb-5">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Choosing the
              </h2>
              <h2 className="text-5xl font-bold text-sttb-accent-red text-center">
                Right Major
              </h2>
            </div>
            <FaqList
              title="Hal-hal yang harus dipertimbangkan dalam memilih STT atau program studi adalah:"
              requirements={contents.consideration}
              className="bg-gray-50 p-8 rounded-xl"
            />
            <FaqList
              title="Bila Anda kebingungan dalam memilih program studi maka Anda dapat berkonsultasi dengan pihak-pihak berikut:"
              requirements={contents.consultation}
              className="bg-gray-50 p-8 rounded-xl"
            />
            <FaqList
              title="Lakukan riset pribadi Anda untuk menentukan pilihan STT dengan cara:"
              requirements={contents.research}
              className="bg-gray-50 p-8 rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="pt-12 pb-16 bg-gray-100">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            <div className="flex flex-col gap-1 items-center pb-5">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Choosing
              </h2>
              <h2 className="text-5xl font-bold text-sttb-accent-red text-center">
                Bachelor (S1) Major
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Saya ingin menjadi Hamba Tuhan secara full time",
                  description:
                    "Bagi Anda yang lulus SMA/diploma maka kami menyarankan Anda memilih program Sarjana Teologi. Jika sinode gereja tempat Anda melayani nantinya tidak mengharuskan lulusan S.Th. yang melayani sebagai pendeta maka Anda juga dapat memilih program Sarjana Pendidikan Kristen.",
                },
                {
                  title:
                    "Saya ingin menjadi guru agama atau guru di sekolah Kristen",
                  description:
                    "Kami menyarankan Anda untuk mengambil program studi Sarjana Pendidikan Kristen (S.Pd.). Memang lulusan program Sarjana Teologi dari STTB bisa saja menjadi guru Agama Kristen karena mereka juga dibekali ilmu pendidikan, namun bila tujuan Anda sejak awal adalah menjadi guru maka program Sarjana Pendidikan Kristen jauh lebih tepat karena muatan ilmu-ilmu pendidikan jauh lebih banyak dalam prodi ini.",
                },
                {
                  title:
                    "Saya ingin bekerja di bidang misi dan menjadi misionaris",
                  description:
                    "Kami menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Sarjana Teologi (S.Th.) sementara ada juga yang membutuhkan lulusan Sarjana Pendidikan (S.Pd.) karena pelayanan misi lembaganya dikhususkan dalam pendidikan.",
                },
                {
                  title:
                    "Apakah dengan studi S1 di seminari dapat bekerja nongereja",
                  description:
                    "Ya, baik lulusan Sarjana Teologi (S.Th.) dan Sarjana Pendidikan Kristen (S.Pd.) dapat bekerja di lingkungan nongereja atau non sekolah Kristen. Kami menyarankan Anda sudah mempertimbangkan panggilan dan rencana pelayanan ke depannya sebelum memilih untuk masuk S1 di seminari.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="border-l-4 border-sttb-primary-blue pl-6 py-4 bg-white rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            <div className="flex flex-col gap-1 items-center pb-5">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Choosing
              </h2>
              <h2 className="text-5xl font-bold text-sttb-accent-red text-center">
                Master (S2) Major
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title:
                    "Saya ingin berkarir dalam hal akademik atau pendidikan",
                  description:
                    "Kami menyarankan Anda untuk memilih program studi Magister Pendidikan (M.Pd.) dan membuat tesis/riset tentang metode pembelajaran di sekolah tertentu dan Anda bisa merencanakan untuk mengambil studi lanjut (Doktoral) yang berhubungan dengan pengembangan tesis Anda. Bila Anda ingin berkarir dalam dunia pendidikan teologi maka Anda juga dapat mengambil program studi Magister Teologi. Program magister teologi dapat menunjang karir Anda untuk mengambil doktoral dalam bidang teologi atau menjadi dosen teologi. Gelar ini juga diakui oleh pemerintah sebagai gelar akademis.",
                },
                {
                  title: "Saya ingin menjadi Hamba Tuhan secara full time",
                  description:
                    "Bagi Anda yang lulus S1 maka kami menyarankan Anda untuk memilih program studi Magister Teologi (M.Th.) Anda akan menempuh jalur matrikulasi Magister Teologi. Khusus lulusan program Sarjana Pendidikan Kristen dari STTB dapat mengambil program M.Th. tanpa mengikuti jalur matrikulasi.",
                },
                {
                  title:
                    "Saya ingin mengintegrasikan iman Kristen saya dalam karir yang sedang saya jalani",
                  description:
                    "Kami menyarankan Anda untuk mengambil program studi Magister Ministri Pelayanan Marketplace (M.Min. Marketplace)i.",
                },
                {
                  title:
                    "Saya ingin bekerja di bidang misi dan menjadi misionaris",
                  description:
                    "Kami menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Magister Teologi (M.Th.) sementara ada juga yang menerima Magister Ministri atau Magister Pendidikan (M.Pd.). Apabila Anda ingin bermisi sebagai orang Kristen dalam kehidupan sehari-hari Anda di perkotaan maka kami menyarankan Anda mengambil program studi Magister Ministri Pelayanan Marketplace (M.Min. Marketplace).",
                },
                {
                  title:
                    "Saya sudah memiliki gelar Master of Divinity (M.Div.), tapi saya ingin memperdalam beberapa mata kuliah teologi yang belum saya dapatkan",
                  description:
                    "Magister Teologi (M.Th.) memiliki kekuatan akademik yang dibutuhkan untuk gelar vokasional seperti M.Div. ",
                },
                {
                  title:
                    "Saya ingin bekerja di lingkup gereja atau organisasi parachurch",
                  description:
                    "Umumnya gereja menerima mereka yang lulus dari program studi teologi namun kami juga menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda.  Beberapa denominasi membutuhkan Sarjana/Magister Teologi (M.Th.) sementara ada juga yang menerima Magister Ministri atau Sarjana/Magister Pendidikan (M.Pd.)",
                },
                {
                  title:
                    "Saya adalah aktivis gereja dan ingin diperlengkapi dalam bidang teologi untuk mengajar pemuridan jemaat/berkhotbah di mimbar",
                  description:
                    "Kami menyarankan Anda mengambil program Magister Ministri Pelayanan Marketplace karena program ini tetap menekankan banyak pengajaran teologi namun memberikan banyak ilmu-ilmu praktis juga untuk melayani pemuridan di marketplace. Setelah menjadi mahasiswa Anda juga dapat memperkaya diri dengan mengambil sit in ke mata kuliah teologi di prodi magister lainnya tanpa dipungut biaya.",
                },
                {
                  title:
                    "Saya sudah memiliki gelar Master Teologi tetapi saya belum menyelesaikan tesis saya",
                  description:
                    "Program Magister Teologi akan memperdalam pemahaman teologis Anda dan meningkatkan keterampilan penelitian Anda, yang kemungkinan akan memfasilitasi masuk ke program doktoral.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="border-l-4 border-sttb-primary-blue pl-6 py-4 bg-gray-100 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: GENERAL QUESTIONS (YANG KITA BEDAH) */}
      <section className="pt-12 pb-16 bg-gray-100">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            <div className="flex flex-col gap-1 items-center pb-5">
              <h2 className="text-5xl font-bold text-sttb-dark-blue text-center">
                Other General Questions
              </h2>
            </div>

            <div className="bg-white p-12 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
                <h3 className="text-lg font-bold uppercase tracking-wider text-sttb-dark-blue">
                  Your Questions...
                </h3>
                <h3 className="text-lg font-bold uppercase tracking-wider text-sttb-dark-blue">
                  Our Informations...
                </h3>
              </div>

              {/* TAMPILAN LOADING JIKA API BELUM SELESAI */}
              {isLoading ? (
                <div className="py-10 text-center text-gray-500">
                  Loading FAQs...
                </div>
              ) : faqData.length === 0 ? (
                <div className="py-10 text-center text-gray-500">
                  Belum ada data FAQ.
                </div>
              ) : (
                /* LOOPING DATA DARI DB */
                faqData.map((item, index, arr) => {
                  // JURUS RAHASIA: Parsing format Jawaban
                  let jawabanList: string[] = [];
                  try {
                    // Coba parse jadi array (jika format di DB adalah ["Jawab 1", "Jawab 2"])
                    const parsed = JSON.parse(item.jawaban);
                    if (Array.isArray(parsed)) {
                      jawabanList = parsed;
                    } else {
                      jawabanList = [item.jawaban]; // Kalau bukan array, jadikan teks utuh
                    }
                  } catch (e) {
                    // Jika gagal parse (berarti murni teks biasa/paragraf), jadikan teks utuh
                    jawabanList = [item.jawaban];
                  }

                  return (
                    <div key={item.id || index} className="flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 py-6">
                        <h4 className="text-xl font-bold text-sttb-dark-blue">
                          {item.pertanyaan}
                        </h4>

                        {/* RENDER JAWABAN: Bila lebih dari 1 item, buat UL LI. Bila 1, buat Paragraf. */}
                        <div className="text-gray-700 text-justify">
                          {jawabanList.length > 1 ? (
                            <ul className="list-disc pl-5 space-y-1">
                              {jawabanList.map((jwb, i) => (
                                <li key={i} className="whitespace-pre-line">
                                  {jwb}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="whitespace-pre-line">
                              {jawabanList[0]}
                            </p>
                          )}
                        </div>
                      </div>
                      {index < arr.length - 1 && (
                        <hr className="border-gray-300" />
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons Section */}
      <section className="py-16 bg-white">
        {/* ... KODE NAVIGATION BUTTONS ASLI ... */}
      </section>
    </div>
  );
}
