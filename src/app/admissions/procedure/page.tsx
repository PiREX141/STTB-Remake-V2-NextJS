"use client";

export default function AdmissionsProcedure() {
  const steps = [
    {
      step: 1,
      title: "Submit Online Application",
      description:
        "Complete the application form with personal and academic information.",
    },
    {
      step: 2,
      title: "Provide Supporting Documents",
      description: "Submit transcripts, recommendations, and required essays.",
    },
    {
      step: 3,
      title: "Application Review",
      description:
        "Admissions committee reviews your complete application package.",
    },
    {
      step: 4,
      title: "Interview",
      description:
        "Participate in an interview with faculty or admissions staff.",
    },
    {
      step: 5,
      title: "Admission Decision",
      description: "Receive notification of admission decision within 4 weeks.",
    },
    {
      step: 6,
      title: "Enrollment Confirmation",
      description: "Accept admission offer and submit enrollment deposit.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Application Process
          </h1>
          <p className="text-xl text-gray-200">Your pathway to STTB</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {steps.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-sttb-primary-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    {/* Add vertical connecting line if this is not the last item */}
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-sttb-secondary-blue/30 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-sttb-dark-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
