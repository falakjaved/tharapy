import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-fuchsia-200 text-amber-800 min-h-screen p-5">
      <ul className="space-y-4">
        <li>
          <Link href="/" className="hover:text-gray-800 font-extrabold">
            Home
          </Link>
        </li>

        <li>
          <Link href="/courses" className="hover:text-gray-800 font-extrabold">
            Courses
          </Link>
        </li>

        <li>
          <Link href="/profile" className="hover:text-gray-800 font-extrabold">
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
}
