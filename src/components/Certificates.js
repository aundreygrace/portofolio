import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Certificates = () => {
    const certificates = [
        {
            title: 'Belajar Dasar Pemrograman Web',
            issuer: 'Dicoding',
            date: '2024',
            description: 'Dasar HTML dan CSS sebagai tiga fondasi pembuatan website. ',
            image: '/belajar-dasar-pemrograman-web.jpeg',
            source: 'https://www.dicoding.com/certificates/2VX344Y3NZYQ',
        },
        {
            title: 'Belajar Dasar Pemrograman Javascript',
            issuer: 'Dicoding',
            date: '2024',
            description: 'Dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.js.',
            image: '/belajar-dasar-pemrograman-javascript.jpeg',
            source: 'https://www.dicoding.com/certificates/4EXGVEOYDXRL',
        },
        {
            title: 'Belajar Dasar AI',
            issuer: 'Dicoding',
            date: '2024',
            description: 'Mengidentifikasi konsep penting dalam Deep Learning beserta mengimplementasikan contoh penerapannya.',
            image: '/belajar-dasar-ai.png',
            source: 'https://www.dicoding.com/certificates/0LZ0RODWRP65',
        }
    ];
    return (_jsx("section", { id: "certificates", className: "py-20 bg-gray-900 scroll-mt-24", children: _jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-light text-white mb-4", children: "Certificates" }), _jsx("div", { className: "w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: certificates.map((cert, index) => (_jsxs("a", { href: cert.source || "#", target: "_blank", rel: "noopener noreferrer", className: "bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group block", children: [_jsx("div", { className: "aspect-video overflow-hidden", children: _jsx("img", { src: cert.image, alt: cert.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors", children: cert.title }), _jsxs("div", { className: "text-blue-400/80 text-sm font-light mb-3", children: [cert.issuer, " \u2022 ", cert.date] }), _jsx("p", { className: "text-gray-400 text-sm font-light leading-relaxed", children: cert.description })] })] }, index))) })] }) }));
};
export default Certificates;
