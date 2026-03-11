import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import Image from "next/image";
import React from "react";

const HistorySection = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl text-gray-200">
            Over five decades of theological excellence
          </p>
        </div>
      </section>
      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMTE4MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="STTB Historic Building"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6">
                1992 - 1998
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Pdt. Caleb Tong, Pdt. Joseph Tong, dan Pdt. Dorothy I. Marx
                mendirikan STTB pada tahun 1992 dengan tujuan menghasilkan
                Pastor-Scholar yg memiliki kerangka teologi Reformed Injili
                dalam konteks pekerjaan Tuhan di Indonesia. Pdt. Daniel Lucas
                Lukito sebagai Dekan Akademik pertama banyak berperan dalam
                meletakkan kerangka dasar pembangunan STTB. Pembukaan STTB
                disiapkan sangat baik dengan jajaran dosen yang berkualitas.
                Komitmen untuk mengejar kualitas akademis yg tinggi didukung
                juga oleh perpustakaan yang memiliki koleksi buku dan jurnal
                yang sangat memadai, serta penerbitan Jurnal Teologi STULOS
                dalam versi Bahasa Indonesia dan Inggris. Pada tahun-tahun
                pertama diselenggarakan acara dengan lingkup nasional yaitu
                Ferakristal (Festival Remaja Kristen Pencinta Alkitab). Wisuda
                pertama diadakan pada tahun 1996.
              </p>

              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6 mt-12">
                1999 - 2005
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                STTB mengalami pergantian pemimpin dan jajaran dosen. Ibu
                Dorothy I. Marx menjabat sebagai Rektor dan STTB terus
                melanjutkan kiprahnya atas anugerah Tuhan dengan membuka
                program-program studi baru: M.A. (Master of Arts/Magister
                Artium) untuk memperlengkapi kaum awam dan M.Th. (Master of
                Theology/Magister Teologi) untuk memperlengkapi para hamba Tuhan
                yang rindu berkiprah di dunia akademis. Asrama dosen dibangun
                bersebelahan dengan asrama mahasiswa. STTB berkomitmen
                menerbitkan seri buku "Sola..." dan menyelenggarakan acara
                nasional bagi pemuda dengan nama CYLF (Christian Youth
                Leadership Forum).
              </p>

              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6 mt-12">
                2006 - 2010
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Perkembangan STTB berlanjut dalam kepemimpinan Pdt. Joseph Tong
                yang berkomitmen meningkatkan kualifikasi tenaga pengajar dengan
                mengutus beberapa dosen untuk studi lanjut di USA. Pada periode
                ini terbit dua buku Seri Sola, yaitu Sola Scriptura dan Sola
                Fide. Dalam periode ini STTB membuka program studi berbahasa
                Mandarin (S.Th., M.Div., dan M.A.) sebagai kontribusinya dalam
                pelayanan misi di Tiongkok. Untuk itu 2 dosen yaitu Pdt. Lee
                Ching Yen dan Pdt. Joseph Lin dari Taiwan diundang mengajar para
                mahasiswa yang datang dari Tiongkok.
              </p>

              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6 mt-12">
                2011 - 2016
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Periode ini ditandai dengan beberapa perkembangan yang
                signifikan. Pdt. Agus Gunawan melanjutkan kepemimpinan sebagai
                Rektor. Pada tahun 2011, STTB hadir dengan wajah baru dengan
                dibangunnya gedung baru berlantai tujuh yang saat ini
                difungsikan untuk ruang-ruang kelas, kantor dosen dan staf,
                asrama mahasiswa, aula, dan perpustakaan. Buku ketiga dan
                keempat dari Seri Sola (Sola Gratia dan Solus Christos)
                diterbitkan. Pada periode ini juga beberapa orang di jajaran
                pimpinan melanjutkan studi doktoral di Asia dan Amerika. Tahun
                2012 dibuka prodi baru S.Pd.K. (Sarjana Pendidikan Kristen)
                bersama dengan prodi M.Min. (Magister Ministri). Selanjutnya,
                pada tahun 2015, STTB juga menambah program studi M.Pd.K.
                (Magister Pendidikan Kristen), yang dirancang untuk
                memperlengkapi para pemimpin pendidikan Kristen. Dalam periode
                ini beberapa program studi sudah mulai terakreditasi oleh BAN-PT
                (Badan Akreditasi Nasional Perguruan Tinggi) dan ATA (Asian
                Theological Association). Selain itu juga STTB memperluas
                jejaring global yang ditandai dengan kehadiran beberapa orang
                dosen dari Inggris, India, dan Filipina, yang sangat mendukung
                program M.Th. yang diselenggarakan dalam Bahasa Inggris.
              </p>

              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6 mt-12">
                2011 - 2016
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Periode ini diwarnai oleh pembenahan kualitas dan penajaman arah
                pengembangan program-program studi formal dan non-formal sesuai
                visi dan keunikan panggilan STTB. Formasi spiritualitas yg
                berkualitas dan terintegrasi antara kelas, kapel, kelompok
                pastoral, asrama, pemuridan, hingga mentoring dalam praktek
                pelayanan mengokohkan proses pembentukan untuk mahasiswa STh dan
                SPd untuk kesiapan mereka melayani. Komitmen STTB kepada dunia
                pendidikan kristen makin mendapat apresiasi luas melalui
                perkembangan program studi Magister Pendidikan, inisiasi
                tumbuhnya komunitas Indonesian Forum for Christian Educators
                (IFCE), dan kontribusi para dosen STTB dalam berbagai forum
                nasional. Demikian juga komitmen STTB untuk mengembangkan
                pendidikan teologi yang aplikatif dan transformatif mendapatkan
                sambutan yg positif melalui perkembangan program studi MTh yang
                berfokus pada Transformasi Budaya dan Masyarakat dan program
                studi MMin Marketplace untuk memperlengkapi profesional Kristen
                bermisi di dunia kerja. Sementara itu dua program MMin juga
                berlangsung dalam periode ini, yaitu MMin Music Leadership
                (bekerja sama dengan Singapore Bible College) dan MMin Pastoral
                Leadership. Pendidikan nonformal makin berkembang dengan budaya
                digital yg tumbuh pesat selama masa pandemi. Melalui
                pengembangan pusat studi non-formal (LEAD Center) dikembangkan
                modul-modul pembinaan Vocatio (marketplace), Perspectives
                (misi), dan materi-materi pembinaan digital yg dapat diakses
                melalui media sosial. Pengembangan penelitian ditandai dengan
                publikasi ilmiah berupa seri webinar berkala Conversation That
                Matters (CTM) dan penerbitan monograf untuk tesis-tesis master
                yg terpilih karena kualitas dan relevansinya bagi pelayanan di
                lapangan. Mengingat besarnya dan luasnya pekerjaan yg harus
                dilakukan, maka kolaborasi dan sinergi dengan berbagai gereja
                dan lembaga secara nasional dan global yg sejalan dengan visi
                STTB makin dikembangkan dalam periode ini. Dalam periode ini
                kepemimpinan STTB mengalami beberapa kali peralihan, yaitu Pdt
                Chandra Koewoso sebagai Ketua sejak Agustus 2017, dan
                selanjutnya Sutrisna Harjanto PhD sebagai Ketua sejak Agustus
                2019 hingga saat ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-sttb-dark-blue">
        <div className="container mx-auto max-w-screen-xl px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Symbols</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-3 gap-8 pt-8 pb-16 px-12">
        {/* LEFT SIDE - 2x2 GRID */}
        <div className="col-span-2 grid grid-cols-2 border">
          {/* API */}
          <div className="border p-8 flex flex-col gap-4">
            <Image src="/api.png" alt="logo api" width={200} height={200} />
            <h3 className="text-red-600 font-bold text-3xl">API</h3>
            <p className="text-gray-600">
              di atas logo menggambarkan penyertaan dan pemenuhan dari Allah Roh
              Kudus yang menjadi sumber hikmat, kuasa, dan kasih serta merupakan
              syarat mutlak bagi pelayan Tuhan.
            </p>
          </div>

          {/* ALKITAB */}
          <div className="border p-8 flex flex-col gap-4">
            <Image
              src="/alkitab.png"
              alt="logo alkitab"
              width={200}
              height={200}
            />
            <h3 className="text-red-600 font-bold text-3xl">ALKITAB</h3>
            <p className="text-gray-600">
              adalah satu-satunya sumber pengetahuan yang benar tentang Allah
              dan dasar bagi panggilan serta pelayanan (Sola Scriptura).
            </p>
          </div>

          {/* SALIB */}
          <div className="border p-8 flex flex-col gap-4">
            <Image src="/salib.png" alt="logo salib" width={200} height={200} />
            <h3 className="text-red-600 font-bold text-3xl">SALIB & MAHKOTA</h3>
            <p className="text-gray-600">
              melambangkan panggilan untuk berpegang kepada kebenaran dan
              merajakan Kristus.
            </p>
          </div>

          {/* TONGKAT GEMBALA */}
          <div className="border p-8 flex flex-col gap-4">
            <Image
              src="/tongkat-gembala.png"
              alt="logo tongkat gembala"
              width={200}
              height={200}
            />
            <h3 className="text-red-600 font-bold text-3xl">TONGKAT GEMBALA</h3>
            <p className="text-gray-600">
              melambangkan panggilan Tuhan untuk menggembalakan umat-Nya.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center text-center gap-6">
          <Image
            src="/simbol-sttb.jpg"
            alt="simbol STTB"
            width={300}
            height={300}
          />

          <h2 className="text-red-600 text-3xl font-bold">LOGO STTB</h2>

          <p className="text-gray-600 max-w-md">
            Logo STTB menggambarkan pola pendidikan teologi yang akan
            memperlengkapi para mahasiswa untuk menjadi hamba Allah yang baik,
            setia, dan penuh hikmat, serta siap dipakai dalam pelayanan di
            berbagai bidang.
          </p>
        </div>
      </section>

      <section className="bg-white text-sttb-dark-blue">
        <div className="container mx-auto max-w-screen-xl px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Founder</h1>
        </div>
      </section>

      <section className="py-5 bg-white px-12">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col place-items-start items-center w-fit shadow-2xl p-5 rounded-lg">
            <Image
              src="/founder-caleb-tong.png"
              alt="Caleb Tong"
              width={300}
              height={300}
            />
            <h1 className="text-lg mt-4 text-center text-sttb-dark-blue">
              Rev. DR. Caleb Tong (Alm.)
            </h1>
          </div>
          <div className="flex flex-col place-items-start items-center w-fit shadow-2xl p-5 rounded-lg">
            <Image
              src="/founder-joseph-tong.png"
              alt="Joseph Tong"
              width={300}
              height={300}
            />
            <h1 className="text-lg mt-4 text-center">
              Rev. DR. Joseph Tong Ph. D.
            </h1>
          </div>
          <div className="flex flex-col place-items-start items-center w-fit shadow-2xl p-5 rounded-lg">
            <Image
              src="/founder-dorothy-i-marx.png"
              alt="Dorothy I. Marx"
              width={300}
              height={300}
            />
            <h1 className="text-lg mt-4 text-center">
              Rev. Dorothy I. Marx (Alm.)
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistorySection;
