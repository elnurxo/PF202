
export default function Home() {
  return (
    <div className="font-sans">
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Code Academy
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn to code with expert instructors and hands-on projects.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Courses
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p>
                Learn HTML, CSS, JavaScript, React and build stunning web interfaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p>
                Master Node.js, Express, and databases to create powerful server-side apps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Fullstack Projects</h3>
              <p>
                Combine frontend and backend skills to build real-world fullstack applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your journey?</h2>
        <p className="mb-6 text-lg">Join thousands of students already learning with Code Academy.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}