"use client";
import { useState, useEffect, useRef } from "react";
import { client } from "../lib/client";

interface Blog {
  id: string;
  topImage: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  body: string;
  tags: {
    id: string;
    tag: string;
  }[];
  image: string;
}

interface Props {
  ids: string[];
}

function useDesignationBlogData({ ids }: Props) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const fetchedIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs: Blog[] = [];
      for (const id of ids) {
        if (!fetchedIdsRef.current.has(id)) {
          try {
            const data: Blog = await client.get({
              endpoint: "blog",
              contentId: id,
            });
            fetchedBlogs.push(data);
            fetchedIdsRef.current.add(id);
          } catch (error) {
            console.error("Error fetching blogs:", error);
          }
        }
      }
      setBlogs((prevBlogs) => [...prevBlogs, ...fetchedBlogs]);
    };
    fetchBlogs();
  }, [ids]);

  return blogs;
}

export default useDesignationBlogData;
