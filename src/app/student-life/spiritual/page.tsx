"use client";

export default function StudentLifeSpiritual() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Spiritual Formation</h1>
          <p className="text-xl text-gray-200">Cultivating Christ-like character</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-gray-700 text-center mb-12">
              At STTB, spiritual formation is not optional—it&apos;s central to our mission. We believe that effective ministry flows from a deep relationship with God and Christ-like character.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-sttb-primary-blue pl-6 py-2">
                <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">Regular Chapel Attendance</h3>
                <p className="text-gray-700">
                  Students participate in three weekly chapel services featuring worship, biblical teaching, and prayer.
                </p>
              </div>

              <div className="border-l-4 border-sttb-primary-blue pl-6 py-2">
                <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">Spiritual Mentorship</h3>
                <p className="text-gray-700">
                  Each student is paired with a faculty mentor for personal spiritual guidance and accountability.
                </p>
              </div>

              <div className="border-l-4 border-sttb-primary-blue pl-6 py-2">
                <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">Ministry Practicum</h3>
                <p className="text-gray-700">
                  Students engage in supervised ministry experience in local churches and Christian organizations.
                </p>
              </div>

              <div className="border-l-4 border-sttb-primary-blue pl-6 py-2">
                <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">Prayer &amp; Fasting Retreats</h3>
                <p className="text-gray-700">
                  Periodic retreats provide extended time for prayer, reflection, and seeking God&apos;s direction.
                </p>
              </div>

              <div className="border-l-4 border-sttb-primary-blue pl-6 py-2">
                <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">Community Life</h3>
                <p className="text-gray-700">
                  Living in community teaches students humility, service, and the practice of Christian fellowship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
