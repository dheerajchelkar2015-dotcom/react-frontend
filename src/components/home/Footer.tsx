import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer
  className="
    w-full backdrop-blur mt-10
    bg-[#eaf0ec]/90
    shadow-[6px_6px_12px_#cfd8d3,-6px_-6px_12px_#ffffff]

    dark:bg-[#0f172a]/90
    dark:shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1f2933]
  "
>

      <div
        className="
          max-w-7xl mx-auto px-6 py-10
          flex flex-col md:flex-row
          items-center justify-between gap-6
        "
      >
        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          © 2025 <span className="font-semibold text-dark dark:text-white">Dheeraj</span> •
          Designing calm, sustainable digital experiences
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            aria-label="GitHub"
            
            className="
  flex h-11 w-11  items-center justify-center rounded-full
  bg-[#eaf0ec] rounded-xl bg-[#eaf0ec]
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a]
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-emerald-400
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]

  transition-all
"
          >
            <Github size={20} />
          </a>

          <a
            aria-label="LinkedIn"
            className="
  flex h-11 w-11  items-center justify-center rounded-full
  bg-[#eaf0ec] rounded-xl bg-[#eaf0ec] 
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a]
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-emerald-400
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]

  transition-all
"
          >
            <Linkedin size={20} />
          </a>

          <a
            aria-label="Email"
            className="
  flex h-11 w-11  items-center justify-center rounded-full
  bg-[#eaf0ec] rounded-xl bg-[#eaf0ec] 
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a]
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-emerald-400
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]

  transition-all
"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
