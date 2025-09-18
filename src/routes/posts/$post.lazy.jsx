import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import components from "../../components/ui/markdown-components";

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
      <article className="mt-32 max-w-[760px]">
        <Markdown components={components}>{content}</Markdown>
      </article>
    </main>
  );
}
