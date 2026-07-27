"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [totalProspects, setTotalProspects] = useState(0);
  const [newProspects, setNewProspects] = useState(0);
  const [followUps, setFollowUps] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const { data, error } = await supabase
      .from("prospects")
      .select("*");

    if (error) {
      console.error("DASHBOARD ERROR:", error.message);
      return;
    }

    const prospects = data || [];

    setTotalProspects(prospects.length);

    setNewProspects(
      prospects.filter(
        (prospect) => prospect.status === "New"
      ).length
    );

    setFollowUps(
      prospects.filter(
        (prospect) =>
          prospect.action &&
          prospect.action.toLowerCase().includes("follow")
      ).length
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900">
          Outbound OS
        </h1>

        <p className="mt-2 text-gray-600">
          Your sales command center.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <DashboardCard
            title="Total Prospects"
            value={String(totalProspects)}
            icon="👥"
          />

          <DashboardCard
            title="New Prospects"
            value={String(newProspects)}
            icon="🔥"
          />

          <DashboardCard
            title="Follow-ups Needed"
            value={String(followUps)}
            icon="📞"
          />

        </div>

        <div className="mt-10 bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold">
            Activity Summary
          </h2>

          <p className="text-gray-600 mt-3">
            Your dashboard is now connected to your live prospect database.
          </p>

        </div>

      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="text-3xl">
        {icon}
      </div>

      <p className="mt-4 text-gray-500">
        {title}
      </p>

      <p className="text-4xl font-bold mt-1">
        {value}
      </p>

    </div>
  );
}