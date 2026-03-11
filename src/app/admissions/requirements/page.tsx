"use client";

import { CheckCircle } from "lucide-react";

export default function AdmissionsRequirements() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Requirements</h1>
          <p className="text-xl text-gray-200">Criteria for prospective students</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6">Bachelor of Theology (B.Th.)</h2>
              <ul className="space-y-3">
                {[
                  "High school diploma or equivalent",
                  "Personal statement of faith and call to ministry",
                  "Letter of recommendation from pastor or church leader",
                  "Academic transcript with minimum GPA of 2.5",
                  "English language proficiency (for international students)",
                  "Interview with admissions committee",
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-sttb-primary-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6">Master&apos;s Programs (M.Div., M.Th.)</h2>
              <ul className="space-y-3">
                {[
                  "Bachelor's degree from accredited institution",
                  "Minimum GPA of 3.0 in undergraduate studies",
                  "Personal essay on theological interests and ministry goals",
                  "Two letters of recommendation (academic and pastoral)",
                  "Writing sample demonstrating research ability",
                  "Interview with program director",
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-sttb-primary-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
