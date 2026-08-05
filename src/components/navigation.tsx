import clsx from "clsx/lite";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "/blog", label: "Articles" },
  { href: "/sounds", label: "Sounds" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Primary" className="flex items-center justify-center gap-8">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ filter: "blur(16px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              exit={{ filter: "blur(16px)", opacity: 0 }}
              className="hidden lg:flex gap-2 rounded-full bg-zinc-950/35 p-1.5 backdrop-blur-md"
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} className="px-4 py-2 text-zinc-200 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </motion.div>

            <motion.dialog
              open
              aria-label="Site menu"
              initial={{ filter: "blur(16px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              exit={{ filter: "blur(16px)", opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 w-full h-full bg-zinc-950/65 backdrop-blur-xl"
            >
              <div className="h-full flex flex-col items-start justify-end gap-5 p-8 pb-20">
                {links.map((link) => (
                  <a key={link.href} href={link.href} className="text-4xl text-zinc-100 tracking-tight">
                    {link.label}
                  </a>
                ))}
                <button type="button" onClick={() => setIsOpen(false)} className="mt-4 text-zinc-400 hover:text-white">
                  Close
                </button>
              </div>
            </motion.dialog>
          </>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-[60] w-9 h-9 flex items-center justify-center text-white cursor-pointer hover:outline-2 focus-visible:outline-2 outline-offset-2 outline-zinc-100/30 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={clsx("transition-transform duration-300", isOpen && "rotate-90")}>
          <title>{isOpen ? "Close menu" : "Open menu"}</title>
          <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".45" />
          <path fill="currentColor" d="M13.024 14.56c.493-.197.739-.296.932-.465c.05-.043.096-.09.139-.139c.17-.193.268-.44.465-.932c.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938c-.493.197-.74.295-.933.465c-.049.043-.095.09-.138.139c-.17.193-.268.44-.465.932c-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938" />
        </svg>
      </button>
    </nav>
  );
}