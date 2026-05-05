import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Cpu,
  Factory,
  Flame,
  Gauge,
  Layers3,
  PenTool,
  Search,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Parametric CAD Gearbox Assembly",
    category: "Design & CAD",
    difficulty: "Intermediate",
    icon: PenTool,
    summary:
      "Create a fully constrained gearbox assembly with parametric parts, engineering drawings, tolerances, and a bill of materials.",
    skills: ["SolidWorks", "Fusion 360", "GD&T", "BOM", "Design Intent"],
    deliverables: ["3D CAD assembly", "Exploded view", "2D drawings", "Motion study"],
  },
  {
    title: "Autonomous Line-Following Robot",
    category: "Robotics & Mechatronics",
    difficulty: "Intermediate",
    icon: Bot,
    summary:
      "Build a mobile robot that follows a path or avoids obstacles using sensors, motors, control logic, and basic embedded programming.",
    skills: ["Arduino", "Sensors", "Motor Control", "PID", "Mechatronics"],
    deliverables: ["Working robot", "Circuit diagram", "Control code", "Test video"],
  },
  {
    title: "Heat Exchanger Design & Analysis",
    category: "Thermal & Energy",
    difficulty: "Advanced",
    icon: Flame,
    summary:
      "Design and analyze a heat exchanger, comparing hand calculations, simulation results, and potential experimental validation.",
    skills: ["Thermodynamics", "Heat Transfer", "ANSYS", "MATLAB", "Optimization"],
    deliverables: ["Thermal calculations", "Simulation plots", "Efficiency analysis", "Design report"],
  },
  {
    title: "Design for Manufacturing Case Study",
    category: "Manufacturing",
    difficulty: "Beginner-Friendly",
    icon: Factory,
    summary:
      "Redesign an existing part for CNC machining, injection molding, or sheet metal fabrication with a focus on cost and manufacturability.",
    skills: ["DFM", "Materials", "CNC", "Injection Molding", "Cost Reduction"],
    deliverables: ["Before/after design", "Manufacturing plan", "Cost estimate", "Material choice"],
  },
  {
    title: "Vehicle Suspension Simulation",
    category: "Automotive & Dynamics",
    difficulty: "Advanced",
    icon: Gauge,
    summary:
      "Model suspension kinematics and simulate ride comfort, handling tradeoffs, and dynamic response using engineering tools.",
    skills: ["MATLAB", "Simulink", "Vehicle Dynamics", "Kinematics", "Data Analysis"],
    deliverables: ["Simulation model", "Response plots", "Design tradeoff study", "Technical writeup"],
  },
  {
    title: "FEA Structural Bracket Analysis",
    category: "FEA & Simulation",
    difficulty: "Intermediate",
    icon: Layers3,
    summary:
      "Analyze a load-bearing component using finite element analysis, including stress results, displacement, and mesh convergence.",
    skills: ["ANSYS", "SolidWorks Simulation", "FEA", "Mesh Study", "Failure Analysis"],
    deliverables: ["FEA model", "Stress contours", "Safety factor", "Mesh convergence study"],
  },
  {
    title: "IoT Vibration Monitoring System",
    category: "Smart Mechanical Systems",
    difficulty: "Intermediate",
    icon: Cpu,
    summary:
      "Create a sensor-based system that monitors machine vibration or temperature and displays data on a simple dashboard.",
    skills: ["IoT", "Sensors", "Python", "Data Logging", "Predictive Maintenance"],
    deliverables: ["Sensor prototype", "Dashboard", "Data plots", "Maintenance insights"],
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <Card className="h-full overflow-hidden rounded-2xl border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="rounded-2xl bg-slate-100 p-3">
              <Icon className="h-6 w-6 text-slate-800" />
            </div>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
              {project.difficulty}
            </span>
          </div>

          <p className="mb-2 text-sm font-semibold text-slate-500">{project.category}</p>
          <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-950">{project.title}</h3>
          <p className="mb-5 text-sm leading-6 text-slate-600">{project.summary}</p>

          <div className="mb-5">
            <p className="mb-2 text-sm font-semibold text-slate-900">Key skills</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto rounded-2xl bg-slate-50 p-4">
            <p className="mb-2 text-sm font-semibold text-slate-900">Portfolio deliverables</p>
            <ul className="space-y-1 text-sm text-slate-600">
              {project.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function MechanicalEngineeringProjectsWebsite() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchableText = [project.title, project.category, project.summary, ...project.skills].join(" ").toLowerCase();
      const matchesSearch = searchableText.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Wrench className="h-4 w-4" />
              Mechanical Engineering Project Portfolio
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Build projects that prove you can engineer real solutions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore hands-on, simulation-based, and design-focused mechanical engineering projects made for recent graduates who want to stand out in interviews.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl px-6 py-6 text-base">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 text-base">
                Build a Portfolio Plan
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl"
          >
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="mb-4 text-sm font-medium text-slate-300">Featured project roadmap</p>
              <div className="space-y-4">
                {["CAD + drawings", "Simulation + validation", "Prototype + testing", "Portfolio case study"].map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{step}</p>
                      <p className="text-sm text-slate-300">Turn engineering work into visible proof.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Project Library</p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Choose your engineering direction</h2>
          </div>
          <div className="relative max-w-md grow md:grow-0">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search skills, tools, or projects..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-slate-400"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
            No projects match your search. Try a different skill, category, or tool.
          </div>
        )}
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Portfolio Strategy</p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Make each project interview-ready.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              The best project pages do more than show the final result. They explain the problem, constraints, design decisions, calculations, failures, iterations, and measured outcomes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Problem statement", "Engineering calculations", "CAD and simulation visuals", "Test results", "Failure analysis", "Next improvements"].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-5">
                <p className="font-semibold">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Add this section to turn a simple build into a strong case study.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
