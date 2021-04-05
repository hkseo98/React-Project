import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      let postList = [];
      const temp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const PostObjects = temp.data.map((val) => {
        return (async () => {
          const tempComments = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${val.id}/comments`
          );
          const PostObject = { post: val, comments: tempComments.data };
          postList.push(PostObject);
        })();
      });
      await Promise.all(PostObjects);
      postList.sort((a, b) => a.post.id - b.post.id);
      postList.map((val) => {
        return async () => {
          val.comments.sort((a, b) => a.id - b.id)();
        };
      });
      setPosts(postList);
      function loading() {
        setLoaded(true);
      }
      setTimeout(loading, 2000);
    };
    getPost();
  }, []);

  if (!loaded) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="App">
        <NewPost posts={posts} setPosts={setPosts}></NewPost>
        {posts.map((val) => (
          <Post key={val.post.id} item={val}></Post>
        ))}
      </div>
    );
  }
}
