import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "@/components/ThemeProvider";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  fontFamily: "'JetBrains Mono', monospace",
  flowchart: { curve: "basis", htmlLabels: true, padding: 12 },
});

interface MermaidProps {
  chart: string;
  id?: string;
  className?: string;
}

const MermaidDiagram = ({ chart, id, className = "" }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const { effectiveTheme } = useTheme();
  const diagramId = id || `mmd-${Math.random().toString(36).slice(2, 10)}`;

  useEffect(() => {
    let cancelled = false;
    const render = async () => {
      try {
        const isDark = effectiveTheme === "dark";
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          fontFamily: "'JetBrains Mono', monospace",
          theme: "base",
          themeVariables: isDark
            ? {
                primaryColor: "#0EA5E9",
                primaryTextColor: "#F1F5F9",
                primaryBorderColor: "#00E5FF",
                lineColor: "#64748B",
                secondaryColor: "#A78BFA",
                tertiaryColor: "#1E293B",
                background: "transparent",
                mainBkg: "#0F172A",
                nodeBorder: "#00E5FF",
                clusterBkg: "rgba(0, 229, 255, 0.05)",
                clusterBorder: "#00E5FF",
                edgeLabelBackground: "#0F172A",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
              }
            : {
                primaryColor: "#E0F2FE",
                primaryTextColor: "#0F172A",
                primaryBorderColor: "#0891B2",
                lineColor: "#475569",
                secondaryColor: "#EDE9FE",
                tertiaryColor: "#F8FAFC",
                background: "transparent",
                mainBkg: "#FFFFFF",
                nodeBorder: "#0891B2",
                clusterBkg: "rgba(8, 145, 178, 0.05)",
                clusterBorder: "#0891B2",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
              },
          flowchart: { curve: "basis", htmlLabels: true, padding: 14 },
        });
        const { svg } = await mermaid.render(diagramId, chart);
        if (!cancelled) {
          setSvg(svg);
          setErr("");
        }
      } catch (e: unknown) {
        const errorMsg = e instanceof Error ? e.message : String(e);
        if (!cancelled) setErr(errorMsg || "Failed to render diagram");
      }
    };
    render();
    return () => {
      cancelled = true;
    };
  }, [chart, effectiveTheme, diagramId]);

  if (err) {
    return (
      <div className="p-4 text-xs text-destructive font-mono border border-destructive/40 rounded-lg">
        Mermaid render error: {err}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`mermaid-container ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
