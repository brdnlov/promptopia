"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Guest from "@components/Guest";

const GuestProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  return <Guest name="Guest" desc="Have a nice visit" data={posts} />;
};

export default GuestProfile;
