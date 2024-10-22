import { type FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PostData, Tag } from "../App";
import ReactSelectCreatable from "react-select/creatable";

type PostFormProps = {
  onSubmit: (data: PostData) => void;
};

export default function PostForm({ onSubmit }: PostFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const tagRef = useRef(null);
  const [selectTag, setSelectTag] = useState<Tag[]>([]);

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
        <ReactSelectCreatable
          ref={tagRef}
          className="bg-black"
          isMulti
          placeholder="choose"
          value={selectTag.map((item) => ({
            lable: item.lable,
            id: item.id,
          }))}
          onChange={(tags) => {
            setSelectTag(
              tags.map((item) => ({ lable: item.lable, id: item.id }))
            );
          }}
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
