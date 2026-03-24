"use client";

import RequirementList from "@/components/layouts/admissions/RequirementList";
import { useState, useEffect } from "react";

const explanations = {
  learn: [
    "Sebagai sebuah kampus perguruan tinggi, STTB menyediakan fasilitas yang optimal bagi kegiatan belajar-mengajar. Format ruang kelas didesain yang mengakomodasi berbagai format pembelajaran. Perpustakaan didesain agar nyaman dan instagramable. Ruang teleconference dan ruangan kelas lainnya siap pakai bagi pembelajaran hybrid (onsite-online). Dilengkapi juga dengan studio audio-visual Didasko yang menjadi tempat produksi media pengajaran STTB maupun tempat belajar pelayanan media bagi mahasiswa.",
  ],
  grow: [
    "Pembelajaran di STTB tidak hanya menekankan sisi akademik, melainkan pembentukan pribadi pelayan Tuhan secara utuh. Untuk itu STTB menyediakan fasilitas pendukung pertumbuhan rohani mahasiswa, seperti ruang konseling pribadi dan konseling kelompok, beberapa tempat untuk pertemuan hangout kelompok kecil, aula untuk pertemuan ibadah/seminar dengan audiens besar, serta fasilitas di luar kampus berupa rumah retreat (Rumah Doa Bethel).",
  ],
  live: [
    "Pendidikan di STTB diselenggarakan secara residensial penuh. Artinya sepanjang masa studi, mahasiswa akan tinggal bersama sebagai satu komunitas. Ada empat asrama yang terintegrasi di lokasi kampus STTB, yaitu asrama dosen, asrama mahasiswa putra (aspra), asrama mahasiswa putri (aspri), dan asrama mahasiswa pascasarjana/tamu. Fasilitas asrama terdiri dari kamar tidur lengkap, kamar mandi dan toilet, lounge, ruang makan, berbagai sarana olah raga (jogging, senam, bola basket, bulutangkis, futsal, tenis meja, renang).",
  ],
};

export default function StudentLifeFacilities() {
  const [facilitiesData, setFacilitiesData] = useState<any[]>([]);
  
  useEffect(() => {
    fetch("https://localhost:7029/api/Fasilitas")
      .then((res) => res.json())
      .then((data) => setFacilitiesData(data))
      .catch((err) => console.error("Gagal mengambil data Fasilitas:", err));
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-5xl font-bold mb-4">Fasilitas Kampus</h1>
          <p className="text-xl text-gray-200">Kehidupan dan Pembelajaran di STTB</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-sttb-dark-blue mb-10 text-center uppercase">
                Fasilitas STTB
              </h2>
              <p className="text-xl font-bold text-sttb-dark-blue mb-6 text-justify">
                STTB merupakan sekolah Alkitab yang membentuk dan memperlengkapi para pelayan Tuhan bagi pelayanan di dalam tubuh Kristus dan di tengah dunia.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Seluruh aspek kehidupan di dalam kampus dan asrama, yang meliputi studi, pembinaan, interaksi dalam komunitas, praktik pelayanan, maupun istirahat, senantiasa diarahkan untuk membentuk hati yang mengasihi Tuhan dan sesama bagi kemuliaan Tuhan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <h2 className="text-4xl font-bold text-sttb-dark-blue">
                  Fasilitas untuk pembentukan pribadi dan pemerlengkapan pelayanan.
                </h2>
                <p className="text-gray-700">
                  Fasilitas-fasilitas di kampus dan asrama STTB dirancang untuk mengoptimalkan proses pembentukan pribadi dan pemerlengkapan pelayanan mahasiswa. Sepanjang masa studi, mahasiswa akan belajar bersama, bertumbuh bersama, dan hidup bersama dalam komunitas.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <RequirementList
                  title="Belajar Bersama"
                  requirements={explanations.learn}
                  className="bg-white p-8 rounded-xl border-l-4 border-sttb-accent-red"
                />
                <RequirementList
                  title="Bertumbuh Bersama"
                  requirements={explanations.grow}
                  className="bg-white p-8 rounded-xl border-l-4 border-sttb-accent-red"
                />
                <RequirementList
                  title="Hidup Bersama"
                  requirements={explanations.live}
                  className="bg-white p-8 rounded-xl border-l-4 border-sttb-accent-red"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-24">
          <h2 className="text-4xl font-bold text-sttb-dark-blue mb-10 text-center">
            Galeri
          </h2>
          
          {facilitiesData.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Memuat foto fasilitas...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {facilitiesData.map((item, i) => (
                <div
                  key={item.id || i}
                  className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.foto_Url}
                    alt={item.nama_Fasilitas || `Facility ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                     <p className="text-white p-4 opacity-0 group-hover:opacity-100 font-medium translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {item.nama_Fasilitas}
                     </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}