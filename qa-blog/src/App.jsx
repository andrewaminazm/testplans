import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import CategoryPage from "./pages/CategoryPage";
import TemplatesPage from "./pages/TemplatesPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
