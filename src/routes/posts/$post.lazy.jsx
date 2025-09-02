import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";

const components = {
  h1: ({ ...props }) => <h1 className="text-lg text-red-500" {...props} />,
};

const posts = import.meta.glob("../../content/*.md", { as: "raw" });

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
    <main>
      <aside></aside>
      <article className="prose">
        <Markdown components={components}>{content}</Markdown>
      </article>
    </main>
  );
}
