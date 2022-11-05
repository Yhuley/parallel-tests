import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home";
import PostsPage from "./pages/posts";
import "./styles.css";

const App = () => {
  return (
    <section>
      <header>
        <Link className="link" to="/">
          home
        </Link>
        <Link className="link" to="/posts">
          posts
        </Link>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
