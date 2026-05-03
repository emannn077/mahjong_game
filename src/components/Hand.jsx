import Tile from "./Tile"

const Hand = ({ hand }) => {
  return(
  <div className="hand">
    {hand.map((t) => (
      <Tile key={t.id} tile={t} />
    ))}
  </div>

  )
}
export default Hand;
