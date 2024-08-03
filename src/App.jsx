import { Route, Routes } from "react-router-dom";
import AnimationOne from "./pages/AnimationOne";
import Home from "./home/Home";
import AnimationTwo from "./pages/AnimationTwo";
import AnimationThree from "./pages/AnimationThree";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animation-one" element={<AnimationOne />} />
      <Route path="/animation-two" element={<AnimationTwo />} />
      <Route path="/animation-three" element={<AnimationThree />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
