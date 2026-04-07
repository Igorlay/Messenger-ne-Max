const Feed = () => {
  const posts = [
    { id: 1, title: "Перший пост", content: "Це мій перший пост!" },
    { id: 2, title: "Другий пост", content: "Ще один запис у стрічці." },
  ];

  return (
    <div>
      <h1>Стрічка</h1>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "16px" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;