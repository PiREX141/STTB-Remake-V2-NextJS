"use client";

import { Target, Heart, Book, BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisionMissionSection = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vision & Mission
          </h1>
          <p className="text-xl text-gray-200">
            Our purpose and guiding principles
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-sttb-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-24">
              Menjadi institusi pendidikan teologi yang mempersiapkan
              pastor-scholar yang transformatif dan memberdayakan seluruh umat
              Allah untuk menghadirkan injil seutuhnya di tengah konteks
              masyarakat urban.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Book,
                title: "Pastor-Scholar",
                description:
                  "memiliki jiwa gembala (kepemimpinan yg melayani di gereja, dunia pendidikan, maupun profesi lain) dan sekaligus pembelajar (semangat untuk terus belajar, daya nalar kritis seorang intelektual Kristen, dan kemampuan berkontribusi terhadap dunia ilmu pengetahuan dari perspektif Kristen)",
              },
              {
                icon: BookOpen,
                title: "Berita Injil yang utuh",
                description:
                  "kuasa Injil yg mampu mentransformasi seluruh aspek hidup manusia dan seluruh ciptaan yg sudah jatuh dalam dosa (total depravity), yg kesempurnaannya baru akan terjadi setelah kedatangan Kristus yang kedua, namun cicipan awalnya sudah bisa dirasakan hari ini.",
              },
              {
                icon: Users,
                title: "Seluruh umat Allah",
                description:
                  "kuasa penebusan Kristus dinyatakan melalui hidup setiap pengikut Kristus, di tengah keluarga, gereja, dan masyarakat.",
              },
              {
                icon: Heart,
                title: "Masyarakat Urban",
                description:
                  "mahasiswa STTB dipersiapkan dengan fokus melayani masyarakat di perkotaan, tanpa menutup kemungkinan tuntunan lain yang Tuhan berikan kepada mereka di tempat lain.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-sttb-dark-blue">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mx-24">
                We are committed to the following objectives
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Mission 1",
                  description:
                    "Mempersiapkan pastor-scholar yang transfomatif untuk melayani dalam konteks urban.",
                },
                {
                  title: "Mission 2",
                  description:
                    "Memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban melalui penelitian dan pendidikan non-formal.",
                },
                {
                  title: "Mission 3",
                  description:
                    "Mengembangkan tim dosen, struktur organisasi dan keuangan, serta kemitraan untuk mendukung pencapaian visi STTB.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="border-l-4 border-sttb-primary-blue pl-6 py-2"
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

      {/* Core Values */}
      <section className="pt-16 pb-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sttb-dark-blue mb-12 text-center">
              Core Values
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Christ Centered",
                  items: [
                    "Rencana keselamatan Allah atas seisi dunia yg berpusat di dalam karya penebusan Kristus.",
                    "Mandat budaya dan mandat Injil dalam kerangka metanarasi Alkitab: Penciptaan-Kejatuhan-Penebusan-Penggenapan.",
                  ],
                },
                {
                  title: "Teks - Konteks",
                  items: [
                    "Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa Gereja",
                    "Responsif terhadap konteks: sosial dan generasional",
                  ],
                },
                {
                  title: "Penatalayanan",
                  items: [
                    "Integritas (kejujuran, transparansi, akuntabilitas waktu, uang, relasi)",
                    "Dedikasi (melayani dan mengupayakan yang terbaik bagi sesama)",
                    "Kompetensi (kecakapan akademik, pelayanan, dan penelitian)",
                  ],
                },
                {
                  title: "Transformatif",
                  items: [
                    "Karya penebusan Kristus yg transformatif dialami oleh semua stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan, mitra pelayanan, gereja, dan masyarakat)",
                  ],
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="border-l-4 border-sttb-primary-blue pl-6 py-2"
                >
                  <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">
                    {value.title}
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {value.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMissionSection;
