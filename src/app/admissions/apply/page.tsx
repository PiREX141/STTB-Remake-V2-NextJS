"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export default function AdmissionsApply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col">
        <section className="bg-sttb-dark-blue text-white py-16">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-xl text-gray-200">Thank you for your interest in STTB</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white relative">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-2xl mx-auto text-center relative z-10 p-12 bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-[bounce_1s_ease-in-out_infinite]">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6">
                Application Received Successfully
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We have received your application. Our admissions team will review
                your submission and contact you within <span className="font-semibold text-sttb-primary-blue">2 weeks</span>.
              </p>

              <div className="bg-sttb-secondary-blue/10 p-6 rounded-xl inline-block max-w-md">
                <p className="text-gray-700">
                  You will receive an email confirmation shortly with your next
                  steps and required documents checklist.
                </p>
              </div>

              <div className="mt-10">
                <Button 
                  onClick={() => window.location.href = '/'} 
                  className="bg-sttb-dark-blue hover:bg-sttb-primary-blue text-white px-8 py-6 rounded-full text-lg cursor-pointer transition-all hover:shadow-lg"
                >
                  Return to Homepage
                </Button>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sttb-secondary-blue/20 rounded-full blur-3xl -translate-y-1/2 -z-10" />
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-green-100 rounded-full blur-3xl -translate-y-1/2 -z-10" />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h1>
          <p className="text-xl text-gray-200">Begin your journey at STTB</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-sttb-dark-blue">Application Form</CardTitle>
                <CardDescription>Please complete all required fields</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Program of Interest *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bth">Bachelor of Theology (B.Th.)</SelectItem>
                        <SelectItem value="mdiv">Master of Divinity (M.Div.)</SelectItem>
                        <SelectItem value="mth">Master of Theology (M.Th.)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="statement">Statement of Faith and Call to Ministry *</Label>
                    <Textarea 
                      id="statement" 
                      rows={6} 
                      placeholder="Please share your faith journey and sense of call to theological education..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="church">Church Affiliation</Label>
                    <Input id="church" placeholder="Name of your home church" />
                  </div>

                  <Button type="submit" className="w-full bg-sttb-accent-red hover:bg-sttb-accent-red/90 cursor-pointer">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
