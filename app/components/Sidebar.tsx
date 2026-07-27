import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        Outbound OS
      </h1>

      <nav className="space-y-4">
        <Link
          href="/"
          className="block text-gray-300 hover:text-white"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/prospects"
          className="block text-gray-300 hover:text-white"
        >
          👥 Prospects
        </Link>

        <Link
          href="#"
          className="block text-gray-300 hover:text-white"
        >
          🏢 Companies
        </Link>

        <Link
          href="#"
          className="block text-gray-300 hover:text-white"
        >
          📅 Tasks
        </Link>

        <Link
          href="#"
          className="block text-gray-300 hover:text-white"
        >
          🤖 AI Assistant
        </Link>
      </nav>
    </aside>
  );
}