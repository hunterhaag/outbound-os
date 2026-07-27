"use client";

import { useState } from "react";

type Prospect = {
  name: string;
  company: string;
  title: string;
  email: string;
  status: string;
  action: string;
};

export default function ProspectsPage() {
  const [showForm, setShowForm] = useState(false);

  const [prospects, setProspects] = useState<Prospect[]>([
    {
      name: "John Smith",
      company: "Acme Corporation",
      title: "VP of Sales",
      email: "john@acme.com",
      status: "Contacted",
      action: "Send follow-up email",
    },
    {
      name: "Sarah Johnson",
      company: "Oracle",
      title: "Director of Operations",
      email: "sarah@oracle.com",
      status: "Meeting Set",
      action: "Prepare discovery call",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    company: "",
    title: "",
    email: "",
  });

  function saveProspect() {
    if (!form.name || !form.company) return;

    const newProspect: Prospect = {
      ...form,
      status: "New",
      action: "Research company",
    };

    setProspects([...prospects, newProspect]);

    setForm({
      name: "",
      company: "",
      title: "",
      email: "",
    });

    setShowForm(false);
  }

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

          {[
            "name",
            "company",
            "title",
            "email",
          ].map((field) => (
            <input
              key={field}
              className="border p-3 rounded w-full mb-3"
              placeholder={
                field.charAt(0).toUpperCase() +
                field.slice(1)
              }
              value={form[field as keyof typeof form]}
              onChange={(e) =>
                setForm({
                  ...form,
                  [field]: e.target.value,
                })
              }
            />
          ))}

          <button
            onClick={saveProspect}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Save Prospect
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 mt-8">
        <StatCard title="Total Prospects" value={String(prospects.length)} />
        <StatCard title="Meetings Booked" value="8" />
        <StatCard title="Follow-ups Due" value="12" />
      </div>

      <div className="mt-8 space-y-4">
        {prospects.map((prospect) => (
          <div
            key={prospect.email}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-xl font-bold">
              {prospect.name}
            </h2>

            <p className="text-gray-600">
              {prospect.title} at {prospect.company}
            </p>

            <p className="mt-2 text-gray-500">
              {prospect.email}
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