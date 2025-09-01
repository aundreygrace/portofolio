import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' }
    ];
    return (_jsx("nav", { className: `fixed w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700/30'
            : 'bg-transparent'}`, children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "flex justify-between items-center py-6", children: [_jsx("div", { className: "text-xl font-light text-white tracking-wide", children: "Aundrey Grace" }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: navItems.map((item) => (_jsxs("a", { href: item.href, className: "text-gray-400 hover:text-white transition-colors duration-300 font-light text-sm tracking-wide relative group", children: [item.name, _jsx("span", { className: "absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" })] }, item.name))) }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "md:hidden p-2 text-white hover:text-purple-400 transition-colors", children: isOpen ? _jsx(X, { className: "w-5 h-5" }) : _jsx(Menu, { className: "w-5 h-5" }) })] }), isOpen && (_jsx("div", { className: "md:hidden bg-gray-800/95 backdrop-blur-md rounded-2xl mb-4 border border-gray-700/30", children: _jsx("div", { className: "py-6 space-y-1", children: navItems.map((item) => (_jsx("a", { href: item.href, onClick: () => setIsOpen(false), className: "block px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-700/30 rounded-xl transition-all duration-300 font-light", children: item.name }, item.name))) }) }))] }) }));
};
export default Navigation;
