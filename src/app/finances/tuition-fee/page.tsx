"use client";

export default function TuitionFee() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tuition & Fees
          </h1>
          <p className="text-xl text-gray-200">
            Investment in your theological education
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-sttb-dark-blue mb-6 uppercase tracking-wide">
                Program Sarjana Teologi (S.Th.)
              </h3>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  {/* Header */}
                  <thead>
                    <tr className="bg-sttb-dark-blue text-white">
                      <th className="py-3 px-4 text-center w-16">No</th>
                      <th className="py-3 px-4 text-center">Jenis</th>
                      <th className="py-3 px-4 text-center w-48">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Administrasi */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Administrasi
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">1</td>
                      <td className="py-3 px-4 text-start">
                        Pendaftaran & Tes Masuk
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">2</td>
                      <td className="py-3 px-4 text-start">
                        Administrasi Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>

                    {/* Category: Kuliah/Bimbingan Khusus */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Kuliah/Bimbingan Khusus
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">3</td>
                      <td className="py-3 px-4 text-start">
                        Pendidikan (Biaya Kuliah) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 9.000.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">4</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan Tugas Akhir
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 1.500.000,-</td>
                    </tr>

                    {/* Category: Lain-lain */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Lain-lain
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">5</td>
                      <td className="py-3 px-4 text-start">Wisuda</td>
                      <td className="py-3 px-4 text-center">Rp. 2.000.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">
                        Cuti Akademik (Bila Mengambil Cuti) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Catatan (Notes) */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-sttb-dark-blue mb-3">
                  Catatan:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  <li>
                    Pembayaran biaya pendidikan selama 1 semester (poin no. 3
                    dengan jumlah sebesar Rp.9.000.000,-) dapat dilakukan
                    sekaligus per 1 semester atau dengan mencicil selama 6 bulan
                    (Januari-Juni atau Juli-Desember) sebesar
                    Rp.1.500.000,-/bulan
                  </li>
                  <li>
                    Biaya administrasi semester dibayarkan di awal semester
                    (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa
                    aktif (hingga wisuda)
                  </li>
                  <li>
                    STTB memberikan subsidi untuk biaya akomodasi & konsumsi
                  </li>
                  <li>
                    Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan
                    sebelumnya)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-sttb-dark-blue mb-6 uppercase tracking-wide">
                Program Sarjana Pendidikan (S.Pd.)
              </h3>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  {/* Header */}
                  <thead>
                    <tr className="bg-sttb-dark-blue text-white">
                      <th className="py-3 px-4 text-center w-16">No</th>
                      <th className="py-3 px-4 text-center">Jenis</th>
                      <th className="py-3 px-4 text-center w-48">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Administrasi */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Administrasi
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">1</td>
                      <td className="py-3 px-4 text-start">
                        Pendaftaran & Tes Masuk
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">2</td>
                      <td className="py-3 px-4 text-start">
                        Administrasi Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>

                    {/* Category: Kuliah/Bimbingan Khusus */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Kuliah/Bimbingan Khusus
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">3</td>
                      <td className="py-3 px-4 text-start">
                        Pendidikan (Biaya Kuliah) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 9.000.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">4</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan Tugas Akhir
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 1.500.000,-</td>
                    </tr>

                    {/* Category: Lain-lain */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Lain-lain
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">5</td>
                      <td className="py-3 px-4 text-start">Wisuda</td>
                      <td className="py-3 px-4 text-center">Rp. 2.000.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">
                        Cuti Akademik (Bila Mengambil Cuti) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Catatan (Notes) */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-sttb-dark-blue mb-3">
                  Catatan:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  <li>
                    Pembayaran biaya pendidikan selama 1 semester (poin no. 3
                    dengan jumlah sebesar Rp.9.000.000,-) dapat dilakukan
                    sekaligus per 1 semester atau dengan mencicil selama 6 bulan
                    (Januari-Juni atau Juli-Desember) sebesar
                    Rp.1.500.000,-/bulan
                  </li>
                  <li>
                    Biaya administrasi semester dibayarkan di awal semester
                    (bulan Januari &amp; Juli) selama mahasiswa berstatus
                    mahasiswa aktif (hingga wisuda)
                  </li>
                  <li>
                    STTB memberikan subsidi untuk biaya akomodasi &amp; konsumsi
                  </li>
                  <li>
                    Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan
                    sebelumnya)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-sttb-dark-blue mb-6 uppercase tracking-wide">
                Program Magister Teologi (M.Th.)
              </h3>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  {/* Header */}
                  <thead>
                    <tr className="bg-sttb-dark-blue text-white">
                      <th className="py-3 px-4 text-center w-16">No</th>
                      <th className="py-3 px-4 text-center">Jenis</th>
                      <th className="py-3 px-4 text-center w-48">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Administrasi */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Administrasi
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">1</td>
                      <td className="py-3 px-4 text-start">
                        Pendaftaran & Tes Masuk
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">2</td>
                      <td className="py-3 px-4 text-start">
                        Administrasi Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>

                    {/* Category: Kuliah/Bimbingan Khusus */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Kuliah/Bimbingan Khusus
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">3</td>
                      <td className="py-3 px-4 text-start">
                        Pendidikan (Kuliah) Per Mata Kuliah
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 1.500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">4</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan & Ujian Proposal Tesis
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 2.000.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">5</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan & Sidang Tesis
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 5.000.000,-</td>
                    </tr>

                    {/* Category: Lain-lain */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Lain-lain
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">Wisuda</td>
                      <td className="py-3 px-4 text-center">Rp. 2.500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">
                        Cuti Akademik (Bila Mengambil Cuti) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Catatan (Notes) */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-sttb-dark-blue mb-3">
                  Catatan:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  <li>
                    Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2
                    (dua) minggu sebelum perkuliahan dimulai
                  </li>
                  <li>
                    Biaya administrasi semester dibayarkan di awal semester
                    (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa
                    aktif (hingga wisuda)
                  </li>
                  <li>
                    Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan
                    sebelumnya)
                  </li>
                  <li>
                    Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar
                    S.Th, maka ybs wajib mengikuti program matrikulasi terlebih
                    dahulu selama 4 semester (2 tahun) dengan biaya studi sbb :
                  </li>
                </ul>
              </div>

              {/* {table} */}
              <div className="overflow-x-auto pt-10">
                <table className="w-full border-collapse text-sm md:text-base">
                  {/* Header */}
                  <thead>
                    <tr className="bg-sttb-dark-blue text-white">
                      <th className="py-3 px-4 text-center w-16">No</th>
                      <th className="py-3 px-4 text-center">Jenis</th>
                      <th className="py-3 px-4 text-center w-48">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Administrasi */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Biaya kuliah selama matrikulasi M.Th.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">1</td>
                      <td className="py-3 px-4 text-start">
                        Pendidikan (Biaya Kuliah) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 7.800.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">2</td>
                      <td className="py-3 px-4 text-start">
                        Biaya Administrasi Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-sttb-dark-blue mb-6 uppercase tracking-wide">
                Program Magister Pendidikan (M.Pd.)
              </h3>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  {/* Header */}
                  <thead>
                    <tr className="bg-sttb-dark-blue text-white">
                      <th className="py-3 px-4 text-center w-16">No</th>
                      <th className="py-3 px-4 text-center">Jenis</th>
                      <th className="py-3 px-4 text-center w-48">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Administrasi */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Administrasi
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">1</td>
                      <td className="py-3 px-4 text-start">
                        Pendaftaran & Tes Masuk
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">2</td>
                      <td className="py-3 px-4 text-start">
                        Administrasi Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>

                    {/* Category: Kuliah/Bimbingan Khusus */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Kuliah/Bimbingan Khusus
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">3</td>
                      <td className="py-3 px-4 text-start">
                        Pendidikan (Kuliah) Per Mata Kuliah
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 1.500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">4</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan & Ujian Proposal Tesis
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 2.000.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">5</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan & Sidang Tesis
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 5.000.000,-</td>
                    </tr>

                    {/* Category: Lain-lain */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Lain-lain
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">Wisuda</td>
                      <td className="py-3 px-4 text-center">Rp. 2.500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">
                        Cuti Akademik (Bila Mengambil Cuti) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Catatan (Notes) */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-sttb-dark-blue mb-3">
                  Catatan:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  <li>
                    Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2
                    (dua) minggu sebelum perkuliahan dimulai
                  </li>
                  <li>
                    Biaya administrasi semester dibayarkan di awal semester
                    (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa
                    aktif (hingga wisuda)
                  </li>
                  <li>
                    Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan
                    sebelumnya)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-sttb-dark-blue mb-6 uppercase tracking-wide">
                Program Magister Ministri (M.Min.)
              </h3>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  {/* Header */}
                  <thead>
                    <tr className="bg-sttb-dark-blue text-white">
                      <th className="py-3 px-4 text-center w-16">No</th>
                      <th className="py-3 px-4 text-center">Jenis</th>
                      <th className="py-3 px-4 text-center w-48">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Category: Administrasi */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Administrasi
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">1</td>
                      <td className="py-3 px-4 text-start">
                        Pendaftaran & Tes Masuk
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">2</td>
                      <td className="py-3 px-4 text-start">
                        Administrasi Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>

                    {/* Category: Kuliah/Bimbingan Khusus */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Kuliah/Bimbingan Khusus
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">3</td>
                      <td className="py-3 px-4 text-start">
                        Pendidikan (Kuliah) Per Mata Kuliah
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 1.500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">4</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan & Ujian Proposal Tesis
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 2.000.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">5</td>
                      <td className="py-3 px-4 text-start">
                        Bimbingan & Sidang Tesis
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 5.000.000,-</td>
                    </tr>

                    {/* Category: Lain-lain */}
                    <tr className="bg-sky-300/60">
                      <td
                        className="py-2 px-4 text-center font-semibold text-sttb-dark-blue"
                        colSpan={3}
                      >
                        Lain-lain
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">Wisuda</td>
                      <td className="py-3 px-4 text-center">Rp. 2.500.000,-</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-center">6</td>
                      <td className="py-3 px-4 text-start">
                        Cuti Akademik (Bila Mengambil Cuti) Per Semester
                      </td>
                      <td className="py-3 px-4 text-center">Rp. 500.000,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Catatan (Notes) */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-sttb-dark-blue mb-3">
                  Catatan:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  <li>
                    Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2
                    (dua) minggu sebelum perkuliahan dimulai
                  </li>
                  <li>
                    Biaya administrasi semester dibayarkan di awal semester
                    (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa
                    aktif (hingga wisuda)
                  </li>
                  <li>
                    Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan
                    sebelumnya)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
