"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardList,
  NotebookText,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const navButtons: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Procedure",
    href: "/admissions/procedure",
    icon: ClipboardList,
  },
  {
    label: "FAQ",
    href: "/admissions/faq",
    icon: HelpCircle,
  },
  {
    label: "Requirements",
    href: "/admissions/requirements",
    icon: NotebookText,
  },
];

const gelombangSchedule = [
  {
    number: 1,
    title: "Batas Pengembalian Formulir Pendaftaran",
    schedule: "Oktober, setiap Senin minggu ketiga",
    via: "Via pos atau e-mail",
  },
  {
    number: 2,
    title: "Seleksi Dokumen Pendaftaran",
    schedule: "Oktober, setiap Selasa minggu ketiga",
    via: "Onsite",
  },
  {
    number: 3,
    title: "Panggilan Tes Gelombang 1",
    schedule: "Oktober, setiap Rabu minggu ketiga",
    via: "Via email dan whatsapp",
  },
  {
    number: 4,
    title: "Psikotes Online tahap 1:",
    subItems: ["Pengisian Form"],
    schedule: "Oktober, setiap Jumat-Sabtu minggu ketiga",
    via: "Via website",
  },
  {
    number: 5,
    title: "Psikotes Online tahap 2:",
    subItems: ["Tes Bersama"],
    schedule: "Oktober, setiap Senin minggu keempat",
    via: "Via Zoom & website",
  },
  {
    number: 6,
    title: "Tes Tertulis Online:",
    subItems: [
      "Tes Pemahaman Teologi",
      "Tes Bahasa Indonesia",
      "Tes Bahasa Inggris",
    ],
    schedule: "Oktober, setiap Selasa minggu keempat",
    via: "Via Zoom & website",
  },
  {
    number: 7,
    title: "Psikotes Online tahap 3:",
    subItems: ["Wawancara dengan Psikolog"],
    schedule: "Oktober, setiap Senin minggu ketiga",
    via: "Via Zoom",
  },
  {
    number: 8,
    title: "Wawancara dengan Dosen STTB",
    schedule: "November, setiap Senin minggu ketiga",
    via: "Via Zoom",
  },
  {
    number: 9,
    title: "Pengumuman Hasil Penerimaan Mahasiswa Baru",
    schedule: "November, setiap Rabu- Jumat minggu keempat",
    via: "Via e-mail dan whatsapp",
  },
];

export default function Schedule() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            New Student Registration Schedule
          </h1>
          <p className="text-xl text-gray-200">
            Registration Schedules for the year
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="w-fit mx-auto items-center">
            <div className="text-center mb-5">
              <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4">
                Academic Year 2026 - 2027
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mx-24">
                Close Registration Date
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Gelombang 1",
                  description: "13 Oktober 2025",
                },
                {
                  title: "Gelombang 2",
                  description: "2 Februari 2026",
                },
                {
                  title: "Gelombang 3",
                  description: "27 April 2026",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="border-l-4 border-sttb-primary-blue pl-6 py-2 bg-white rounded-2xl"
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

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-sttb-dark-blue mb-8 uppercase">
            Gelombang 1
          </h2>
          <div className="flex flex-col gap-4">
            {gelombangSchedule.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-2 md:gap-8 items-start border-b border-gray-100 pb-4"
              >
                {/* Step Name */}
                <div>
                  <p className="font-bold text-gray-900">
                    {item.number}. {item.title}
                  </p>
                  {item.subItems && (
                    <ul className="list-disc ml-8 mt-1">
                      {item.subItems.map((sub, i) => (
                        <li key={i} className="text-gray-900">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Schedule */}
                <p className="text-gray-700 italic">{item.schedule}</p>

                {/* Via */}
                <p className="text-red-600 font-semibold">{item.via}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-sttb-dark-blue mb-8 uppercase">
            Gelombang 2
          </h2>
          <div className="flex flex-col gap-4">
            {gelombangSchedule.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-2 md:gap-8 items-start border-b border-gray-100 pb-4"
              >
                {/* Step Name */}
                <div>
                  <p className="font-bold text-gray-900">
                    {item.number}. {item.title}
                  </p>
                  {item.subItems && (
                    <ul className="list-disc ml-8 mt-1">
                      {item.subItems.map((sub, i) => (
                        <li key={i} className="text-gray-900">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Schedule */}
                <p className="text-gray-700 italic">{item.schedule}</p>

                {/* Via */}
                <p className="text-red-600 font-semibold">{item.via}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-sttb-dark-blue mb-8 uppercase">
            Gelombang 3
          </h2>
          <div className="flex flex-col gap-4">
            {gelombangSchedule.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-2 md:gap-8 items-start border-b border-gray-100 pb-4"
              >
                {/* Step Name */}
                <div>
                  <p className="font-bold text-gray-900">
                    {item.number}. {item.title}
                  </p>
                  {item.subItems && (
                    <ul className="list-disc ml-8 mt-1">
                      {item.subItems.map((sub, i) => (
                        <li key={i} className="text-gray-900">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Schedule */}
                <p className="text-gray-700 italic">{item.schedule}</p>

                {/* Via */}
                <p className="text-red-600 font-semibold">{item.via}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-row justify-center gap-8 flex-wrap">
            {navButtons.map((btn) => (
              <Link key={btn.label} href={btn.href}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center gap-2 p-6 rounded-xl bg-gray-50 shadow-md cursor-pointer w-48"
                >
                  <div className="w-24 h-24 rounded-lg bg-transparent flex items-center justify-center">
                    <btn.icon className="w-12 h-12 text-sttb-dark-blue" />
                  </div>
                  <span className="text-lg font-semibold text-sttb-dark-blue">
                    {btn.label}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
