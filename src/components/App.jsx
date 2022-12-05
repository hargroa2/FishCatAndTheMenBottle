import "../styles/App.scss";
import "../main";
import "../fonts/P22 Johnston Underground Regular.ttf";
import Nav from "../components/Nav";
import fishcat from "../assets/fishcat.png";
import balcony from "../assets/balcony.png";
import ride from "../assets/ride.png";
import balance from "../assets/balance.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <video
        src="https://www.dropbox.com/s/8lz6ohjxgf7y003/fishcatvid.mp4?raw=1"
        className="longshotvideo"
        autoPlay
        loop
        type="video/mp4"
        muted
      ></video>
      <img src={fishcat} alt="Logo" className="fishcatlogo" />
      <Footer />
      <div className="album-covers">
        <img src={balance} alt="The Balance" className="albums" />
        <img src={ride} alt="The Ride" className="albums" />
        <img src={balcony} alt="The Balcony" className="albums" />
        <Link to="" className="listen-link">
          LISTEN
        </Link>
        <Link to="" className="listen-link">
          LISTEN
        </Link>
        <Link to="" className="listen-link">
          LISTEN
        </Link>
      </div>
    </div>
  );
}

export default App;
