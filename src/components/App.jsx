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
import balanceback from "../assets/balanceback.png";
import rideback from "../assets/rideback.png";
import balconyback from "../assets/balconyback.png";

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
      <div className="album-covers">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={balance} alt="The Balance" className="albums" />
            </div>
            <div className="flip-box-back">
              <img
                src={balanceback}
                alt="balance song list"
                className="albums"
              />
            </div>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={ride} alt="The Ride" className="albums" />
            </div>
            <div className="flip-box-back">
              <img src={rideback} alt="balance song list" className="albums" />
            </div>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={balcony} alt="The Balcony" className="albums" />
            </div>
            <div className="flip-box-back">
              <img
                src={balconyback}
                alt="balance song list"
                className="albums"
              />
            </div>
          </div>
        </div>

        {/* <img src={balance} alt="The Balance" className="albums" /> */}
        {/* <img src={ride} alt="The Ride" className="albums" /> */}
        {/* <img src={balcony} alt="The Balcony" className="albums" /> */}
        <div className="link-box">
          <Link to="" className="listen-link" id="link-1">
            LISTEN
          </Link>
          <Link to="" className="listen-link" id="link-2">
            LISTEN
          </Link>
          <Link to="" className="listen-link" id="link-3">
            LISTEN
          </Link>
        </div>
      </div>
      {/* <div className="link-box">
        <Link to="" className="listen-link" id="link-1">
          LISTEN
        </Link>
        <Link to="" className="listen-link" id="link-2">
          LISTEN
        </Link>
        <Link to="" className="listen-link" id="link-3">
          LISTEN
        </Link>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
