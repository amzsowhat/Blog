import clsx from "clsx/lite";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "/blog", label: "Articles" },
  { href: "/sounds", label: "Sounds" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Primary" className="flex items-center justify-center gap-6 sm:gap-10">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ filter: "blur(20px)", opacity: 0, x: 16 }}
              animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
              exit={{ filter: "blur(20px)", opacity: 0, x: 16 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="hidden lg:flex items-center gap-1"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  className="px-4 py-2 rounded-full text-lg text-zinc-100 hover:text-white hover:bg-zinc-100/15 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.dialog
              open
              aria-label="Site menu"
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              exit={{ filter: "blur(20px)", opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 z-50 w-full h-full bg-zinc-900/25 backdrop-blur-xl"
            >
              <div
                className="h-full flex flex-col items-start justify-end gap-4 p-6 sm:p-8 pb-20 sm:pb-28"
                onClick={(event) => event.stopPropagation()}
              >
                {links.map((link, index) => (
                  <MobileLink key={link.href} href={link.href} index={index}>
                    {link.label}
                  </MobileLink>
                ))}

                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 70, filter: "blur(16px)", opacity: 0 }}
                  animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                  exit={{ y: 70, filter: "blur(16px)", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 55, damping: 12, delay: 0.18 }}
                  className="mt-3 text-lg text-zinc-400 hover:text-white"
                >
                  Close
                </motion.button>
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
        className="relative z-[60] w-8 h-8 flex items-center justify-center text-white cursor-pointer hover:outline-2 focus-visible:outline-2 outline-offset-2 outline-zinc-100/30 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className={clsx("transition-transform duration-500 ease-in-out", isOpen && "rotate-90")}
        >
          <title>{isOpen ? "Close menu" : "Open menu"}</title>
          <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".45" />
          <path fill="currentColor" d="M13.024 14.56c.493-.197.739-.296.932-.465c.05-.043.096-.09.139-.139c.17-.193.268-.44.465-.932c.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938c-.493.197-.74.295-.933.465c-.049.043-.095.09-.138.139c-.17.193-.268.44-.465.932c-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938" />
        </svg>
      </button>
    </nav>
  );
}

function MobileLink({ href, index, children }: { href: string; index: number; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      initial={{ y: 90, filter: "blur(20px)", opacity: 0 }}
      animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
      exit={{ y: 90, filter: "blur(20px)", opacity: 0 }}
      transition={{ type: "spring", stiffness: 52, damping: 11, delay: index * 0.055 }}
      className="text-4xl sm:text-5xl text-zinc-100 tracking-tight"
    >
      {children}
    </motion.a>
  );
}
