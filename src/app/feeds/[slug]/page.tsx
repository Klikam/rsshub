import { JSX } from "react";

export default async function Feed({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;

  return <h2>The rss name is {slug}</h2>;
}
