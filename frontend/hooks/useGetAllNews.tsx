"use client";
import { useState, useEffect } from "react";

// cms
import { client } from "../lib/newsclient";

// type
interface News {
  id: string;
  updatedAt: string;
  createdAt: string;
  revisedAt: string;
  title: string;
  desc: string;
  date: string;
  content: string;
  category: { id: string; name: string }[];
}

function useGetAllNews() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    // ニュース記事を取得
    client
      .get({ endpoint: "news" })
      .then((data) => setNews(data.contents))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return news;
}

export default useGetAllNews;
