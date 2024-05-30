import dbService from "../appwrite/db.service";
import { Container, PostCard } from "../components/index";
import { useEffect, useState } from "react";

export default function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.document);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="">
          {posts.map((post) => (
            <div key={post.$id} className="flex flex-wrap">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
