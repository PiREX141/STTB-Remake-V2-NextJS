import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function AboutLeadership() {
  const leaders = [
    {
      name: "Dr. Johannes Setiawan",
      position: "President",
      email: "j.setiawan@sttb.ac.id",
      bio: "Dr. Setiawan has served STTB for over 20 years, first as a professor of Systematic Theology and now as President since 2018.",
    },
    {
      name: "Dr. Maria Budiman",
      position: "Academic Dean",
      email: "m.budiman@sttb.ac.id",
      bio: "Dr. Budiman oversees all academic programs and curriculum development, bringing 15 years of theological education experience.",
    },
    {
      name: "Rev. David Santoso",
      position: "Dean of Students",
      email: "d.santoso@sttb.ac.id",
      bio: "Rev. Santoso leads student life programs and spiritual formation initiatives, focusing on holistic student development.",
    },
    {
      name: "Dr. Ruth Wijaya",
      position: "Director of Admissions",
      email: "r.wijaya@sttb.ac.id",
      bio: "Dr. Wijaya manages enrollment and recruitment, helping prospective students find their place at STTB.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership</h1>
          <p className="text-xl text-gray-200">Meet our administrative team</p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-sttb-dark-blue">{leader.name}</CardTitle>
                    <p className="text-sttb-primary-blue font-medium">{leader.position}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{leader.bio}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4 text-sttb-primary-blue" />
                      <a href={`mailto:${leader.email}`} className="hover:text-sttb-primary-blue">
                        {leader.email}
                      </a>
                    </div>
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
