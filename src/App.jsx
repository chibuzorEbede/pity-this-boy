import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import ModelViewer from "./components/model/ModelViewer";
import AnimationTest from "./components/AnimationTest";
import Intro from "./components/sections/intro/Intro";
import Wrapper from "./components/container/Wrapper";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <ModelViewer />
      </Container>
      {/* <Wrapper>
        <Intro />
      </Wrapper> */}
      {/* <AnimationTest /> */}
    </>
  );
}

export default App;
