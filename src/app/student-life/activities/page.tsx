"use client";

import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export default function StudentLifeActivities() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Activities</h1>
          <p className="text-xl text-gray-200">Engage in vibrant community life</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue mb-4">Weekly Chapel Services</h2>
                <p className="text-gray-700 mb-4">
                  Our community gathers three times weekly for worship, teaching, and fellowship. Chapel services feature guest speakers, student testimonies, and times of corporate prayer.
                </p>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639254241570-da099e4fc62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBtaW5pc3RyeSUyMHdvcnNoaXAlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MzExODA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chapel Service"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzczMDU5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Student Fellowship"
                className="w-full h-64 object-cover rounded-xl shadow-lg md:order-first"
              />
              <div>
                <h2 className="text-3xl font-bold text-sttb-dark-blue mb-4">Student Fellowship Groups</h2>
                <p className="text-gray-700 mb-4">
                  Small group Bible studies, prayer groups, and fellowship activities create opportunities for deeper relationships and spiritual growth throughout the week.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sttb-dark-blue mb-6">Annual Events</h2>
              <ul className="space-y-3">
                {[
                  "Spiritual Emphasis Week - Special week of focused worship and teaching",
                  "Ministry Fair - Connect with local churches and ministry opportunities",
                  "Missions Conference - Learn about global mission work",
                  "Student Retreat - Weekend getaway for fellowship and renewal",
                  "Cultural Night - Celebrate Indonesia's diverse cultures",
                  "Academic Symposium - Student research presentations",
                ].map((event, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-sttb-primary-blue mt-2 flex-shrink-0" />
                    <span>{event}</span>
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
