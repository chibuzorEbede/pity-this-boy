import "./App.css";
import Logo from "./components/logo/logo";
import MenuButton from "./components/menu/MenuButton";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import ThreeDModel from "./components/model/threeDModel";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
      </Container>
      <ThreeDModel />
    </>
  );
}

export default App;
