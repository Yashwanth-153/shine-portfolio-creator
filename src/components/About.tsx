
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About <span className="text-cyan-400">Me</span>
        </h2>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a passionate cybersecurity professional with extensive experience in vulnerability assessment, 
            penetration testing, and ethical hacking. My journey in cybersecurity has been driven by a curiosity 
            to understand and strengthen digital defenses against evolving threats.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Currently pursuing my B.Tech in Computer Science with a specialization in Cybersecurity at 
            Malla Reddy University, I combine academic knowledge with practical experience gained through 
            internships and real-world projects.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise spans across various cybersecurity domains including VAPT, cryptography, networking, 
            and secure coding practices. I'm eager to apply my skills in roles that combine offensive security 
            with secure coding and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};
