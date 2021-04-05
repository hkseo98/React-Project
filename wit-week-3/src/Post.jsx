export default function Post({ item }) {
  return (
    <div className="post">
      <div className="user">
        <label>User</label>
        <span>{item.post.id}</span>
        <label>Title</label>
        <span>{item.post.title}</span>
      </div>
      <hr />
      <div className="content">
        <label>Body</label>
        <span>{item.post.body}</span>
      </div>
      <div className="comments">
        {item.comments.map((comment, idx) => (
          <div key={idx} className="comment">
            <label className="reple">ㄴ</label>
            <div className="name">
              <span className="f">{"name:"}</span>
              <span className="2">{comment.name}</span>
            </div>
            <div className="email">
              <span className="f">{"email:"}</span>
              <span className="2">{comment.email}</span>
            </div>
            <div className="commentBody">
              <span>{comment.body}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
