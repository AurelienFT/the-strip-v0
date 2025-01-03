import { useEffect, useState } from "react";

/**
 * Hook for basic route and view management
 */
export const useRouter = () => {
  const views = ["Liquidity Pool", "Games"];
  const [view, setView] = useState<string>("");
  const queryParam = "v";

  const getViewFromUrl = () => {
    const url = new URL(window.location.href);
    return url.searchParams.get(queryParam);
  };

  const setRoute = (newView: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(queryParam, newView);
    window.history.pushState({}, "", url);
    setView(newView);
  };

  useEffect(() => {
    const viewFromUrl = getViewFromUrl();
    if (viewFromUrl) {
      setView(viewFromUrl);
    }
  }, []);

  return {
    view,
    views,
    setRoute,
  };
};
