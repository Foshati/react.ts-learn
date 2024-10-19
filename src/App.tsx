import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import EditPost from "./components/EditPost";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPost />} />
      <Route path="/post/:id">
        <Route index element={<Post />} />
        <Route path="edit" element={<EditPost />} />
      </Route>
    </Routes>
  );
}
