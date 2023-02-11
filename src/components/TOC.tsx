import { useEffect } from "react";
import tocbot from "tocbot";

export default function TOC() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".content",
      headingSelector: "h2, h3",
      disableTocScrollSync: true,
    });

    return () => tocbot.destroy();
  }, []);

  return <nav className="toc" />;
}
