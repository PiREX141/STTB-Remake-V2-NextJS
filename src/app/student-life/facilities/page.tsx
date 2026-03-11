"use client";

export default function StudentLifeFacilities() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Facilities</h1>
          <p className="text-xl text-gray-200">Living and learning at STTB</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-4">Student Housing</h2>
              <p className="text-gray-700 mb-4">
                Our on-campus dormitories provide safe, comfortable accommodation for 200 students. Rooms are furnished and include study areas, with shared bathroom facilities on each floor.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Separate men&apos;s and women&apos;s dorms</li>
                <li>• 24/7 security</li>
                <li>• Common areas for fellowship</li>
                <li>• Laundry facilities</li>
                <li>• Wi-Fi access</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-4">Dining Services</h2>
              <p className="text-gray-700 mb-4">
                Our cafeteria serves three meals daily with a variety of Indonesian and international dishes. Meal plans are available for residential students.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-4">Recreation &amp; Wellness</h2>
              <p className="text-gray-700 mb-4">
                Students have access to recreational facilities including a sports field, basketball court, and fitness room. Regular sports activities and tournaments encourage healthy living.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-4">Student Center</h2>
              <p className="text-gray-700">
                The student center serves as a hub for campus life, featuring study lounges, meeting rooms, and social spaces where students can relax and build community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
