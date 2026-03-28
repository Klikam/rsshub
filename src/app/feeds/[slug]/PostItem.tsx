import { JSX } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RedditPost } from "@/schema/redditPostType";
import { Button } from "@/components/ui/button";

export default function PostItem({ item }: { item: RedditPost }): JSX.Element {
  const date = new Date(item.pubDate).toLocaleDateString();
  const time = new Date(item.pubDate).toLocaleTimeString();
  const publicationTime = date + " " + time;
  return (
    <li>
      <Card>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{publicationTime}</CardDescription>
          <CardAction>
            <a href={item.link}>
              <Button variant={"link"}>Show in Reddit</Button>
            </a>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            AI generated summary Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </li>
  );
}
