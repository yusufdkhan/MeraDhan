"use client";
import { ArrowLeft, ArrowRight, Filter } from "@deemlol/next-icons";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState("Today");
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState(2025);

  const tabs = [
    "Yesterday",
    "Today",
    "Tomorrow",
    "This Week",
    "Next Week",
    "This Month",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-10">
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-600">
          <span className="text-blue-500 pl-1">Home</span> /
          <span className="text-blue-500 pl-1">Resources</span> /
          <span className="text-gray-900 font-medium pl-1">
            Economic Calendar
          </span>
        </div>
      </div>

      <h1 className="text-4xl font-bold pt-12">
        Economic <span className="text-orange-600">Calendar</span>
      </h1>

      <p className="text-gray-600 mt-2 max-w-xl">
        Stay updated with key global economic events, interest rate decisions,
        and bond auctions.
      </p>

      <div className="flex justify-between items-center bg-blue-50 mt-6 border-0 rounded">
        <div className="flex flex-wrap justify-between items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-md text-sm ${
                selectedTab === tab
                  ? "bg-blue-900 text-white"
                  : "bg-blue-50 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="flex items-center text-sm gap-2 px-4 py-2 bg-blue-50 border-0 rounded-md">
          <Filter size={18} color="black" />
          Filters
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4 pl-2">28 March 2025</h2>

      <div className="grid grid-cols-[1.4fr_0.6fr] gap-8">
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 bg-gray-100">
                <th className="py-2 pl-2">Time (IST)</th>
                <th className="py-2">Country</th>
                <th className="py-2">Event</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-gray-300 text-sm">
                  <td className="py-3 pl-2">12:00</td>
                  <td className="py-3 flex items-center gap-2">
                    <Image
                      src="https://flagcdn.com/w2560/jp.png"
                      alt="Japan Flag"
                      width={24}
                      height={18}
                      className="rounded-sm"
                    />
                    JPN
                  </td>
                  <td className="py-3">BoJ Monetary Policy Meeting Minutes</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-0 rounded-lg p-4 bg-gray-100">
          <div className="flex items-center justify-between">
            <button className="p-2">
              <ArrowLeft size={24} color="black" />
            </button>

            <div className="flex items-center gap-3">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="border px-2 py-1 rounded-md"
              >
                {months.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border px-2 py-1 rounded-md"
              >
                {[2023, 2024, 2025, 2026].map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>

            <button className="p-2">
              <ArrowRight size={24} color="black" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center mt-4 text-gray-600 text-sm">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
              <div key={d} className="py-2 font-semibold">
                {d}
              </div>
            ))}

            {[...Array(30).keys()].map((num) => (
              <div
                key={num}
                className="py-2 border rounded-md mt-1 cursor-pointer hover:bg-blue-100"
              >
                {num + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
