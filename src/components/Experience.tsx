
import { Calendar, MapPin, Shield, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      company: "SYNTHOQUEST PRIVATE LIMITED",
      role: "Vulnerability Assessment and Penetration Testing",
      duration: "Jan 2025 – Mar 2025",
      location: "Andhra Pradesh, India",
      type: "Internship",
      icon: <Shield className="w-6 h-6" />,
      responsibilities: [
        "Conducting comprehensive vulnerability assessments and penetration testing on various platforms",
        "Identifying and reporting vulnerabilities",
        "Architecting remediation strategies using tools like Burp Suite, Nmap, and Nessus to detect security weaknesses",
        "Collaborating with the development team to improve security measures and practices",
        "Performing comprehensive security assessments of web applications"
      ]
    },
    {
      company: "CODTECH IT SOLUTIONS",
      role: "Cybersecurity and Ethical Hacking",
      duration: "December 2024 – January 2025",
      location: "Hyderabad, Telangana",
      type: "Internship",
      icon: <Code className="w-6 h-6" />,
      responsibilities: [
        "Built a Penetration Testing Toolkit integrating tools like Nmap, Metasploit, Burp Suite, and Wireshark for identifying and exploiting system vulnerabilities",
        "Developed a Web Application Vulnerability Scanner to detect threats like SQL injection, XSS, and CSRF using Python",
        "Created an Advanced Encryption Tool implementing AES and RSA algorithms to secure data communication"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Professional <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      {experience.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{experience.company}</CardTitle>
                      <CardDescription className="text-cyan-300 font-medium text-lg">
                        {experience.role}
                      </CardDescription>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30">
                    {experience.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm mt-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {experience.location}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      <span>{responsibility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
