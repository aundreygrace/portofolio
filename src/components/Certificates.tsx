const Certificates = () => {
    const certificates = [
      {
        title: 'Belajar Dasar Pemrograman Web',
        issuer: 'Dicoding',
        date: '2024',
        description: 'Dasar HTML dan CSS sebagai tiga fondasi pembuatan website. ',
        image: '/src/assets/belajar-dasar-pemrograman-web.jpeg',
        source: 'https://www.dicoding.com/certificates/2VX344Y3NZYQ',
      },
      {
        title: 'Belajar Dasar Pemrograman Javascript',
        issuer: 'Dicoding',
        date: '2024',
        description: 'Dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.js.',
        image: '/src/assets/belajar-dasar-pemrograman-javascript.jpeg',
        source: 'https://www.dicoding.com/certificates/4EXGVEOYDXRL',
      },
      {
        title: 'Belajar Dasar AI',
        issuer: 'Dicoding',
        date: '2024',
        description: 'Mengidentifikasi konsep penting dalam Deep Learning beserta mengimplementasikan contoh penerapannya.',
        image: '/src/assets/belajar-dasar-ai.png',
        source: 'https://www.dicoding.com/certificates/0LZ0RODWRP65',
      }
    ];
  
    return (
      <section id="certificates" className="py-20 bg-gray-900 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">Certificates</h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <a key={index}
              href={cert.source || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group block">
               
              
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-blue-400/80 text-sm font-light mb-3">
                    {cert.issuer} • {cert.date}
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certificates;
  