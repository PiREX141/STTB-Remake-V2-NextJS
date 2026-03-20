"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Calendar, MapPin, Loader2 } from "lucide-react";
import { getAllNews, type News } from "@/api/NewsApiServices";
import { getAllEvents, type Event } from "@/api/EventApiServices";

export default function NewsEvents() {
  const [news, setNews] = useState<News[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [eventsError, setEventsError] = useState<string | null>(null);

  useEffect(() => {
    getAllNews()
      .then((data) => setNews(data))
      .catch((err) => setNewsError(err.message))
      .finally(() => setNewsLoading(false));

    getAllEvents()
      .then((data) => setEvents(data))
      .catch((err) => setEventsError(err.message))
      .finally(() => setEventsLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
    const day = date.getDate().toString();
    return { month, day };
  };

  const formatEventTime = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeFormat: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit", hour12: true };

    // If same day, show time range
    if (start.toDateString() === end.toDateString()) {
      return `${start.toLocaleTimeString("en-US", timeFormat)} - ${end.toLocaleTimeString("en-US", timeFormat)}`;
    }

    // If multi-day, show date range
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    // Strip HTML tags for excerpt display
    const plainText = text.replace(/<[^>]*>/g, "");
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl text-gray-200">Stay connected with STTB</p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl font-bold text-sttb-dark-blue mb-8">
            Latest News
          </h2>

          {newsLoading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-sttb-primary-blue" />
              <span className="ml-3 text-gray-600">Loading news...</span>
            </div>
          )}

          {newsError && (
            <div className="text-center py-16">
              <p className="text-red-500 mb-2">Failed to load news</p>
              <p className="text-gray-500 text-sm">{newsError}</p>
            </div>
          )}

          {!newsLoading && !newsError && news.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No news articles available at this time.</p>
            </div>
          )}

          {!newsLoading && !newsError && news.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article) => (
                <Link
                  key={article.id}
                  href={`/news-events/news/${article.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <ImageWithFallback
                        src={article.thumbnail_Url}
                        alt={article.judul}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-sm text-sttb-primary-blue mb-2">
                        {formatDate(article.tanggal_Publikasi)}
                      </div>
                      <CardTitle className="text-lg text-sttb-dark-blue">
                        {article.judul}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">
                        {truncateText(article.konten)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl font-bold text-sttb-dark-blue mb-8">
            Upcoming Events
          </h2>

          {eventsLoading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-sttb-primary-blue" />
              <span className="ml-3 text-gray-600">Loading events...</span>
            </div>
          )}

          {eventsError && (
            <div className="text-center py-16">
              <p className="text-red-500 mb-2">Failed to load events</p>
              <p className="text-gray-500 text-sm">{eventsError}</p>
            </div>
          )}

          {!eventsLoading && !eventsError && events.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No upcoming events at this time.</p>
            </div>
          )}

          {!eventsLoading && !eventsError && events.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {events.map((event) => {
                const { month, day } = formatEventDate(event.tanggal_Mulai);
                return (
                  <Link
                    key={event.id}
                    href={`/news-events/events/${event.id}`}
                    className="group"
                  >
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-sttb-accent-red rounded-lg flex flex-col items-center justify-center text-white">
                            <div className="text-xs font-semibold">
                              {month}
                            </div>
                            <div className="text-2xl font-bold">
                              {day}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-sttb-dark-blue mb-2 group-hover:text-sttb-primary-blue transition-colors">
                              {event.nama_Kegiatan}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                              <Calendar className="h-4 w-4 text-sttb-primary-blue" />
                              <span>{formatEventTime(event.tanggal_Mulai, event.tanggal_Selesai)}</span>
                            </div>
                            {event.lokasi && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="h-4 w-4 text-sttb-primary-blue" />
                                <span>{event.lokasi}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
