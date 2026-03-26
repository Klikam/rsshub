import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <label className="p-2" htmlFor="rss-name">
          Insert subreddit name
        </label>
        <input
          type="text"
          name="rss-name"
          id="rss-name"
          className="border-stone-400"
        />
        <button className="bg-indigo-200 border-">Submit</button>
      </div>
    </main>
  );
}
