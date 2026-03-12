"use client";

import Image from "next/image";
import { MoveRight, MoveDown } from "lucide-react";
import ProcedureList from "@/components/layouts/admissions/ProcedureList";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  NotebookText,
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

const procedureSteps = [
  {
    number: "01",
    title: "Memperoleh\nForm",
    icon: "/procedure/tahap-1.png",
  },
  {
    number: "02",
    title: "Mengirimkan\nForm & Berkas",
    icon: "/procedure/tahap-2.png",
  },
  {
    number: "03",
    title: "Membayar Biaya\nDaftar & Tes",
    icon: "/procedure/tahap-3.png",
  },
  {
    number: "04",
    title: "Mengikuti Tes\nMasuk Secara Online",
    icon: "/procedure/tahap-4.png",
  },
  {
    number: "05",
    title: "Pengumuman &\nKonfirmasi",
    icon: "/procedure/tahap-5.png",
  },
];

export default function Procedure() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Student Registration Procedure
          </h1>
          <p className="text-xl text-gray-200">
            Procedure students must go through to become a student
          </p>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
            {procedureSteps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-4"
              >
                {/* Step Card */}
                <div className="flex flex-col items-center text-center w-40">
                  <div className="w-20 h-20 mb-4 relative">
                    <Image
                      src={step.icon}
                      alt={step.title.replace("\n", " ")}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 whitespace-pre-line">
                    {step.number}. {step.title}
                  </p>
                </div>

                {/* Arrow separator (not after the last step) */}
                {index < procedureSteps.length - 1 && (
                  <>
                    <MoveRight
                      size={24}
                      strokeWidth={3}
                      color="#3448C5"
                      className="hidden md:block shrink-0"
                    />

                    <MoveDown
                      size={24}
                      strokeWidth={3}
                      color="#3448C5"
                      className="block md:hidden shrink-0"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-2 bg-white">
        <div className="container mx-auto max-w-screen px-4 pb-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            {/* Tahap 1 */}
            <div className="flex flex-col gap-1 items-center pb-5">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Tahap 1
              </h2>
              <p className="text-lg font-bold text-sttb-dark-blue text-center">
                Memperoleh Formulir Pendaftaran
              </p>
            </div>
            <ProcedureList
              title="Melakukan pendaftaran awal ke sistem admisi online dengan mengakses alamat sis.sttb.ac.id/pmb. "
              contents={[
                "Setelah mengisi data, maka formulir dapat diunduh di halaman situs berikutnya.",
                "Foto yang dilampirkan harus berbentuk format JPEG dan ukuran tidak lebih dari 400 kb.",
                "Jangan menggunakan tanda koma atau tanda baca apapun dalam teks yang diketik.",
              ]}
              className="bg-gray-100 p-5 rounded-2xl"
            />
            <ProcedureList
              title="Form pendaftaran juga dapat diminta dengan menghubungi email admisi@sttb.ac.id atau Whatsapp: 0815 7336 0009."
              contents={[
                "Pengiriman form tidak dipungut biaya",
                "Form dapat diperoleh secara hardcopy melalui pos atau secara softcopy melalui whatsapp/email sesuai permintaan pendaftar",
              ]}
              className="bg-gray-100 p-5 rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="pt-2 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4 pb-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            {/* Tahap 2 */}
            <div className="flex flex-col gap-1 items-center pb-5 pt-10">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Tahap 2
              </h2>
              <p className="text-lg font-bold text-sttb-dark-blue text-center">
                Mengisi form dan mempersiapkan berkas lainnya
              </p>
            </div>
            <ProcedureList
              title="Mengisi 1 set formulir pendaftaran yang terdiri dari:"
              contents={[
                "Form Pendaftaran",
                "Form Kesaksian A (pertobatan pribadi)",
                "Form Kesaksian B (panggilan pelayanan)",
                "Form Data Kesehatan 1 & 2",
                "Form Data Keluarga",
                "Form Konfirmasi Dukungan Pembiayaan Studi",
                "Form Persetujuan 1 & 2",
                "Form Rekomendasi 1 (dari gembala/pembina rohani)",
                "Form Rekomendasi 2 (dari teman/rekan kerja)",
                "Form Rekomendasi 2 (dari guru, dosen / atasan)",
              ]}
              description={[
                {
                  text: "Bila ingin mengajukan permohonan beasiswa mohon hubungi petugas kami untuk memperoleh form pengajuan beasiswa (lihat data kontak petugas pada halaman berikutnya mengenai beasiswa). Form dapat diisi secara digital, tidak perlu dicetak (diprint). Tanda tangan tetap wajib dicantumkan secara digital.",
                },
              ]}
              className="bg-white p-5 rounded-2xl"
            />
            <ProcedureList
              title="Melampirkan dokumen-dokumen tambahan yang juga menjadi syarat pendaftaran:"
              contents={[
                "Fotocopy Akte Kelahiran",
                "Fotocopy Kartu Tanda Penduduk (KTP)",
                "Pasfoto terbaru berwarna ukuran 4 x 6",
                "Fotocopy Surat Kelulusan/Ijazah",
                "Fotocopy Raport terakhir/transkrip yang dilegalisir",
                "Fotocopy surat baptis dan surat sidi",
                "Fotocopy Kartu BPJS atau Kartu Indonesia Sehat atau Asuransi Kesehatan",
                "Paper Akademik/Book review bagi pendaftar program studi S2",
              ]}
              description={[
                {
                  text: "catatan:",
                  list: [
                    "Bila belum memiliki KTP harap cantumkan kartu pelajar",
                    "Bila ijazah belum terbit karena tanggal ujian belum berlangsung ketika Anda mendaftar, mohon sertakan surat keterangan dari sekolah Anda bahwa Anda adalah pelajar kelas 3 yang akan menempuh ujian akhir.",
                    "Bagi mahasiswa pindahan dari STT lain wajib menyerahkan surat pindah/keluar dari STT tersebut dan menyerahkan transkrip terakhir",
                    "Bila gereja tempat Anda dibaptis memiliki baptis anak dan baptis sidi maka surat baptis sidi wajib dilampirkan (2 surat baptis)",
                    "Bila tidak memiliki BPJS atau KIS maka Anda harus menyertakan surat pernyataan dari orang tua/pribadi bahwa mereka akan menanggung biaya kesehatan atau pengobatan calon mahasiswa.",
                  ],
                },
              ]}
              className="bg-white p-5 rounded-2xl"
            />
            <ProcedureList
              title="Mengirimkan berkas-berkas pendaftaran (sudah lengkap) sebelum periode pendaftaran berakhir ke alamat STT Bandung dan ditujukan kepada:"
              contents={[
                "Bagian Admisi – Kantor STT Bandung, Jl. Dr. Djunjunan 105, Kelurahan Cicendo Kecamatan Andir, Bandung, Jawa Barat 40173",
                "Bagian Admisi STT Bandung akan menghubungi calon mahasiswa melalui email atau WhatsApp untuk mengkomunikasikan status dan kelengkapan pendaftaran calon mahasiswa maksimal 3 hari kerja setelah berkas diterima.",
              ]}
              description={[
                {
                  text: "Catatan:",
                  list: [
                    "Berkas dapat dikirimkan secara hardcopy melalui pos atau secara softcopy. Berkas yang dikirimkan dalam bentuk softcopy dikirim melalui email: admisi@sttb.ac.id atau melalui whatsapp: 0815 7336 0009 (dokumen-dokumen lampiran bisa discan/difoto dengan jelas).",
                    "Jika belum mendapatkan email atau WhatsApp pemberitahuan, calon mahasiswa dapat menghubungi Bagian Admisi STT Bandung di 0815 7336 0009 atau melalui email: admisi@sttb.ac.id",
                  ],
                },
              ]}
              className="bg-white p-5 rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="pt-2 bg-white">
        <div className="container mx-auto max-w-screen px-4 pb-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            {/* Tahap 3 */}
            <div className="flex flex-col gap-1 items-center pb-5 pt-10">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Tahap 3
              </h2>
              <p className="text-lg font-bold text-sttb-dark-blue text-center">
                Membayar Biaya Pendaftaran & Tes Masuk
              </p>
            </div>
            <ProcedureList
              title="Membayar biaya formulir:"
              contents={[
                "sebesar Rp500.000",
                "wajib ditransfer ke rekening BCA an. Yayasan STT Bandung, ac: 282 300 5555",
              ]}
              description={[
                {
                  text: "Biaya pendaftaran tidak dapat dikembalikan. Berkas yang tidak disertai biaya pendaftaran tidak akan diproses untuk tes masuk.",
                },
              ]}
              className="bg-gray-100 p-5 rounded-2xl"
            />
            <ProcedureList
              title="Mengirimkan ukti tranfer melalui"
              contents={[
                "link sttb.ac.id/konfirmasi atau",
                "via WA: 0815 7336 0009",
              ]}
              className="bg-gray-100 p-5 rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="pt-2 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4 pb-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            {/* Tahap 4 */}
            <div className="flex flex-col gap-1 items-center pb-5 pt-10">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Tahap 4
              </h2>
              <p className="text-lg font-bold text-sttb-dark-blue text-center">
                Mengikuti Tes Seleksi Penerimaan
              </p>
            </div>
            <ProcedureList
              title="Berkas pendaftaran yang telah dikumpulkan"
              contents={[
                "akan diseleksi oleh Direktur Admisi STT Bandung.",
                "Setelah seleksi dokumen, surat panggilan tes dan instruksi detil mengenai pelaksanaan tes masuk akan dikirimkan via email dan pendaftar akan menerima notifikasi melalui Whatsapp.",
              ]}
              description={[
                {
                  text: "Catatan:",
                  list: [
                    "Bila dokumen memenuhi persyaratan dan pembayaran telah dilunasi maka pendaftar akan menerima surat tes masuk.",
                    "Pendaftar yang berkasnya tidak lolos seleksi dokumen pendaftaran tidak akan dipanggil untuk ikut tes.",
                  ],
                },
              ]}
              className="bg-white p-5 rounded-2xl"
            />
            <ProcedureList
              title="Mengikuti 5 Tes Penerimaan Online yang meliputi"
              contents={[
                "Psikotes",
                "Pengetahuan Teologi",
                "Bahasa Indonesia",
                "Bahasa Inggris",
                "Wawancara dengan dosen STTB",
              ]}
              description={[
                {
                  text: "Catatan:",
                  list: [
                    "Bila belum memiliki KTP harap cantumkan kartu pelajar.",
                    "Bila ijazah belum terbit karena tanggal ujian belum bertanggung ketika Anda mendaftar, mohon sertakan surat keterangan dari sekolah Anda bahwa Anda adalah pelajar kelas 3 yang akan menempuh ujian akhir.",
                    "Bagi mahasiswa pindahan dari STT lain wajib menyerahkan surat pindah/keluar dari STT tersebut dan menyerahkan transkrip terakhir",
                    "Bila gereja tempat Anda dibaptis memiliki baptis anak dan baptis sidi maka surat baptis sidi wajib dilampirkan (2 surat baptis)",
                    "Bila tidak memiliki BPJS atau KIS maka Anda harus menyertakan surat pernyataan dari orang tua/pribadi bahwa mereka akan menanggung biaya kesehatan atau pengobatan calon mahasiswa.",
                  ],
                },
              ]}
              className="bg-white p-5 rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="pt-2 bg-gray-white">
        <div className="container mx-auto max-w-screen px-4 pb-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            {/* Tahap 5 */}
            <div className="flex flex-col gap-1 items-center pb-5 pt-10">
              <h2 className="text-3xl font-bold text-sttb-dark-blue text-center">
                Tahap 5
              </h2>
              <p className="text-lg font-bold text-sttb-dark-blue text-center">
                Pengumuman Penerimaan & Konfirmasi MABA
              </p>
            </div>
            <ProcedureList
              title="Dalam kurun waktu 2-3 minggu setelah tanggal tes terakhir, pendaftar akan menerima pemberitahuan hasil penerimaan."
              contents={[
                "Surat keputusan penerimaan akan dikirimkan melalui email dan notifikasi diberikan melalui Whatsapp.",
              ]}
              className="bg-gray-100 p-5 rounded-2xl"
            />
            <ProcedureList
              title="Calon mahasiswa yang diterima wajib mengisi dan mengembalikan formulir konfirmasi untuk menjadi mahasiswa yang dikirimkan oleh petugas admisi STTB."
              contents={[
                "Form konfirmasi (menyatakan bersedia menjadi mahasiswa) dikirimkan kembali kepada pihak STTB melalui email.",
              ]}
              className="bg-gray-100 p-5 rounded-2xl"
            />
            <ProcedureList
              title="Mahasiswa baru menyelesaikan pembayaran uang kuliah dan administrasi pertama lalu mengikuti proses orientasi."
              contents={[
                "Mahasiswa resmi diterima dan selanjutnya proses studi mahasiswa akan ditangani oleh bagian kemahasiswaan & akademik.",
              ]}
              className="bg-gray-100 p-5 rounded-2xl"
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
