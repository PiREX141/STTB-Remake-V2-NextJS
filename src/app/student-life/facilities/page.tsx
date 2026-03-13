"use client";

import RequirementList from "@/components/layouts/admissions/RequirementList";
import Image from "next/image";

const explanations = {
  learn: [
    "As a university campus, STTB provides optimal facilities for teaching and learning activities. Classrooms are designed to accommodate a variety of learning formats. The library is designed to be comfortable and Instagrammable. Teleconference rooms and other classrooms are ready for hybrid learning (onsite-online). The Didasko audio-visual studio also serves as a production center for STTB's teaching media and a learning center for students on media services.",
  ],
  grow: [
    "Learning at STTB emphasizes not only academics but also the holistic development of God's servants. To that end, STTB provides facilities to support students' spiritual growth, such as private and group counseling rooms, several meeting spaces for small groups, a hall for worship services/seminars with large audiences, and off-campus facilities such as a retreat house (Bethel Prayer House).",
  ],
  live: [
    "Pendidikan di STTB diselenggarakan secara residensial penuh. Artinya sepanjang masa studi, mahasiswa akan tinggal bersama sebagai satu komunitas. Ada empat asrama yang terintegrasi di lokasi kampus STTB, yaitu asrama dosen, asrama mahasiswa putra (aspra), asrama mahasiswa putri (aspri), dan asrama mahasiswa pascasarjana/tamu. Fasilitas asrama terdiri dari kamar tidur lengkap, kamar mandi dan toilet, lounge, ruang makan, berbagai sarana olah raga (jogging, senam, bola basket, bulutangkis, futsal, tenis meja, renang).",
  ],
};

export default function StudentLifeFacilities() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-5xl font-bold mb-4">Student Facilities</h1>
          <p className="text-xl text-gray-200">Living and learning at STTB</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-sttb-dark-blue mb-10 text-center">
                STTB Facilities
              </h2>
              <p className="text-black mb-4 text-justify">
                STTB is a Bible school that forms and equips God's servants for
                service within the body of Christ and in the world.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                All aspects of campus and dormitory life, including study,
                development, community interaction, service practices, and rest,
                are always directed toward forming hearts that love God and
                others for God's glory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-sttb-dark-blue mb-10 text-center">
                Facilities for personal development and service provision.
              </h2>
              <div className="flex flex-col gap-5">
                <RequirementList
                  title="Learn Together"
                  requirements={explanations.learn}
                  className="bg-white p-8 rounded-xl"
                />
                <RequirementList
                  title="Grow Together"
                  requirements={explanations.grow}
                  className="bg-white p-8 rounded-xl"
                />
                <RequirementList
                  title="Live Together"
                  requirements={explanations.live}
                  className="bg-white p-8 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen px-24">
          <h2 className="text-4xl font-bold text-sttb-dark-blue mb-10 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={`/facilities/fasilitas-${i + 1}.png`}
                  alt={`Facility ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
