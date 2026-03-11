"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AcademicsFaculty() {
  const faculty = [
    { name: "Dr. Thomas Hartono", field: "Old Testament Studies", credentials: "Ph.D., University of Cambridge" },
    { name: "Dr. Elizabeth Kusuma", field: "New Testament Studies", credentials: "Ph.D., Fuller Theological Seminary" },
    { name: "Dr. Samuel Gunawan", field: "Systematic Theology", credentials: "Ph.D., Trinity Evangelical Divinity School" },
    { name: "Dr. Rachel Tanudjaja", field: "Church History", credentials: "Ph.D., Yale Divinity School" },
    { name: "Rev. Dr. Peter Lim", field: "Practical Theology", credentials: "D.Min., Gordon-Conwell Theological Seminary" },
    { name: "Dr. Grace Sutanto", field: "Christian Ethics", credentials: "Ph.D., University of Edinburgh" },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-gray-200">Experienced scholars committed to your growth</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((prof, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-sttb-dark-blue">{prof.name}</CardTitle>
                  <p className="text-sttb-primary-blue font-medium text-sm">{prof.field}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{prof.credentials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
