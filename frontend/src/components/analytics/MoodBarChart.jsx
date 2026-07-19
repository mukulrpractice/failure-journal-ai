import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MoodBarChart({
  title = "Bar Chart",
  data,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition">

      <h2 className="text-2xl font-bold text-slate-800 mb-8">
        {title}
      </h2>

      <ResponsiveContainer
        width="100%"
        height={360}
      >
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e8f0"
          />

          <XAxis
            dataKey="name"
            tick={{
              fontSize: 13,
            }}
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#2563eb"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default MoodBarChart;