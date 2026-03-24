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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200">Criteria for prospective students</p>
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
                <div className="py-10 text-center text-gray-500">Loading FAQs...</div>
              ) : faqData.length === 0 ? (
                <div className="py-10 text-center text-gray-500">Belum ada data FAQ.</div>
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
                                <li key={i} className="whitespace-pre-line">{jwb}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="whitespace-pre-line">{jawabanList[0]}</p>
                          )}
                        </div>

                      </div>
                      {index < arr.length - 1 && <hr className="border-gray-300" />}
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