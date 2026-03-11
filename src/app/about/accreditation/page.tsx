"use client";

import { Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutAccreditation() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accreditation</h1>
          <p className="text-xl text-gray-200">Our commitment to academic excellence</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-sttb-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                STTB is fully accredited and recognized by national and international educational authorities, ensuring the quality and credibility of our academic programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-sttb-dark-blue">National Accreditation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Accredited &quot;A&quot; by the National Accreditation Board for Higher Education (BAN-PT), Ministry of Education and Culture, Republic of Indonesia.
                  </p>
                  <p className="text-sm text-gray-600">Valid through 2028</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-sttb-dark-blue">Theological Accreditation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Member of the Asia Theological Association (ATA), ensuring international recognition of our theological programs.
                  </p>
                  <p className="text-sm text-gray-600">Member since 1985</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-sttb-secondary-blue/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-sttb-dark-blue mb-6">What Accreditation Means</h3>
              <ul className="space-y-4">
                {[
                  "Recognized degree credentials accepted by employers and educational institutions",
                  "High-quality curriculum and qualified faculty",
                  "Adequate library resources and academic facilities",
                  "Regular evaluation and continuous improvement processes",
                  "Transfer credits accepted by other accredited institutions",
                  "Eligibility for government scholarships and financial aid",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-sttb-primary-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
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
