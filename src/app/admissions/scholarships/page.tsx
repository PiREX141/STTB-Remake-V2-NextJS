"use client";

import { Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdmissionsScholarships() {
  const scholarships = [
    {
      title: "Academic Merit Scholarship",
      amount: "Up to 50% tuition",
      description: "Awarded based on academic excellence and GPA. Renewable annually with maintained academic standing.",
    },
    {
      title: "Ministry Leadership Scholarship",
      amount: "Up to 40% tuition",
      description: "For students with demonstrated leadership in church ministry or Christian service.",
    },
    {
      title: "Financial Need Grant",
      amount: "Varies",
      description: "Need-based assistance for students with demonstrated financial hardship. Application required.",
    },
    {
      title: "International Student Grant",
      amount: "IDR 5,000,000/year",
      description: "Support for international students pursuing theological studies at STTB.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarships & Financial Aid</h1>
          <p className="text-xl text-gray-200">Making theological education accessible</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              STTB is committed to making theological education accessible. We offer various scholarship and financial aid opportunities to qualified students.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-sttb-dark-blue">{scholarship.title}</CardTitle>
                    <CardDescription className="text-sttb-accent-red font-semibold">{scholarship.amount}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{scholarship.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
