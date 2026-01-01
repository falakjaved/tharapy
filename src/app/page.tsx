import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">
            Student Dashboard
          </h1>

          <div className="grid  bg-amber-500 text-amber-300 font-bold grid-cols-1 md:grid-cols-3 gap-4">
            <DashboardCard title="Courses" value="5" />
            <DashboardCard title="Progress" value="70%" />
            <DashboardCard title="Messages" value="12" />
          </div>
        </main>
      </div>
    </div>
  );
}
