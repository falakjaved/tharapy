import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function CoursesPage() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">
            My Courses
          </h1>

          <ul className="space-y-3">
            <li className="bg-amber-900 p-4  font-bold rounded shadow">
              Next.js Basics
            </li>
            <li className="bg-amber-800 p-4 font-bold rounded shadow">
              Tailwind CSS
            </li>
            <li className="bg-amber-700 p-4 font-bold rounded shadow">
              TypeScript Intro
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}
