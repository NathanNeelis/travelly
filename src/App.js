import "./App.scss";
import Intro from "./view/components/organisms/intro/intro";
import Discover from "./view/components/organisms//discover/discover";
import Destinations from "./view/components/organisms/destinations/destinations";
import Contact from "./view/components/organisms/contact/contact";
import Divider from "./view/components/molecules/divider/divider";

function App() {
  return (
    <div className="main">
      <header>
        <Intro />
        {/* divider  the orange dot */}
        <Divider />
      </header>

      <main>
        <Discover />
        <Destinations />
        <Contact />
      </main>

      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default App;
