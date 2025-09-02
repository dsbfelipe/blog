import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/resources/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="">Hello "/recursos/"!</div>;
}
