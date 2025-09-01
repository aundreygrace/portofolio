import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
    const projects = [
        /* {
          title: 'Todo List App',
          description: 'Simple todo app dengan CRUD functionality',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
          tech: ['React', 'JavaScript'],
          github: '#',
          demo: '#'
        },
        {
          title: 'Portfolio Website',
          description: 'Personal portfolio dengan modern design',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop',
          tech: ['React', 'Tailwind'],
          github: '#',
          demo: '#'
        }, */
        {
            title: 'Digitalisasi UMKM Warung Bu Sari',
            description: 'Proyek ini merupakan hasil partisipasi saya dalam Lomba Web Programming Dies Natalis HMP-TI 2025, dengan tema "Digitalisasi UMKM Lokal". Website ini dibuat untuk membantu usaha kecil seperti Warung Bu Sari agar bisa tampil secara digital tanpa membutuhkan backend.',
            image: '/src/assets/warung-umkm.jpg',
            tech: ['JavaScript', 'CSS'],
            github: 'https://github.com/aundreygrace/-Warung-UMKM-Bu-Sari',
            demo: 'https://warung-bu-sari.vercel.app/'
        }
    ];
    return (_jsx("section", { id: "projects", className: "py-20 bg-gray-800/30 scroll-mt-24", children: _jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-light text-white mb-4", children: "Projects" }), _jsx("div", { className: "w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => (_jsxs("div", { className: "bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group", children: [_jsx("div", { className: "aspect-video overflow-hidden", children: _jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-white mb-2 group-hover:text-purple-400 transition-colors", children: project.title }), _jsx("p", { className: "text-gray-400 text-sm mb-4 font-light leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tech.map((tech) => (_jsx("span", { className: "px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full font-light border border-purple-500/20", children: tech }, tech))) }), _jsxs("div", { className: "flex space-x-3", children: [_jsx("a", { href: project.github, className: "w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors border border-gray-600/30", children: _jsx(Github, { className: "w-4 h-4 text-gray-300" }) }), _jsx("a", { href: project.demo, className: "w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors border border-gray-600/30", children: _jsx(ExternalLink, { className: "w-4 h-4 text-gray-300" }) })] })] })] }, index))) })] }) }));
};
export default Projects;
