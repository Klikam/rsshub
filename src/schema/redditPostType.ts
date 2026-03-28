import * as z from "zod";

export type RedditPost = {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  content: string;
  contentSnippet: string;
  id: string;
  isoDate: string;
};

export const RedditPostSchema = z.object({
  title: z.string(),
  link: z.string(),
  pubDate: z.string(),
  author: z.string(),
  content: z.string(),
  contentSnippet: z.string(),
  id: z.string(),
  isoDate: z.string(),
});
