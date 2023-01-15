import Footer from "./modules/footer/footer";
import Header from "./modules/header/header";
import Highlights from "./modules/main/highlights";
import Intro from "./modules/main/intro";
import Video from "./modules/main/video";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Highlights />
        <Video />
      </main>
      <Footer />
    </>
  );
}

export default App;
