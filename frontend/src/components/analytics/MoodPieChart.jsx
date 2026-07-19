import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#F59E0B",
  "#10B981",
  "#8B5CF6",
  "#EF4444",
];

function MoodPieChart({
  title = "Pie Chart",
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
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            paddingAngle={4}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            height={36}
          />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default MoodPieChart;