import { aboutStats } from "@/lib/content";

export default function AboutStats() {
  return (
    <div className="flex flex-wrap gap-10 md:gap-14">
      {aboutStats.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl md:text-4xl font-bold">
            {stat.value}
            <span className={stat.suffixClass}>{stat.suffix}</span>
          </p>
          <p className="text-sm text-black/55 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
