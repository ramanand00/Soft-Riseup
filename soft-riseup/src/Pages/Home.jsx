import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold text-blue-600">Welcome to Soft-Riseup</h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We build innovative software solutions that help businesses grow.
      </motion.p>
      <motion.button
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default Home;
