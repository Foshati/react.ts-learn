import { useRef } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";

export default function Post() {
  const title = useRef<HTMLInputElement>(null)
  const content = useRef<HTMLTextAreaElement>(null)
  const tag= useRef(null)
  return (
    <div className="m-4">
      <form className="flex justify-center items-center gap-4">
        <input ref={title} className="input bg-black"  type="text" />
        <textarea ref={content} className=" textarea bg-black " name="" id=""></textarea>
        <ReactSelect ref={tag} className="bg-black"  isMulti placeholder="choose"/>
        <button className="btn" type="submit">Publish the post</button>
        <Link to="..">
          <button className="btn">cancel</button>
        </Link>
      </form>
    </div>
  );
}
