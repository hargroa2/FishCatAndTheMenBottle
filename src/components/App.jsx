import "../styles/App.scss";
import "../main";
import "../fonts/P22 Johnston Underground Regular.ttf";
import Nav from "../components/Nav";
import fishcatvid2 from "../assets/fishcatvid2.mp4";

function App() {
  return (
    <div>
      <Nav />
      <video
        src={fishcatvid2}
        className="longshotvideo"
        autoPlay
        loop
        type="video/mp4"
        muted
      ></video>
    </div>
  );
}

export default App;
