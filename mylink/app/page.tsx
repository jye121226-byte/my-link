import { Github, Instagram, Linkedin, Mail, MapPin, Link as LinkIcon, Briefcase, User } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center p-4 sm:p-8 font-sans relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-rose-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[40%] w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>

      {/* Main Card Container */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl text-white relative z-10 transition-transform duration-500 hover:shadow-indigo-500/20">
        
        <div className="flex flex-col items-center">
          
          {/* Profile Image Container (Default Avatar) */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 shadow-xl mb-8 transition-transform hover:scale-105 duration-300 flex items-center justify-center">
            <div className="w-full h-full rounded-full border-4 border-slate-900 bg-slate-900/80 flex items-center justify-center overflow-hidden">
              <User size={64} className="text-white/70" />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            조예은
          </h1>
          <p className="text-lg sm:text-xl font-medium text-indigo-200 mb-6 flex items-center gap-2">
            <Briefcase size={20} className="text-rose-300" />
            Frontend Developer & Designer
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full text-sm font-medium mb-10 border border-white/10 backdrop-blur-md shadow-inner">
            <MapPin size={16} className="text-rose-300" />
            <span className="text-white/90">Seoul, South Korea</span>
          </div>

          {/* Bio statement */}
          <p className="text-center text-white/70 max-w-md mx-auto mb-12 text-base sm:text-lg leading-relaxed font-light">
            아름다운 인터페이스, 매끄러운 애니메이션, 그리고 깔끔한 코드를 바탕으로 매력적인 디지털 경험을 만듭니다. 더 나은 웹 서비스를 제공하기 위해 늘 새로운 기술을 탐구하고 있습니다.
          </p>

          {/* Links Grid */}
          <div className="w-full max-w-md grid grid-cols-1 gap-4 mb-4">
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between p-4 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl group-hover:bg-indigo-500/50 transition-colors shadow-inner">
                  <Github size={24} className="text-white" />
                </div>
                <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">GitHub</span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <LinkIcon size={18} className="text-white/40 group-hover:text-white/90 transition-colors" />
              </div>
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between p-4 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl group-hover:bg-rose-500/50 transition-colors shadow-inner">
                  <Instagram size={24} className="text-white" />
                </div>
                <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">Instagram</span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <LinkIcon size={18} className="text-white/40 group-hover:text-white/90 transition-colors" />
              </div>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between p-4 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl group-hover:bg-blue-500/50 transition-colors shadow-inner">
                  <Linkedin size={24} className="text-white" />
                </div>
                <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">LinkedIn</span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <LinkIcon size={18} className="text-white/40 group-hover:text-white/90 transition-colors" />
              </div>
            </a>

            <a 
              href="mailto:hello@example.com" 
              className="group flex items-center justify-between p-4 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl group-hover:bg-emerald-500/50 transition-colors shadow-inner">
                  <Mail size={24} className="text-white" />
                </div>
                <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">Contact</span>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <LinkIcon size={18} className="text-white/40 group-hover:text-white/90 transition-colors" />
              </div>
            </a>

          </div>

          {/* Footer stats or tags */}
          <div className="mt-10 w-full flex justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 bg-white/5 rounded-xl text-xs font-mono text-white/60 border border-white/5 hover:bg-white/10 transition-colors cursor-default">React</span>
            <span className="px-4 py-2 bg-white/5 rounded-xl text-xs font-mono text-white/60 border border-white/5 hover:bg-white/10 transition-colors cursor-default">Next.js</span>
            <span className="px-4 py-2 bg-white/5 rounded-xl text-xs font-mono text-white/60 border border-white/5 hover:bg-white/10 transition-colors cursor-default">Tailwind CSS</span>
            <span className="px-4 py-2 bg-white/5 rounded-xl text-xs font-mono text-white/60 border border-white/5 hover:bg-white/10 transition-colors cursor-default">TypeScript</span>
          </div>

        </div>
      </div>
    </div>
  );
}
