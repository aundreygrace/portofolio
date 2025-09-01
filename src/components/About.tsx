const About = () => {
    return (
      <section id="about" className="py-20 bg-gray-800/30 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">About Me</h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
             
              <p className="text-gray-400 leading-relaxed font-light">
                Saya adalah siswa SMK yang tertarik pada pengembangan web, khususnya di bidang frontend. 
                Saat ini sedang fokus mempelajari teknologi frontend modern seperti React.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                Melalui berbagai course online dan praktik mandiri, saya terus belajar 
                untuk menciptakan website yang menarik dan fungsional.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
                <div className="text-3xl font-light text-purple-400 mb-2">3+</div>
                <div className="text-sm text-gray-400 font-light">Projects</div>
              </div>
              <div className="text-center p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
                <div className="text-3xl font-light text-blue-400 mb-2">1+</div>
                <div className="text-sm text-gray-400 font-light">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  