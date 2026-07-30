import Image from "next/image";
import Game2048 from "@/components/game-2048";
import GithubRepos from "@/components/github-repos";

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col gap-4 max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-[#1a1a1a] pb-3">
        <div className="text-base font-bold flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
          joehill@portfolio:~$ <span className="cursor-blink">init</span>
        </div>
        <div className="text-[11px] text-gray-600">
          v2.1.0 | {new Date().toISOString().replace("T", " ").slice(0, 19)} UTC
        </div>
      </header>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <section className="term-box">
            <div className="term-header">identity.profile</div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-20 h-20 rounded-full border-2 border-[#00ff88] overflow-hidden bg-[#111]">
                <Image src="/me.jpg" alt="Amir" width={80} height={80} className="object-cover" loading="eager" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Amir Mohammad Joshaghani</h1>
                <p className="text-xs text-gray-500 mt-1">Physics Undergrad @ Sharif UT</p>
                <p className="text-xs text-[#00ff88]">Programmer & UI/UX Designer</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Developing with precision. Physics meets code.
              Rust for speed, Python for logic, PHP for the web.
            </p>
          </section>

          <section className="term-box">
            <div className="term-header">contact.links</div>
            <div className="flex flex-col gap-2 text-xs">
              <a href="www.linkedin.com/in/amjoshaghani/" target="_blank" rel="noreferrer"
                 className="text-[#00ccff] hover:underline">[in] linkedin.com/in/amjoshaghani</a>
              <a href="https://instagram.com/joehill1917" target="_blank" rel="noreferrer"
                 className="text-[#00ccff] hover:underline">[ig] instagram.com/joehill1917</a>
              <a href="mailto:amjoshaghani@gmail.com"
                 className="text-[#00ccff] hover:underline">[@] amjoshaghani@gmail.com</a>
              <a href="https://github.com/amjoshaghani" target="_blank" rel="noreferrer"
                 className="text-[#00ccff] hover:underline">[gh] github.com/amjoshaghani</a>
            </div>
          </section>

          <section className="term-box">
            <div className="term-header">stack.skills</div>
            <div className="flex flex-wrap gap-1">
              {["Rust", "Python", "PHP", "Next.js", "TypeScript/Node.JS", "Tailwind", "Physics!", "Django & Flask", "Wordpress", "Data Analysis", "Full-stack development", "& more (:"].map(s => {
                const color = s === "Rust" ? "border-orange-500 text-orange-500"
                  : s === "Python" ? "border-yellow-400 text-yellow-400"
                    : s === "PHP" ? "border-[#ff92bf] text-[#ff92bf]"
                      : "border-gray-700 text-gray-400";
                return (
                  <span key={s} className={`text-[11px] px-2 py-0.5 rounded border bg-[#111] ${color}`}>
                    {s}
                  </span>
                );
              })}
            </div>
          </section>

          <Game2048 />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <GithubRepos />
          </div>

          <section className="term-box">
            <div className="term-header">system.status</div>
            <div className="text-[11px] text-gray-600 space-y-1">
              <p>OS: Arch Linux (btw)</p>
              <p>Shell: zsh 5.9</p>
              <p>Editor: Neovim</p>
              <p>WM: i3-gaps</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <footer className="border-t border-[#1a1a1a] pt-3 text-[11px] text-gray-700 text-center">
        // Built with Next.js // Amir Mohammad Joshaghani // 2026
      </footer>
    </main>
  );
}