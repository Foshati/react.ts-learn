import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Post from "./components/PostForm";
import EditPost from "./components/EditPost";
import { useLocalStorage } from "./hooks/useLocalStorage";

export type Tag = {
  id: string;
  lable: string;
};

export type PostData = {
  title: string;
  content: string;
  tags: Tag[];
};

export type Post = {
  id: string;
} & PostData;


export type RawPost = {
  id: string
} & RawPostData


export type RawPostData = {
  title: string
  markdown: string
  tagIds: string[]
}

export default function App() {


  const [posts, setPosts] = useLocalStorage<RawPost[]>('POSTS', [])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', [])

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
