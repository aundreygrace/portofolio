import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Skills = () => {
    const skills = [
        {
            name: 'JavaScript',
            logo: 'dist/assets/javascript.svg'
        },
        {
            name: 'ReactJS',
            logo: 'dist/assets/react.svg'
        },
        {
            name: 'Tailwind CSS',
            logo: 'dist/assets/tailwindcss.svg'
        },
    ];
    return (_jsx("section", { id: "skills", className: "py-20 bg-gray-900 scroll-mt-24", children: _jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-light text-white mb-4", children: "Skills" }), _jsx("h1", { className: "text-1xl font-light text-white mb-4", children: "Bahasa pemrograman dan framework yang saya pakai" }), _jsx("div", { className: "w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" })] }), _jsx("div", { className: "grid grid-cols-3 gap-8 max-w-lg mx-auto", children: skills.map((skill) => (_jsxs("div", { className: "text-center group cursor-pointer", children: [_jsx("div", { className: "w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-110 flex items-center justify-center", children: _jsx("img", { src: skill.logo, alt: skill.name, className: "w-10 h-10 rounded-lg" }) }), _jsx("h3", { className: "text-sm font-light text-gray-300 group-hover:text-white transition-colors duration-300", children: skill.name })] }, skill.name))) })] }) }));
};
export default Skills;
