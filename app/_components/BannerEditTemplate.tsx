import { motion, AnimatePresence } from "framer-motion";
import { useGlobalContext } from "@/app/_services/GlobalContextProvider";

export default function BannerEditTemplate() {
  const { state, dispatch } = useGlobalContext();

  return (
    <AnimatePresence>
      {state.edit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="fixed left-0 top-0 z-[10] flex h-full w-full items-center justify-center bg-gradient-to-t from-black/30 to-black/20"
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={"relative h-3/4 w-3/4 rounded-3xl bg-white"}
          >
            <motion.button
              whileHover={{ rotate: 90 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={
                "absolute right-10 top-10 h-14 w-14 rounded-full bg-stone-300"
              }
              onClick={() => dispatch({ type: "setEdit", payload: false })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
