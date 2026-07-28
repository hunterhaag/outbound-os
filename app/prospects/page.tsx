"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Prospect = {
  id: string;
  name: string;
  company: string;
  title: string;
  email: string;
  status: string;
  action: string;
  stage: string;
};

const stages = [
  "New",
  "Researching",
  "Contacted",
  "Replied",
  "Meeting Booked",
  "Proposal",
  "Won",
  "Lost",
];

export default function ProspectsPage() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    title: "",
    email: "",
  });

  useEffect(() => {
    loadProspects();
  }, []);

  async function loadProspects() {
    const { data, error } = await supabase
      .from("prospects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error.message);
      return;
    }

    setProspects(data || []);
  }

  async function saveProspect() {
    const newProspect = {
      name: form.name,
      company: form.company,
      title: form.title,
      email: form.email,
      status: "New",
      action: "Research company",
      stage: "New",
    };

    const { data, error } = await supabase
      .from("prospects")
      .insert([newProspect])
      .select();

    if (error) {
      alert(error.message);
      return;
    }

    setProspects([
      ...(data || []),
      ...prospects,
    ]);

    setForm({
      name: "",
      company: "",
      title: "",
      email: "",
    });

    setShowForm(false);
  }

  async function updateStage(
    id: string,
    stage: string
  ) {
    const { error } = await supabase
      .from("prospects")
      .update({ stage })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setProspects(
      prospects.map((prospect) =>
        prospect.id === id
          ? { ...prospect, stage }
          : prospect
      )
    );
  }

  return (
    <div className="p-8">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Pipeline
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your outbound opportunities.
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
        <div className="bg-white shadow rounded-xl p-6 mt-6">

          <h2 className="text-xl font-bold mb-4">
            New Prospect
          </h2>

          {Object.keys(form).map((field) => (
            <input
              key={field}
              className="border p-3 rounded w-full mb-3"
              placeholder={
                field.charAt(0).toUpperCase() +
                field.slice(1)
              }
              value={
                form[field as keyof typeof form]
              }
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


      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

        {stages.map((stage) => (
          <div
            key={stage}
            className="bg-gray-100 rounded-xl p-4"
          >

            <h2 className="font-bold mb-4">
              {stage}
            </h2>

            <div className="space-y-4">

              {prospects
                .filter(
                  (prospect) =>
                    prospect.stage === stage
                )
                .map((prospect) => (

                  <div
                    key={prospect.id}
                    className="bg-white rounded-xl shadow p-4"
                  >

                    <h3 className="font-bold">
                      {prospect.name}
                    </h3>

                    <p className="text-gray-600">
                      {prospect.company}
                    </p>

                    <p className="text-sm mt-2">
                      {prospect.email}
                    </p>


                    <select
                      className="border rounded p-2 mt-4 w-full"
                      value={prospect.stage}
                      onChange={(e) =>
                        updateStage(
                          prospect.id,
                          e.target.value
                        )
                      }
                    >

                      {stages.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}

                    </select>

                  </div>

                ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}