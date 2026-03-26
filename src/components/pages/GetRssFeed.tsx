import { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRef } from "react";

export default function GetRssFeed(): JSX.Element {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Label className="p-2 text-xl" htmlFor="rss-name">
        Insert subreddit name
      </Label>
      <Input type="text" name="rss-name" id="rss-name" className="w-64" />
      <Button className="">Submit</Button>
    </div>
  );
}
