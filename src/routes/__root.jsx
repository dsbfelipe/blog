import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/header";
import PageFrame from "../components/page-frame";
import InnerContent from "../components/inner-content";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <PageFrame>
          <InnerContent>
            <Header />
            <Outlet />
          </InnerContent>
        </PageFrame>

        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
