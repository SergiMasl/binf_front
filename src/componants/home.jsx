import "../componants/styles/__navbar.sass";
import "../componants/styles/home.sass";
import NavLogo from "../componants/styles/imgs/dna_no_bg.png";
import SequenceComparisons from "./Sequence_Comparisons/sequence_comparisons";

export default function home() {
  return (
    <div className="home-container">
      <div className="nav-bar">
        <div className="nav-logo--wrap">
          <img src={NavLogo} alt="logo" className="nav-logo" />
        </div>
        <div className="nav-text-wrap">
          <h2 className="nav-tytle">Molecular Analysis</h2>
          <p className="nav-text">STUDENT APP</p>
        </div>
        <div className="nav-right_box"></div>
      </div>
      <div className="main-window">
        <SequenceComparisons />
      </div>
    </div>
  );
}
