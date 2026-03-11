"use client";

export default function AcademicsCalendar() {
  const events = [
    { date: "August 15", event: "Fall Semester Begins" },
    { date: "September 10", event: "Add/Drop Deadline" },
    { date: "October 25-26", event: "Mid-Semester Break" },
    { date: "December 15", event: "Last Day of Classes" },
    { date: "December 18-22", event: "Final Examinations" },
    { date: "January 10", event: "Spring Semester Begins" },
    { date: "February 5", event: "Add/Drop Deadline" },
    { date: "March 20-21", event: "Mid-Semester Break" },
    { date: "May 15", event: "Last Day of Classes" },
    { date: "May 18-22", event: "Final Examinations" },
    { date: "June 1", event: "Graduation Ceremony" },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Calendar</h1>
          <p className="text-xl text-gray-200">Important dates for the 2026 academic year</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {events.map((item, index) => (
                <div key={index} className="flex gap-6 p-4 border-l-4 border-sttb-primary-blue bg-gray-50 rounded-r-lg">
                  <div className="w-32 flex-shrink-0 font-semibold text-sttb-dark-blue">{item.date}</div>
                  <div className="flex-1 text-gray-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
