import { motion } from "framer-motion";
import { HONOR_EMOJI } from "../game/constants";

const tileVariants = {
  hidden:  { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

const Tile = ({ tile }) => {
  const typeClass =
    tile.type === "number"
      ? `suit-${tile.suit}`
      : `honor-${tile.name}`;

  return (
    <motion.div
      className={`tile ${typeClass}`}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
    >
      {tile.type === "number" ? (
        <>
          <div className="tile-number">{tile.value}</div>
          <div className="tile-suit">{tile.suit}</div>
        </>
      ) : (
        <>
          <div className="tile-honor-icon">{HONOR_EMOJI[tile.name] ?? "?"}</div>
          <div className="tile-honor-name">{tile.name}</div>
        </>
      )}
    </motion.div>
  );
};

export default Tile;
