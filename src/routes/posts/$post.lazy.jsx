import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";

const components = {
  h1: ({ ...props }) => (
    <h1 className="mb-4 text-center font-outfit text-4xl" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2
      className="mb-12 text-center font-outfit text-xl text-gray-500 dark:text-gray-400"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="mb-2 text-center font-outfit text-xl text-gray-500 dark:text-gray-400"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p className="mb-4 text-justify indent-12 font-inter" {...props} />
  ),
  img: ({ ...props }) => (
    <img {...props} className="mt-16 mb-16" alt={props.alt} />
  ),
};

const posts = import.meta.glob("../../content/*.md", {
  query: "?raw",
  import: "default",
});

export const Route = createLazyFileRoute("/posts/$post")({
  component: RouteComponent,
});

function RouteComponent() {
  const { post } = Route.useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const path = `../../content/${post}.md`;
    posts[path]().then((rawContent) => {
      setContent(rawContent);
    });
  }, [post]);

  return (
    <main className="flex w-full justify-center">
      <article className="mt-32 max-w-[1024px]">
        <Markdown components={components}>{content}</Markdown>
      </article>
    </main>
  );
}
