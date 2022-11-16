import "../styles/App.scss";
import "../main";
import "../fonts/P22 Johnston Underground Regular.ttf";
import Nav from "../components/Nav";
import fishcat from "../assets/fishcat.png";

function App() {
  return (
    <div>
      <Nav />
      <video
        src="https://www.dropbox.com/s/1pncjztgtx3sucx/fishcatvid3.mp4?raw=1"
        className="longshotvideo"
        autoPlay
        loop
        type="video/mp4"
        muted
      ></video>

      <img src={fishcat} alt="Logo" className="fishcatlogo" />
    </div>
  );
}

export default App;
