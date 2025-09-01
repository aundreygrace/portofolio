import { Mail, Phone, Github } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-900/50 backdrop-blur-sm text-white border-t border-gray-700/50 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-light mb-6">Get In Touch</h2>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-10"></div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-400 font-light">
          {/* Email */}
          <ContactItem
            icon={<Mail className="w-5 h-5 text-purple-400" />}
            text="aundreygrace@gmail.com"
            href="mailto:aundreygrace@gmail.com"
          />

          {/* Phone */}
          <ContactItem
            icon={<Phone className="w-5 h-5 text-blue-400" />}
            text="+62 857-3112-5834"
            href="https://wa.me/6285731125834"
          />

          {/* GitHub */}
          <ContactItem
            icon={<Github className="w-5 h-5 text-gray-400" />}
            text="github.com/aundreygrace"
            href="https://github.com/aundreygrace"
          />
        </div>
      </div>
    </section>
  )
}

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode
  text: string
  href?: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 hover:text-white transition-colors"
  >
    <span>{icon}</span>
    <span>{text}</span>
  </a>
)

export default Contact
