import { createLazyFileRoute } from "@tanstack/react-router";
import Markdown from "react-markdown";
import components from "../../components/ui/markdown-components";

const posts = import.meta.glob("../../content/*.md", {
  query: "?raw",
  import: "default",
});

export const Route = createLazyFileRoute("/posts/$post")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const path = `../../content/${params.post}.md`;
    const content = await posts[path]();
    return content;
  },
});

function RouteComponent() {
  const content = Route.useLoaderData();

  return (
    <main className="flex w-full justify-center">
      <article className="mt-32 max-w-[760px]">
        <Markdown components={components}>{content}</Markdown>
      </article>
    </main>
  );
}
