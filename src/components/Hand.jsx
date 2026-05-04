import Tile from "./Tile";
const Hand = ({ hand }) => (
  <div className="hand">
    {hand.map((tile) => (
      <Tile key={tile.id} tile={tile} />
    ))}
  </div>
);

export default Hand;
