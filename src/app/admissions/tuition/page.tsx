"use client";

export default function AdmissionsTuition() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tuition & Fees</h1>
          <p className="text-xl text-gray-200">Investment in your theological education</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-sttb-dark-blue mb-6">Bachelor of Theology (B.Th.)</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex justify-between"><span>Tuition (per semester)</span><span className="font-semibold">IDR 8,500,000</span></p>
                <p className="flex justify-between"><span>Registration Fee (one-time)</span><span className="font-semibold">IDR 2,000,000</span></p>
                <p className="flex justify-between"><span>Student Activity Fee (per semester)</span><span className="font-semibold">IDR 500,000</span></p>
              </div>
            </div>

            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-sttb-dark-blue mb-6">Master&apos;s Programs (M.Div., M.Th.)</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex justify-between"><span>Tuition (per semester)</span><span className="font-semibold">IDR 12,000,000</span></p>
                <p className="flex justify-between"><span>Registration Fee (one-time)</span><span className="font-semibold">IDR 3,000,000</span></p>
                <p className="flex justify-between"><span>Student Activity Fee (per semester)</span><span className="font-semibold">IDR 750,000</span></p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-sttb-dark-blue mb-4">Additional Costs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Housing (on-campus): IDR 1,500,000 per semester</li>
                <li>• Meal Plan: IDR 2,000,000 per semester</li>
                <li>• Books and Materials: Approximately IDR 1,000,000 per semester</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
