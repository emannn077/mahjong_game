import { motion } from `framer-motion`;

const Tile=({tile})=>(
  <motion.div
  classNmae='title'
  initial={{scale:0}}
  animate={{scale=1}}
  >
    {tile.type === "number" ? tile.value: tile.name}
  </motion.div>
)

export default Tile
