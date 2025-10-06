import { FC } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Lightbulb, Home } from "lucide-react";
import { Link } from "react-router-dom"; 

interface Unit {
  name: string;
  description: string;
  initiatives: string[];
  icon: JSX.Element;
}

const units: Unit[] = [
  {
    name: "Programs Unit",
    icon: <GraduationCap className="w-10 h-10 text-primary mb-4" />,
    description:
      "The Programs Unit oversees the design, implementation, and monitoring of EPL’s Fellowship and training programs. It ensures that participants gain leadership skills, governance insights, and practical experience through impactful projects and mentorship.",
    initiatives: [
      "Public Service Fellowship Program",
      "Leadership Development Seminars",
      "Fellowship Alumni Network",
    ],
  },
  {
    name: "ACI Unit (African Civic Initiative)",
    icon: <Lightbulb className="w-10 h-10 text-accent mb-4" />,
    description:
      "The ACI Unit drives innovation in governance and civic engagement across Africa. It collaborates with institutions, youth leaders, and change-makers to co-create policies that strengthen public service delivery and citizen participation.",
    initiatives: [
      "Civic Leadership Labs",
      "Youth Governance Dialogues",
      "Policy Research and Advocacy",
    ],
  },
  {
    name: "GEMEL Unit (Gender & Mentorship in Leadership)",
    icon: <Users className="w-10 h-10 text-pink-600 mb-4" />,
    description:
      "The GEMEL Unit focuses on empowering women and underrepresented groups in governance. It promotes mentorship, equal leadership opportunities, and gender-sensitive governance frameworks that foster inclusion and diversity.",
    initiatives: [
      "Women in Governance Mentorship Program",
      "Gender and Policy Roundtables",
      "Inclusive Leadership Workshops",
    ],
  },
];

const Departments: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* 🌟 Hero Section */}
      <section className="relative bg-primary text-white py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-800 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EPL Departments & Units
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Empowering future public leaders through strategic programs and
            inclusive governance initiatives across Africa.
          </p>
        </div>
      </section>

      {/* 🧭 Breadcrumb */}
      <nav
        className="max-w-6xl mx-auto px-6 py-4 text-gray-600 text-sm flex items-center gap-2"
        aria-label="Breadcrumb"
      >
        <Link
          to="/"
          className="flex items-center text-primary hover:underline gap-1"
        >
          <Home size={16} />
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-500">Departments</span>
      </nav>

      {/* 🏛️ Departments Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Discover Our Units
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about the organizational units within Emerging Public
            Leaders and how they collaborate to deliver sustainable impact
            across governance, leadership, and gender inclusion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <motion.div
              key={unit.name}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                {unit.icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {unit.name}
                </h2>
              </div>

              <p className="text-gray-600 mb-6">{unit.description}</p>

              <div className="text-left">
                <h3 className="font-semibold text-primary mb-2">
                  Key Initiatives:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {unit.initiatives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Departments;
