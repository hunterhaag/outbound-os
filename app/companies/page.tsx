const companies = [
  {
    name: "Acme Corporation",
    industry: "Technology",
    tech: "Oracle, SAP",
    contacts: 3,
    painPoint: "Reducing manual processes",
  },
  {
    name: "Blue Yonder",
    industry: "Supply Chain",
    tech: "Blue Yonder",
    contacts: 5,
    painPoint: "Improving forecasting",
  },
  {
    name: "Global Manufacturing Co.",
    industry: "Manufacturing",
    tech: "SAP",
    contacts: 2,
    painPoint: "Digital transformation",
  },
];

export default function CompaniesPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Companies
          </h1>

          <p className="text-gray-600 mt-2">
            Track accounts, technologies, and opportunities.
          </p>
        </div>

        <button className="bg-gray-900 text-white px-5 py-3 rounded-lg">
          + Add Company
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-2xl font-bold">
              {company.name}
            </h2>

            <p className="text-gray-600 mt-2">
              Industry: {company.industry}
            </p>

            <p className="mt-3">
              Technologies: {company.tech}
            </p>

            <p>
              Contacts: {company.contacts}
            </p>

            <p className="mt-3 text-gray-700">
              Pain Point: {company.painPoint}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}