import { LucideIcon } from "lucide-react";
import { Workflow, Container, Zap, Eye, Bot, Brain } from "lucide-react";

type Props = {
  iconName: string;
  color: string; // "from-cyan-500 to-blue-500"
  title: string;
  className?: string;
};

const iconMap: Record<string, LucideIcon> = {
  Workflow, Container, Zap, Eye, Bot, Brain,
};

const ProjectIllustration = ({ iconName, color, title, className = "" }: Props) => {
  const Icon = iconMap[iconName] || Workflow;
  // pseudo-stable seed from title hash for unique pattern positioning
  const seed = title.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Gradient base */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

      {/* Grid lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <defs>
          <pattern id={`grid-${seed}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${seed})`} />
      </svg>

      {/* Decorative animated nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`glow-${seed}`}>
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Connection lines */}
        <g stroke="white" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 4">
          <line x1={50 + (seed % 20)} y1="60" x2="200" y2="125" />
          <line x1="200" y1="125" x2={350 - (seed % 30)} y2="60" />
          <line x1="200" y1="125" x2={80 + (seed % 25)} y2="200" />
          <line x1="200" y1="125" x2={320 - (seed % 25)} y2="200" />
        </g>
        {/* Nodes */}
        {[
          { cx: 50 + (seed % 20), cy: 60, r: 5 },
          { cx: 350 - (seed % 30), cy: 60, r: 4 },
          { cx: 80 + (seed % 25), cy: 200, r: 4 },
          { cx: 320 - (seed % 25), cy: 200, r: 5 },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r * 4} fill={`url(#glow-${seed})`} />
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="white" opacity="0.95" />
          </g>
        ))}
      </svg>

      {/* Centered icon plate */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-md blur-xl scale-110" />
          <div className="relative w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
            <Icon className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Bottom mono label strip */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <p className="font-mono text-[10px] text-white/80 uppercase tracking-widest truncate">
          // {title}
        </p>
      </div>

      {/* Top corner badge */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
      <div className="absolute top-3 left-3 font-mono text-[10px] text-white/70 tracking-wider">
        $ ./run
      </div>
    </div>
  );
};

export default ProjectIllustration;
