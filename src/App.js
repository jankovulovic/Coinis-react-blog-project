import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { AddPost } from "./pages/AddPost/AddPost";
import { SinglePost } from "./pages/SinglePost/SinglePost";

import "./App.css";

export const AppContext = createContext();

const baseURL = "https://jsonblob.com/api/jsonBlob/1099048816031842304";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
    } catch (error) {}
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ posts, setPosts }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/post/:id" element={<SinglePost />} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
