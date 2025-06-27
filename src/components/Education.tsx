
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      institution: "Malla Reddy University",
      degree: "B.Tech in Computer Science, Cybersecurity",
      duration: "September 2022 – June 2026",
      location: "Hyderabad, Telangana",
      status: "Current"
    },
    {
      institution: "Alphores Junior College",
      degree: "Board of Intermediate Education",
      duration: "April 2020 – April 2022",
      location: "Hanamkonda, Telangana",
      status: "Completed"
    },
    {
      institution: "Bharati Vidya Bhavan",
      degree: "Board of Secondary Education",
      duration: "June 2020",
      location: "Hanamkonda, Telangana",
      status: "Completed"
    }
  ];

  const certifications = [
    "Complete Ethical Hacking - Udemy",
    "Introduction to Cyber Security - Infosys",
    "Introduction to Python - Coursera"
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Education & <span className="text-cyan-400">Certifications</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm border ${
                    edu.status === 'Current' 
                      ? 'bg-green-500/20 text-green-300 border-green-400/30' 
                      : 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <CardTitle className="text-white text-lg">{edu.institution}</CardTitle>
                <CardDescription className="text-cyan-300 font-medium">
                  {edu.degree}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <CardTitle className="text-white text-xl">Certifications</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <p className="text-gray-300 text-center">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
