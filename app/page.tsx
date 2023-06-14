import Head from "next/head";
import ArticleCardFour from "./components/ArticleCardFour";
import ArticleCardOne from "./components/ArticleCardOne";
import ArticleCardThree from "./components/ArticleCardThree";
import ArticleCardTwo from "./components/ArticleCardTwo";
import BlogSmallCard from "./components/BlogSmallCard";
import SignupCard from "./components/SignupCard";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <>
        <Head>
          <title>Romancing Japan</title>
        </Head>
      </>
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

            <div className="flex flex-col justify-center align-middle drop-shadow-2xl md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%]">
              {/* Latest banner */}
              <div className="absolute top-2 w-full bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
                <h1>Latest Articles</h1>
              </div>

              {/* Article post components */}

              <div className="mt-20">
                <div className="flex flex-col">
                  <div className="">
                    <ArticleCardOne />
                  </div>
                  <div className="md:flex md:flex-row md:h-10/12">
                    <div className="md:rounded-lg md:mb-4 md:mr-4">
                      <ArticleCardTwo />
                    </div>
                    <div className="flex items-center justify-center w-full my-7 text-center md:w-60 md:my-2 md:justify-end">
                      <SignupCard />
                    </div>
                  </div>
                  <div className="md:flex md:flex-col md:h-6/12 xl:gap-4 2xl:grid 2xl:grid-cols-4 2xl:gap-4">
                    <div className="2xl:col-span-2">
                      <ArticleCardThree />
                    </div>
                    <div className="2xl:col-span-2">
                      <ArticleCardFour />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>

              <div className="flex flex-col m-1 md:grid md:grid-cols-2 md:gap-4 2xl:grid-cols-3">
                <BlogSmallCard />
              </div>
            </div>
          </section>
        </>
      </main>
    </>
  );
}
