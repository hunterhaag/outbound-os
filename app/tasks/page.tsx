const tasks = [
  {
    type: "📧 Email",
    title: "Send follow-up to John Smith",
    company: "Acme Corporation",
    due: "Today",
    status: "Open",
  },
  {
    type: "📞 Call",
    title: "Discovery call with Sarah Johnson",
    company: "Oracle",
    due: "Tomorrow",
    status: "Scheduled",
  },
  {
    type: "🔗 LinkedIn",
    title: "Connect with Mike Williams",
    company: "Blue Yonder",
    due: "Friday",
    status: "Pending",
  },
];

export default function TasksPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Tasks
          </h1>

          <p className="text-gray-600 mt-2">
            Your daily sales activity command center.
          </p>
        </div>

        <button className="bg-gray-900 text-white px-5 py-3 rounded-lg">
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <StatCard title="Emails Due" value="12" />
        <StatCard title="Calls To Make" value="5" />
        <StatCard title="Meetings" value="3" />
      </div>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="bg-white rounded-xl shadow p-6"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">
                {task.type} {task.title}
              </h2>

              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {task.status}
              </span>
            </div>

            <p className="text-gray-600 mt-2">
              {task.company}
            </p>

            <p className="mt-3">
              Due: {task.due}
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