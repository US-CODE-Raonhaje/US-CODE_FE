import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    axios
      .get(`http://34.64.144.67/api/v1/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Refresh-Token": refreshToken,
        },
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch(() => {
        alert("게시글을 불러오지 못했습니다.");
      });
  }, [id]);

  if (!post) return <div>로딩 중...</div>;

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-2">{post.title}</h2>
      <div className="mb-2 text-gray-500">{post.address}</div>
      <div>{post.content}</div>
    </div>
  );
}
