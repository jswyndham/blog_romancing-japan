import AkariAndJamesProfile from "./components/AkariAndJamesProfile";
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

          <div className="flex flex-col justify-center align-middle drop-shadow-2xl md:w-[78%] lg:w-[97%] xl:max-w-screen-xl">
            {/* Latest banner */}
            <div className="absolute top-2 w-full bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
              <h1>Latest Articles</h1>
            </div>

            {/* Article post components */}

            <section className="mt-20 flex flex-col">
              <div className="md:grid md:grid-rows-3 md:grid-cols-auto md:gap-8 md:mb-8 md:mt-4 lg:grid-rows-3 lg:grid-cols-4">
                {/* ARTICLE ONE */}
                <article className="mx-2 my-3 md:my-0 md:mx-0 md:row-span-1 md:col-span-6 lg:row-span-1 lg:col-span-3">
                  <ArticleCardOne />
                </article>

                <article className="md:row-span-1 md:col-span-6 lg:mt-4 lg:row-span-2 lg:col-span-1">
                  <SignupCard />
                </article>

                {/* JAMES & AKARI PROFILE */}
                <article className="hidden lg:h-[90%] lg:flex mt-4 xl:border-l-4 xl:border-r-4 border-white lg:row-span-2 lg:col-span-1">
                  <AkariAndJamesProfile/>
                </article>

                {/* ARTICLE TWO & SIGNUP CARD */}
                <article className="md:row-span-1 md:col-span-6 lg:row-span-1 lg:col-span-2">
                  <ArticleCardTwo />
                </article>

                <article className="lg:h-[80%] lg:row-span-1 lg:col-span-3 lg:-mt-5 2xl:mt-0">
                  <ArticleCardThree />
                </article>

                {/* <article className="lg:row-span-1 lg:col-span-4">
                <article className="flex flex-col space-y-6 mx-4 mb-6 md:mb-3 md:mx-0 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 2xl:grid-cols-3">
              <BlogSmallCard />
            </article>
                </article> */}
              </div>

              {/* ARTICLE THREE & FOUR */}
              <article className="mx-4 my-2 md:mx-0 md:flex md:flex-col md:h-6/12 xl:gap-4 xl:grid xl:grid-cols-4 2xl:gap-4"></article>
            </section>

            <div className="divider lg:-mt-28"></div>

            <article className="flex flex-col space-y-6 mx-4 mb-6 md:mb-3 md:mx-0 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 2xl:grid-cols-3">
              <BlogSmallCard />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
