import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/layout/header";
import PageFrame from "../components/layout/page-frame";
import InnerContent from "../components/layout/inner-content";
import Footer from "../components/layout/footer";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <PageFrame>
          <InnerContent>
            <Header />
            <Outlet />
            <Footer />
          </InnerContent>
        </PageFrame>

        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
