import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ProfilePage() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">
            My Profile
          </h1>

          <div className="bg-white rounded-lg shadow p-6 max-w-xl">
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-amber-800 flex items-center justify-center text-2xl font-bold">
                SJ
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold">
                  Student Name
                </h2>
                <p className="text-gray-900 font-semibold">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-gray-500 font-semibold">
                  Email:
                </span>{" "}
                <span className="text-amber-500 font-bold">
                student@email.com
                </span>
              </p>

              <p>
                <span className="text-gray-500 font-semibold">
                  Enrolled Courses:
                </span>{" "}
                <span className="text-amber-600 font-bold"> 
                5
                </span>
              </p>

              <p>
                <span className=" text-gray-500 font-semibold">
                  Member Since:
                </span>{" "}
                <span className="text-amber-500 font-bold">                  
                Jan 2025
                </span>
              </p>
            </div>

            {/* Action Button */}
            <button className="mt-6 px-5 py-2 bg-amber-900 text-white rounded hover:bg-amber-950 transition">
              Edit Profile
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
