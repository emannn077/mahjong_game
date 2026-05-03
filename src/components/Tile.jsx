import { motion } from "framer-motion";

const Tile = ({ tile }) => {
  return (
    <motion.div
      className="tile"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {tile.type === "number" ? tile.value : tile.name}
    </motion.div>
  );
};

export default Tile;
