import { useState } from "react";

export default function PostState() {
  const [posts, setPosts] = useState([]);

  function addPost() {
    const image = document.getElementById("image").value;
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const time = document.getElementById("time").value;
    const body = document.getElementById("body").value;

    setPosts([
      ...posts,
      {
        image,
        title,
        subtitle,
        time,
        body,
      },
    ]);

    document.getElementById("image").value = "";
    document.getElementById("title").value = "";
    document.getElementById("subtitle").value = "";
    document.getElementById("time").value = "";
    document.getElementById("body").value = "";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input id="image" type="text" placeholder="imageLink..."></input>
      <input id="title" type="text" placeholder="title..."></input>
      <input id="subtitle" type="text" placeholder="subtitle..."></input>
      <input id="time" type="text" placeholder="time..."></input>
      <input id="body" type="text" placeholder="body..."></input>
      <br />
      <br />
      <button type="button" onClick={addPost}>
        Add Post
      </button>
      <br />
      <br />

      <div id="Post-Container">
        {posts.map((post) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                width: "25vw",
                borderRadius: "5px",
                padding: 20,
                margin: 10,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "2vw" }}
              >
                <div>
                  <img width={60} src={post.image} alt="profile-photo" />
                </div>
                <div>
                  <p>
                    <b>{post.title}</b>
                  </p>
                  <p>{post.subtitle}</p>
                  {post.time && (
                    <div>
                      {post.time} .
                      <img
                        width={15}
                        src="data:image/png;base64,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"
                        alt="icon"
                      />
                    </div>
                  )}
                </div>
              </div>
              <br />
              <div>{post.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
