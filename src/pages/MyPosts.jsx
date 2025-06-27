import { useEffect, useState } from "react";
import "../styles/MyPage.css";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

export default function MyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    axios
      .get(`http://34.64.144.67/api/v1/posts/members/1/posts`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Refresh-Token": refreshToken,
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        alert("내 글 목록을 불러오지 못했습니다.");
        console.error(err);
      });
  }, []);
  return (
    <div className="mypage-container">
      <div className="flex flex-col">
        <div className="flex flex-low">
          <FaArrowLeft />
          <p className="font-bold text-2xl">내가 쓴 글</p>
        </div>
        <div>
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="my-2 p-2 border-b rounded flex justify-between"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <div className="font-bold">{post.title}</div>
              <div className="text-sm text-white">{post.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
