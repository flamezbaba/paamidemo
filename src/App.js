import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
