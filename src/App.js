
import Navbar from "./components/Navigation/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Overview from './components/OverviewPage/overview.js';
import SecondPage from "./components/OverviewSecondPage/OveriewSecondPage.js";
import BlankPage from "./components/BlankPage/BlankPage.js";


function App() {
  /* The App here uses react router to display pages */
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BlankPage />} />
          <Route path="/overview" element={
          <><Overview /><SecondPage />
          </>} />
          <Route path="/dashboard" element={<BlankPage />} />
          <Route path="/analytics" element={<BlankPage />} />
          <Route path="/statistics" element={<BlankPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App