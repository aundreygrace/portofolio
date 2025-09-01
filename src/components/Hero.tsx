const Hero = () => {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="mb-12">
           {/* <div className="w-24 h-24 mt-10 mx-auto mb-8 flex items-center justify-center">
             <img className=" rounded-full" src="/src/assets/profil.jpg"/>
            </div>*/}
            
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
              Hi, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Aundrey Grace</span>
            </h1>
            
            {/*<p className="text-xl text-gray-400 mb-2">SMK Student</p>*/}
            <p className="text-lg text-gray-500 mb-8">Just a student who loves making things on the web.
            </p>
            
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>
            
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed font-light">
            Still learning. Still building. Still growing.
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Hero;
  