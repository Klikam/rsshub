import { JSX } from "react";
import Parser from "rss-to-js";
import PostItem from "./PostItem";
import { RedditPostSchema } from "@/schema/redditPostType";

export default async function Feed({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;

  const response = await fetch(`https://www.reddit.com/r/${slug}/.rss`);
  const data = await response.text();

  const rssParser = new Parser();
  const feed = await rssParser.parseString(data);

  return (
    <>
      <h2>The rss name is {slug}</h2>

      <ul>
        {feed.items &&
          feed.items.length !== 0 &&
          RedditPostSchema.array()
            .parse(feed.items)
            .map((post) => <PostItem key={post.id} item={post} />)}
      </ul>
    </>
  );
}
