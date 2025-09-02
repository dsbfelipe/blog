import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="">Hello "/recursos/"!</div>;
}
