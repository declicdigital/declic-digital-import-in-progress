import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Declic Digital" },
      { name: "description", content: "Declic Digital — import en cours" },
      { property: "og:title", content: "Declic Digital" },
      { property: "og:description", content: "Declic Digital — import en cours" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p>Declic Digital — import en cours</p>
    </main>
  );
}
