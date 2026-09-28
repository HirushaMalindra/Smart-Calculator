import { createFileRoute } from "@tanstack/react-router";
import { Calculator } from "@/components/calculator/Calculator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calc — Modern Calculator" },
      {
        name: "description",
        content:
          "A modern calculator with scientific functions, landscape mode, theme colors, and clipboard history.",
      },
      { property: "og:title", content: "Calc — Modern Calculator" },
      {
        property: "og:description",
        content:
          "A modern calculator with scientific functions, landscape mode, theme colors, and clipboard history.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Calculator />;
}
