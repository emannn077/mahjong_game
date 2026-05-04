import Leaderboard from "../components/Leaderboard";

const Landing = ({ start }) => (
  <div className="landing">
    <div className="title-block">
      <div className="title-main">Mahjong Bet</div>
      <div className="title-sub">Higher &bull; Lower &bull; Fortune</div>
    </div>
    <div className="game-banner">
      <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="120" width="480" height="70" rx="12" fill="#1a3a2a" />
        <rect x="20" y="128" width="460" height="54" rx="8"  fill="#1f4233" />

        <ellipse cx="100" cy="128" rx="32" ry="6" fill="rgba(0,0,0,0.3)" />
        <ellipse cx="180" cy="128" rx="32" ry="6" fill="rgba(0,0,0,0.3)" />
        <ellipse cx="260" cy="128" rx="32" ry="6" fill="rgba(0,0,0,0.3)" />
        <ellipse cx="340" cy="128" rx="32" ry="6" fill="rgba(0,0,0,0.3)" />
        <ellipse cx="420" cy="128" rx="32" ry="6" fill="rgba(0,0,0,0.3)" />

        <g className="svg-float1">
          <rect x="72" y="52" width="56" height="76" rx="5" fill="#fefae0" stroke="#d4c090" strokeWidth="1" />
          <text x="100" y="96"  textAnchor="middle" fontFamily="serif" fontSize="26" fontWeight="700" fill="#2d6a4f">3</text>
          <text x="100" y="116" textAnchor="middle" fontFamily="serif" fontSize="9"  fill="#888" fontStyle="italic">bamboo</text>
        </g>

        <g className="svg-float2">
          <rect x="152" y="44" width="56" height="76" rx="5" fill="#fefae0" stroke="#d4c090" strokeWidth="1" />
          <text x="180" y="88"  textAnchor="middle" fontFamily="serif" fontSize="26" fontWeight="700" fill="#1a3a8f">7</text>
          <text x="180" y="108" textAnchor="middle" fontFamily="serif" fontSize="9"  fill="#888" fontStyle="italic">dots</text>
        </g>


        <g className="svg-float1 svg-delay1">
          <rect x="232" y="36" width="56" height="76" rx="5" fill="#fefae0" stroke="#d4c090" strokeWidth="1" />
          <text x="260" y="80"  textAnchor="middle" fontSize="22" fill="#c1121f">🀄</text>
          <text x="260" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#c1121f" fontWeight="700">RED</text>
        </g>


        <g className="svg-float2 svg-delay2">
          <rect x="312" y="44" width="56" height="76" rx="5" fill="#fefae0" stroke="#d4c090" strokeWidth="1" />
          <text x="340" y="88"  textAnchor="middle" fontFamily="serif" fontSize="26" fontWeight="700" fill="#c1121f">5</text>
          <text x="340" y="108" textAnchor="middle" fontFamily="serif" fontSize="9"  fill="#888" fontStyle="italic">chars</text>
        </g>

        <g className="svg-float1 svg-delay3">
          <rect x="392" y="52" width="56" height="76" rx="5" fill="#fefae0" stroke="#d4c090" strokeWidth="1" />
          <text x="420" y="94"  textAnchor="middle" fontSize="22" fill="#2d6a4f">🀀</text>
          <text x="420" y="114" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#2d6a4f" fontWeight="700">EAST</text>
        </g>


        <circle cx="60"  cy="155" r="10" fill="#d4a017" opacity="0.7" />
        <circle cx="60"  cy="155" r="7"  fill="none" stroke="#f4c842" strokeWidth="1" />
        <circle cx="450" cy="150" r="12" fill="#d4a017" opacity="0.6" />
        <circle cx="450" cy="150" r="9"  fill="none" stroke="#f4c842" strokeWidth="1" />
        <circle cx="465" cy="160" r="8"  fill="#b8860b" opacity="0.5" />


        <rect x="195" y="148" width="110" height="20" rx="10" fill="rgba(212,160,23,0.2)" stroke="rgba(212,160,23,0.4)" strokeWidth="1" />
        <text x="250" y="162" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#f4c842" letterSpacing="2">PLACE YOUR BET</text>

        <circle cx="145" cy="30" r="2"   fill="#f4c842" className="svg-sparkle" />
        <circle cx="355" cy="25" r="1.5" fill="#f4c842" className="svg-sparkle" />
        <circle cx="480" cy="45" r="2"   fill="#74c69d" className="svg-sparkle" />
        <circle cx="30"  cy="60" r="1.5" fill="#f4c842" className="svg-sparkle svg-sparkle-delay" />
        <circle cx="250" cy="15" r="2"   fill="#74c69d" className="svg-sparkle svg-sparkle-delay" />

      </svg>
    </div>


    <div className="ornament">
      <div className="ornament-line" />
      <div className="ornament-diamond" />
      <div className="ornament-line" />
    </div>


    <button className="btn-primary" onClick={start}>Begin Round</button>

    
    <div className="lb-wrap">
      <div className="lb-title">Hall of Champions</div>
      <Leaderboard />
    </div>

  </div>
);

export default Landing;
