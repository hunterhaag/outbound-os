"use client";

import { useState } from "react";

export default function ProspectsPage() {
  const [showForm, setShowForm] = useState(false);

  const prospects = [
    {
      name: "John Smith",
      company: "Acme Corporation",
      title: "VP of Sales",
      status: "Contacted",
      action: "Send follow-up email",
    },
    {
      name: "Sarah Johnson",
      company: "Oracle",
      title: "Director of Operations",
      status: "Meeting Set",
      action: "Prepare discovery call",
    },
    {
      name: "Mike Williams",
      company: "Blue Yonder",
      title: "Enterprise Manager",
      status: "New",
      action: "Research company",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Prospects
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your outbound pipeline.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-900 text-white px-5 py-3 rounded-lg"
        >
          + Add Prospect
        </button>
      </div>

      {showForm && (
        <div className="mt-6 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            New Prospect
          </h2>

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Name"
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Company"
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Title"
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Email"
          />

          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
            Save Prospect
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 mt-8">
        <StatCard title="Total Prospects" value="42" />
        <StatCard title="Meetings Booked" value="8" />
        <StatCard title="Follow-ups Due" value="12" />
      </div>

      <div className="mt-8 space-y-4">
        {prospects.map((prospect) => (
          <div
            key={prospect.name}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-xl font-bold">
              {prospect.name}
            </h2>

            <p className="text-gray-600">
              {prospect.title} at {prospect.company}
            </p>

            <div className="mt-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {prospect.status}
              </span>
            </div>

            <p className="mt-4">
              Next Action: {prospect.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">
        {title}
      </p>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}