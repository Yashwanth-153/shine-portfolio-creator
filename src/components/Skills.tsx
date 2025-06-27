
import { Shield, Code, Database, Terminal } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java Basics", "HTML", "CSS", "JavaScript"],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "DBMS"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Cybersecurity Tools",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Burp Suite", "NMap", "Wireshark", "Linux", "Metasploit", "Nessus"],
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Technical Skills",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["VAPT", "Ethical Hacking", "Cryptography", "Networking"],
      color: "from-purple-400 to-violet-500"
    }
  ];

  const softSkills = [
    "Communication Skills",
    "Problem-solving",
    "Leadership",
    "Time Management"
  ];

  const languages = ["Telugu", "Hindi", "English"];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full text-sm border border-green-400/30"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
