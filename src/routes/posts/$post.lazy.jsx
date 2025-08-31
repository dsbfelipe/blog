import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/posts/$post")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/posts/$post"!</div>;
}
