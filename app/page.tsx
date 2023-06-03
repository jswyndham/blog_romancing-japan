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

            <div className="flex flex-col items-center justify-center w-full mx-4 align-middle md:w-[85%] lg:w-[80%] 2xl:w-[60%]">
              <div className="divider"></div>

              {/* Latest banner */}
              <div className="flex flex-col justify-center align-middle drop-shadow-2xl md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:7/12">
                <div className="flex h-8 justify-center bg-secondary px-6 md:h-12">
                  <h1 className="text-2xl font-bold text-white md:text-3xl">
                    Latest Articles
                  </h1>
                </div>

                {/* Article post components */}

                <div className="">
                  <div className="flex flex-col">
                    <div className="">
                      <ArticleCardOne />
                    </div>
                    <div className="md:flex md:flex-row md:h-10/12">
                      <div className="md:rounded-lg md:mb-4 md:mr-4">
                        <ArticleCardTwo />
                      </div>
                      <div className="flex items-center justify-center w-screen my-7 text-center md:w-60 md:my-2 md:justify-end">
                        <SignupCard />
                      </div>
                    </div>
                    <div className="md:flex md:flex-col md:h-6/12">
                      <div className="">
                        <ArticleCardThree />
                      </div>
                      <div className="">
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
            </div>
          </section>
        </>
      </main>
    </>
  );
}
