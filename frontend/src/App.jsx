// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function Home() {
//   return <h2>Home Page</h2>;
// }

// function About() {
//   return <h2>About Page</h2>;
// }
import Home from "./Components/Home"

export default function App() {
  return (
    <>
      <Home />
    </>

    // <Router>
    //   <div>
    //     <h1>My React App</h1>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

