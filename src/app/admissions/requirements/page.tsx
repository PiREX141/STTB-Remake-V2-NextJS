"use client";

import RequirementList from "@/components/layouts/admissions/RequirementList";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ClipboardList,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const navButtons: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Schedule",
    href: "/admissions/schedule",
    icon: CalendarDays,
  },
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
];

const requirements = {
  S1: ["Sudah menyelesaikan pendidikan SMU/sederajat"],
  S2: [
    "Sudah menyelesaikan pendidikan S1",
    "Lulusan SMU atau S1 yang dimaksud adalah lulusan dari sebuah sekolah/universitas yang terdaftar/diakui oleh pemerintah",
    "Untuk calon mahasiswa yang telah menyelesaikan pendidikan umum lainnya (seperti B.A., M.A., dst) di luar Indonesia, maka penerimaan calon mahasiswa tersebut akan dipertimbangkan oleh STTB kasus per kasus.",
  ],
  sth: [
    "Minimal lulusan SMA/sederajat",
    "Memiliki pengalaman pelayanan gerejawi/lembaga Kristen minimal 2 tahun.",
    "Memiliki panggilan jelas sebagai hamba Tuhan penuh waktu.",
    "Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.",
    "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
  ],

  spdk: [
    "Minimal lulusan SMA/sederajat",
    "Memiliki pengalaman pelayanan gerejawi/lembaga Kristen minimal 2 tahun.",
    "Memiliki panggilan jelas sebagai pendidik Kristen penuh waktu.",
    "Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.",
    "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
  ],

  mpd: [
    "Lulus program S1 (semua jurusan)",
    "Memiliki pengalamanan pelayanan di sekolah/gereja minimal 2 tahun.",
    "Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.",
    "Menyerahkan book review saat mendaftar di STTB.",
    "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
  ],
  mmin: [
    "Lulusan S-1 Teologi/Umum.",
    "Memiliki pengalaman bekerja minimal 2 tahun.",
    "Memiliki pengalaman pelayanan di gereja atau lembaga pelayanan minimal 1 tahun.",
    "Menyerahkan book review saat mendaftar di STTB.",
  ],
};

export default function AdmissionsRequirements() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admission Requirements
          </h1>
          <p className="text-xl text-gray-200">
            Criteria for prospective students
          </p>
        </div>
      </section>

      {/* General Requirements Section */}
      <section className="pt-12 pb-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
              General Requirements
            </h2>
            <RequirementList
              title="S1 Requirements"
              requirements={requirements.S1}
              className="bg-gray-50 p-8 rounded-xl"
            />
            <RequirementList
              title="S2 Requirements"
              requirements={requirements.S2}
              className="bg-gray-50 p-8 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Requirements per Major Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
              Requirements per Major
            </h2>
            <RequirementList
              title="S1 Sarjana Teologi (S.Th.)"
              requirements={requirements.sth}
              className="bg-white p-8 rounded-xl"
            />
            <RequirementList
              title="S1 Sarjana Pendidikan Kristen (S.Pd.K.)"
              requirements={requirements.spdk}
              className="bg-white p-8 rounded-xl"
            />
            <RequirementList
              title="S2 Magister Pendiikan Kristen (M.Pd.)"
              requirements={requirements.mpd}
              className="bg-white p-8 rounded-xl"
            />
            <RequirementList
              title="S2 Magister Ministri Marketplace (M.Min.)"
              requirements={requirements.mmin}
              className="bg-white p-8 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Navigation Buttons Section */}
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
