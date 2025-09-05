import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import HeroSection from "../components/layout/hero-section";
import PostsSection from "../components/domain/posts-section";
import posts from "../content/index.js";

const searchSchema = z.object({
  page: z.number().min(1).catch(1),
  filter: z.enum(["all", "Projeto", "Curso"]).catch("all"),
  sort: z.enum(["date", "name"]).catch("date"),
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: searchSchema,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <PostsSection posts={posts} />
    </>
  );
}
