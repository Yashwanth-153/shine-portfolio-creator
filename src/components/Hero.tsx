
import { Shield, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center space-x-4 mb-8">
          <div className="p-3 bg-cyan-500/20 rounded-full animate-bounce delay-0">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-3 bg-blue-500/20 rounded-full animate-bounce delay-200">
            <Terminal className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-green-500/20 rounded-full animate-bounce delay-400">
            <Code className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Yashwanth Sripadhi
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
          Cybersecurity Specialist | Penetration Tester | Ethical Hacker
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          A cybersecurity enthusiast with a strong interest in Vulnerability Assessment and Penetration Testing (VAPT) 
          and ethical hacking, while also exploring software development to stay updated with emerging tech trends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="mt-16 text-sm text-gray-500">
          <p>📧 yashwanthsripadhi@gmail.com | 📱 9398292227</p>
          <p>🌐 linkedin.com/in/yashwanth-sripadhi-5158a728a | 💻 github.com/Yashwanth-153</p>
        </div>
      </div>
    </section>
  );
};
