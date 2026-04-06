import Typewriter from "@/components/Typewriter";
import { Mail, Github, Linkedin, Instagram, Heart } from "lucide-react";

const contacts = [
  { icon: Mail, label: "EMAIL", href: "mailto:syamantakmondal2006email.com" },
  { icon: Github, label: "GITHUB", href: "https://github.com/mondalsyamantak" },
  { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com/in/yourhandle" },
  { icon: Instagram, label: "INSTAGRAM", href: "https://instagram.com/yourhandle" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Typewriter speed={30} className="text-white text-2xl font-8bit">* The developer is waiting for your input.</Typewriter>
      <Typewriter speed={30} className="text-white text-2xl font-8bit">* What will you do?</Typewriter>

      <div className="flex flex-col gap-4 pl-4 mb-20">
        {contacts.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-yellow-400 transition-colors group"
          >
            <Icon size={16} className="group-hover:text-yellow-400" />
            <span className="text-base font-press-start tracking-widest">{label}</span>
          </a>
        ))}
        </div>

      {/* <div className="flex items-center gap-3 pl-4 mt-2">
        <Heart size={14} className="text-red-500 fill-red-500" />
        <span className="text-yellow-400 text-base font-press-start tracking-widest hover:text-white cursor-pointer transition-colors">
          SPARE
        </span>
      </div> */}
    </div>
  );
}