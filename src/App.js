import Page1 from "./Page1";
import Page2 from "./Page2";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Page1 />}></Route>
        <Route exact path="/page2" element={<Page2 />}></Route>
      </Routes>
    </Router>
  );
}
