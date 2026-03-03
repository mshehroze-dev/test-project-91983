import { Routes, Route } from "react-router-dom";import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";import Contact from "./pages/Contact";
export default function App() {
  return (    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>  );
}
