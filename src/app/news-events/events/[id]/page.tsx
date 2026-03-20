"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag, Clock, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getAllEvents, type Event } from "@/api/EventApiServices";

export default function EventId() {
  const params = useParams();
  const eventId = Number(params.id);

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllEvents()
      .then((data) => {
        const found = data.find((e) => e.id === eventId);
        if (found) {
          setEvent(found);
        } else {
          setError("Event not found");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [eventId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col">
        <section className="bg-sttb-dark-blue text-white py-16">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="h-10 w-64 bg-white/10 rounded animate-pulse mb-4" />
            <div className="h-6 w-48 bg-white/10 rounded animate-pulse" />
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-sttb-primary-blue" />
            <span className="ml-3 text-gray-600">Loading event...</span>
          </div>
        </section>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex flex-col">
        <section className="bg-sttb-dark-blue text-white py-16">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Not Found</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4 text-center py-16">
            <p className="text-red-500 mb-4">{error || "The requested event could not be found."}</p>
            <Link
              href="/news-events"
              className="inline-flex items-center gap-2 text-sttb-primary-blue hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Events
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const isSameDay = new Date(event.tanggal_Mulai).toDateString() === new Date(event.tanggal_Selesai).toDateString();

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News & Events
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {event.nama_Kegiatan}
          </h1>
          {event.kategori_Kegiatan && (
            <div className="flex items-center gap-2 text-gray-200">
              <Tag className="h-4 w-4" />
              <span className="bg-white/15 px-3 py-1 rounded-full text-sm">
                {event.kategori_Kegiatan.nama_Kategori}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            {/* Event Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Date Card */}
              <Card className="border-l-4 border-l-sttb-primary-blue">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="h-5 w-5 text-sttb-primary-blue" />
                    <h3 className="font-semibold text-sttb-dark-blue">Date</h3>
                  </div>
                  {isSameDay ? (
                    <p className="text-gray-700">{formatDate(event.tanggal_Mulai)}</p>
                  ) : (
                    <div className="text-gray-700">
                      <p>{formatDate(event.tanggal_Mulai)}</p>
                      <p className="text-sm text-gray-500 my-1">to</p>
                      <p>{formatDate(event.tanggal_Selesai)}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Time Card */}
              <Card className="border-l-4 border-l-sttb-accent-red">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-sttb-accent-red" />
                    <h3 className="font-semibold text-sttb-dark-blue">Time</h3>
                  </div>
                  {isSameDay ? (
                    <p className="text-gray-700">
                      {formatTime(event.tanggal_Mulai)} - {formatTime(event.tanggal_Selesai)}
                    </p>
                  ) : (
                    <p className="text-gray-700">Multi-day Event</p>
                  )}
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold text-sttb-dark-blue">Location</h3>
                  </div>
                  <p className="text-gray-700">{event.lokasi || "To be announced"}</p>
                </CardContent>
              </Card>
            </div>

            {/* Event Description */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sttb-dark-blue mb-6">
                  About This Event
                </h2>
                <div
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                    prose-headings:text-sttb-dark-blue
                    prose-a:text-sttb-primary-blue prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: event.deskripsi }}
                />
              </CardContent>
            </Card>

            {/* Bottom Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news-events"
                className="inline-flex items-center gap-2 text-sttb-primary-blue hover:text-sttb-dark-blue transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to News & Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
