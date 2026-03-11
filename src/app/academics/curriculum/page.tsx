"use client";

export default function AcademicsCurriculum() {
  return (
    <div className="flex flex-col">
      <section className="bg-sttb-dark-blue text-white py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum</h1>
          <p className="text-xl text-gray-200">Course structure and academic requirements</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-sttb-dark-blue">Curriculum Overview</h2>
            <p className="text-gray-700">Our curriculum is designed to provide comprehensive theological education through five main areas of study:</p>

            <h3 className="text-2xl font-bold text-sttb-dark-blue mt-8">Biblical Studies (35% of credits)</h3>
            <p className="text-gray-700">In-depth study of Old and New Testament, biblical languages (Hebrew and Greek), hermeneutics, and exegesis.</p>

            <h3 className="text-2xl font-bold text-sttb-dark-blue mt-8">Systematic Theology (25% of credits)</h3>
            <p className="text-gray-700">Comprehensive study of Christian doctrine, apologetics, theology of mission, and contemporary theological issues.</p>

            <h3 className="text-2xl font-bold text-sttb-dark-blue mt-8">Historical Theology (15% of credits)</h3>
            <p className="text-gray-700">Church history from early Christianity to the present, including Reformation studies and Asian church history.</p>

            <h3 className="text-2xl font-bold text-sttb-dark-blue mt-8">Practical Theology (20% of credits)</h3>
            <p className="text-gray-700">Homiletics, pastoral care, Christian education, worship, and church administration.</p>

            <h3 className="text-2xl font-bold text-sttb-dark-blue mt-8">Electives &amp; Ministry Practice (5% of credits)</h3>
            <p className="text-gray-700">Specialized courses and supervised ministry internships in various church and parachurch settings.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
