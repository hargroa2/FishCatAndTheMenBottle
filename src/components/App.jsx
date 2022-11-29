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
        src="https://www.dropbox.com/s/8lz6ohjxgf7y003/fishcatvid.mp4?dl=0&raw=1"
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
