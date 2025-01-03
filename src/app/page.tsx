import FlipFlopSection from "@/components/flip-flop-section";
import NewsCarousel from "@/components/newscarousel";
import {
  getAllFlipNews,
  getAllNews,
  getPaginatedFlipNews,
  getPaginatedNews,
} from "@/lib/newsquery";

export default async function Home() {
  const { data: news } = await getPaginatedNews(1, 6);
  const { data: flipnews } = await getPaginatedFlipNews(1, 3);
  // console.log(news);
  news.sort((a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1));
  flipnews.sort((a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1));
  return (
    <main className="min-h-screen bg-gray-50">
      <NewsCarousel news={news} />
      <FlipFlopSection news={flipnews} />
    </main>
  );
}
