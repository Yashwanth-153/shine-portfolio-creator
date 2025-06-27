
import { Mail, Link, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "yashwanthsripadhi@gmail.com",
      href: "mailto:yashwanthsripadhi@gmail.com",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yashwanth-sripadhi-5158a728a",
      href: "https://www.linkedin.com/in/yashwanth-sripadhi-5158a728a",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Yashwanth-153",
      href: "https://github.com/Yashwanth-153",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-4">
            Ready to collaborate on cybersecurity projects or discuss opportunities?
          </p>
          <p className="text-gray-400">
            I'm always interested in new challenges and innovative security solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader className="text-center">
                <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-white">{contact.label}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <CardDescription className="text-gray-300 mb-4">
                  {contact.value}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  onClick={() => window.open(contact.href, '_blank')}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Secure Together</h3>
              <p className="text-gray-300 mb-6">
                Whether you need penetration testing, security consulting, or want to discuss the latest in cybersecurity, 
                I'm here to help. Reach out through any of the channels above!
              </p>
              <div className="text-gray-400">
                <p>📱 Phone: 9398292227</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
