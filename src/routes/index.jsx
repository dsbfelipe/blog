import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/layout/hero-section";
import PostsSection from "../components/layout/posts-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <PostsSection />
    </>
  );
}
