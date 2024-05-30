import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
import dbService from "../appwrite/db.service";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [post, setPosts] = useState([]);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) setPosts(post);
      });
    } else navigate("/");
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}
