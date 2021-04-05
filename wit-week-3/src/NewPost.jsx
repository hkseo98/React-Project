import { useRef } from "react";

export default function NewPost({ posts, setPosts }) {
  const form = useRef();
  const uploadPost = () => {
    if (
      !(
        form.current.childNodes[0].value &&
        form.current.childNodes[1].value &&
        form.current.childNodes[3].value
      )
    ) {
      alert("Write Something! ^^");
      return;
    }
    const newPost = {
      post: {
        userId: form.current.childNodes[0].value,
        title: form.current.childNodes[1].value,
        body: form.current.childNodes[3].value,
        id: Math.random()
      },
      comments: []
    };
    setPosts([newPost, ...posts]);
    form.current.childNodes[0].value = form.current.childNodes[1].value = form.current.childNodes[3].value =
      "";
    console.log(newPost);
  };

  return (
    <div className="newPost" ref={form}>
      <textarea className="id" id="id" placeholder="User"></textarea>
      <textarea className="title" id="title" placeholder="Title"></textarea>
      <button type="submit" className="submit" onClick={uploadPost}>
        +
      </button>
      <textarea className="body" id="body" placeholder="Body"></textarea>
    </div>
  );
}
