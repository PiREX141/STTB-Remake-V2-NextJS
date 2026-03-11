"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">We&apos;re here to help answer your questions</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sttb-dark-blue mb-2">Address</h3>
                        <p className="text-gray-700">
                          Jl. Durian No. 38<br />
                          Bandung 40264<br />
                          West Java, Indonesia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sttb-dark-blue mb-2">Phone</h3>
                        <p className="text-gray-700">+62 22 123 4567</p>
                        <p className="text-gray-700">+62 22 123 4568 (Admissions)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sttb-dark-blue mb-2">Email</h3>
                        <p className="text-gray-700">info@sttb.ac.id</p>
                        <p className="text-gray-700">admissions@sttb.ac.id</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-sttb-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sttb-dark-blue mb-2">Office Hours</h3>
                        <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-700">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-sttb-dark-blue">Send Us a Message</CardTitle>
                  <CardDescription>We&apos;ll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-gray-700">Your message has been sent. We&apos;ll respond within 1-2 business days.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          rows={6} 
                          placeholder="How can we help you?"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-sttb-accent-red hover:bg-sttb-accent-red/90 cursor-pointer">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl font-bold text-sttb-dark-blue mb-8 text-center">Visit Our Campus</h2>
          <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Campus Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
