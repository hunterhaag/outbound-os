export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">
          Outbound OS
        </h1>

        <p className="mt-2 text-gray-600">
          Your sales command center.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <DashboardCard
            title="Emails Due Today"
            value="12"
            icon="📧"
          />

          <DashboardCard
            title="Calls To Make"
            value="5"
            icon="📞"
          />

          <DashboardCard
            title="LinkedIn Follow-ups"
            value="8"
            icon="🔗"
          />

          <DashboardCard
            title="Overdue Prospects"
            value="3"
            icon="🔥"
          />
        </div>

        <div className="mt-10 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Activity Summary
          </h2>

          <div className="grid grid-cols-3 gap-6 mt-5">
            <ActivityStat
              label="Emails Sent"
              value="24"
            />

            <ActivityStat
              label="Calls Completed"
              value="7"
            />

            <ActivityStat
              label="Meetings Booked"
              value="2"
            />
          </div>
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
      <div className="text-3xl">{icon}</div>

      <p className="mt-4 text-gray-500">
        {title}
      </p>

      <p className="text-4xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
}

function ActivityStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-gray-500">
        {label}
      </p>

      <p className="text-3xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
}