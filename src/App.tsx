import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LevensloopPage from './pages/LevensloopPage'
import DiscPage from './pages/DiscPage'
import BelbinPage from './pages/BelbinPage'
import FeedbackPage from './pages/FeedbackPage'
import PopPage from './pages/PopPage'
// removed: import CvPage from './pages/CvPage'
import ReflectieModule1Page from './pages/ReflectieModule1Page'
import Footer from './components/Footer'
import PasswordGate from "@/components/PasswordGate";

const App: React.FC = () => {
  const [isAuthed, setIsAuthed] = React.useState<boolean>(() => {
    return typeof window !== "undefined" && sessionStorage.getItem("ppo_auth") === "true";
  });

  if (!isAuthed) {
    return (
      <PasswordGate
        onSuccess={() => {
          sessionStorage.setItem("ppo_auth", "true");
          setIsAuthed(true);
        }}
      />
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/levensloop" element={<LevensloopPage />} />
            <Route path="/disc" element={<DiscPage />} />
            <Route path="/belbin" element={<BelbinPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/pop" element={<PopPage />} />
            {/* Removed CV page route */}
            <Route path="/reflectie-moduul-1" element={<ReflectieModule1Page />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App
