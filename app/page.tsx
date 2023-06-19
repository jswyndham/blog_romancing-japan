import ArticleCardFour from "./components/ArticleCardFour";
import ArticleCardOne from "./components/ArticleCardOne";
import ArticleCardThree from "./components/ArticleCardThree";
import ArticleCardTwo from "./components/ArticleCardTwo";
import BlogSmallCard from "./components/BlogSmallCard";
import SignupCard from "./components/SignupCard";
import Image from "next/image";

export const metadata = {
  title: "Romancing Japan - Travel, Lifestyle, Culture, Cooking",
  description:
    "Articles about Japanese travel, lifestyle, culture, and cooking. For those who wish to learn more about Japan and its culture.",
  openGraph: {
    title: "Romancing Japan - Travel, Lifestyle, Culture, Cooking",
    description:
      "Articles about Japanese travel, lifestyle, culture, and cooking. For those who wish to learn more about Japan and what goes on there.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

export default async function Home() {
  return (
    <>
      <main>
        <>
          <section className="flex flex-col items-center justify-center overflow-hidden">
            {/* Homepage pic */}
            <div>
              <Image
                src="/images/MtFuji_B&W_pana.png"
                width={3840}
                height={1368}
                alt="Mt.Fuji Black and White"
                priority
              />
            </div>

            <div className="flex flex-col justify-center align-middle drop-shadow-2xl md:w-[78%] lg:w-[80%] xl:w-[70%] 2xl:w-[55%] 3xl:max-w-screen-xl">
              {/* Latest banner */}
              <div className="absolute top-2 w-full bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
                <h1>Latest Articles</h1>
              </div>

              {/* Article post components */}

              <div className="mt-20 flex flex-col">
                <div className="md:grid md:grid-rows-3 md:grid-flow-col md:gap-8 md:mb-8 md:mt-4 xl:grid-rows-4">
                  <div className="mx-2 my-3 md:my-0 md:mx-0 md:row-span-1 md:col-span-6 xl:row-span-2 2xl:col-span-4">
                    <ArticleCardOne />
                  </div>

                  <div className="md:row-span-1 md:col-span-6 xl:row-span-2 xl:col-span-4">
                    <ArticleCardTwo />
                  </div>
                  <div className="md:row-span-1 md:col-span-6 xl:mt-2 xl:-mb-2 xl:row-span-2 xl:col-span-2 2xl:row-span-4 2xl:col-span-1 2xl:mt-4">
                    <SignupCard />
                  </div>
                </div>
                <div className="mx-4 my-2 md:mx-0 md:flex md:flex-col md:h-6/12 xl:gap-4 2xl:grid 2xl:grid-cols-4 2xl:gap-4">
                  <div className="2xl:col-span-2">
                    <ArticleCardThree />
                  </div>
                  <div className="2xl:col-span-2">
                    <ArticleCardFour />
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="flex flex-col space-y-6 mx-4 mb-6 md:mb-3 md:mx-0 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 2xl:grid-cols-3">
                <BlogSmallCard />
              </div>
            </div>
          </section>
        </>
      </main>
    </>
  );
}
