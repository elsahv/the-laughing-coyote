import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        enim incidunt asperiores sapiente possimus nisi eaque qui labore est!
        Iste eum tempora fuga tenetur sapiente quaerat soluta, perferendis
        dolores excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        enim incidunt asperiores sapiente possimus nisi eaque qui labore est!
        Iste eum tempora fuga tenetur sapiente quaerat soluta, perferendis
        dolores excepturi.
      </p>
    </motion.div>
  );
};

export default contact;
