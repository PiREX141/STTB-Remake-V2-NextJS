"use client";

import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card";
import { FileText, Download, Book, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Resources() {
  const downloads = [
    { title: "Academic Handbook 2026", size: "2.5 MB", icon: FileText },
    { title: "Student Life Guide", size: "1.8 MB", icon: FileText },
    { title: "Course Catalog", size: "3.2 MB", icon: FileText },
    { title: "Application Forms", size: "500 KB", icon: FileText },
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Admission requirements vary by program. For undergraduate programs, you need a high school diploma, personal statement, and pastoral recommendation. Graduate programs require a bachelor's degree and additional documentation. Visit our Admissions page for complete details.",
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes! STTB offers various scholarships including Academic Merit Scholarships, Ministry Leadership Scholarships, and Financial Need Grants. Applications are reviewed during the admission process.",
    },
    {
      question: "Is on-campus housing available?",
      answer: "Yes, we have on-campus dormitories that can accommodate 200 students. Housing includes furnished rooms, common areas, and 24/7 security. Meal plans are available through our dining services.",
    },
    {
      question: "What is the language of instruction?",
      answer: "All courses are taught in Bahasa Indonesia. Some elective courses and guest lectures may be offered in English.",
    },
    {
      question: "Can international students apply?",
      answer: "Yes! We welcome international students. Additional requirements include proof of language proficiency and valid student visa documentation.",
    },
    {
      question: "What career paths do graduates pursue?",
      answer: "Our graduates serve in diverse roles including pastors, missionaries, Christian educators, chaplains, church administrators, and theological educators across Indonesia and internationally.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-gray-200">Helpful information and documents</p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sttb-dark-blue mb-8">Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloads.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-sttb-primary-blue rounded-lg flex items-center justify-center">
                          <doc.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-sttb-dark-blue">{doc.title}</CardTitle>
                          <CardDescription>{doc.size}</CardDescription>
                        </div>
                      </div>
                      <Download className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-sttb-primary-blue rounded-lg flex items-center justify-center">
                <Book className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue">Library</h2>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                The STTB Library houses over 25,000 volumes of theological resources, including books, journals, and digital databases. Our collection covers all areas of theological study.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-sttb-dark-blue mb-2">Library Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 9:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-600">Sunday: Closed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sttb-dark-blue mb-2">Services</h4>
                  <p className="text-sm text-gray-600">• Book loans and renewals</p>
                  <p className="text-sm text-gray-600">• Research assistance</p>
                  <p className="text-sm text-gray-600">• Digital database access</p>
                  <p className="text-sm text-gray-600">• Study rooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-sttb-primary-blue rounded-lg flex items-center justify-center">
                <HelpCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue">Frequently Asked Questions</h2>
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sttb-dark-blue hover:text-sttb-primary-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
