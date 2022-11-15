import "../styles/App.scss";
import "../main";
import "../fonts/P22 Johnston Underground Regular.ttf";
import Nav from "../components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <iframe
        width="958"
        height="539"
        src="https://www.youtube.com/embed/XUd2S8a2ChQ"
        title="Catfish and the Bottlemen - Longshot"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="longshotvideo"
        autoplay
      ></iframe>
    </div>
  );
}

export default App;
