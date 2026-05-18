import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";
import { Particles } from "./Particles";

export function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-maroon-deep bg-ambient overflow-hidden"
        >
          <Particles count={20} />
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_30%,oklch(0_0_0/0.7)_100%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            <Monogram size={140} />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold/70 to-transparent"
            />
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70">
              R. Gururajan · S. Shagathiya
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
