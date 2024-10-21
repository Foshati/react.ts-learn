import { type FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { PostData } from "../App";

type PostFormProps = {
  onSubmit: (data: PostData) => void;
};

export default function PostForm({ onSubmit }: PostFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const tagRef = useRef(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      content: contentRef.current!.value,
      tags: [],
    });
  }
  return (
    <div className="m-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-4"
      >
        <input ref={titleRef} className="input bg-black" type="text" required />
        <textarea
          ref={contentRef}
          className=" textarea bg-black "
          name=""
          id=""
          required
        />
        <ReactSelect
          ref={tagRef}
          className="bg-black"
          isMulti
          placeholder="choose"
        />
        <button className="btn" type="submit">
          Publish the post
        </button>
        <Link to="..">
          <button className="btn">cancel</button>
        </Link>
      </form>
    </div>
  );
}
