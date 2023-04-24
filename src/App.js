import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import PostId from "./pages/SpecificPost/PostId";
import AddPost from "./pages/AddPost/AddPost";
import Footer from "./components/Footer/Footer";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const baseURL = "https://jsonblob.com/api/jsonBlob/1099048816031842304";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/post/:id" element={<PostId posts={posts} />} />
            <Route />
            <Route />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
