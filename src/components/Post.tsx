import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="m-4">
      <form className="flex justify-center items-center gap-4">
        <input className="input bg-black"  type="text" />
        <textarea className=" textarea bg-black " name="" id=""></textarea>
        <button className="btn" type="submit">Publish the post</button>
        <Link to="..">
          <button className="btn">cancel</button>
        </Link>
      </form>
    </div>
  );
}
