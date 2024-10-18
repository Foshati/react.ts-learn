import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>home page</h2>} />
      <Route path="/add" element={<h2>add post page</h2>} />
      <Route path="/post/:id">
        <Route index element={<h2> view post</h2>} />
        <Route path="edit" element={<h2>edit post</h2>} />
      </Route>
    </Routes>
  );
}
