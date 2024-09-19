import Article from "./components/Article";
import Pagination from "./components/Pagination";
import Row from "./components/Row";
import Link from "next/link";
import "./globals.css";
import Map from "./components/Map";
import KakaoChat from "./components/chat/KakaoChat"
import Text from "./components/chat/Text"
import RecommendBook from "./components/chat/RecommendBook";

export default function Home() {
  return (
    <div className="git">
      <section className="artWrap">
        <span className="bgEffect"></span>
        <Article />
      </section>
      <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
        <h1 className="text-2xl dark:text-white">
          <section className="size-90" id="rowColum">
            <div id="btn-wrap">
              <div className="mb-4 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <ul className="-mb-px flex flex-wrap ">
                  <li className="me-2">
                    <button
                      type="button"
                      className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      전체
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      type="button"
                      className="active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                      aria-current="page"
                    >
                      공간
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      type="button"
                      className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      도서
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      type="button"
                      className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      소모임
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-3">
              {/* map 사용해서 데이타 props받고 연속 돌리기 넣어줄거임 */}
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Link
                href="/books/"
                className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                더보기
              </Link>
            </div>
          </section>
        </h1>
      </main>
      <article>
        <Map />
      </article>
      <KakaoChat />
      <RecommendBook/>
    </div>
  );
}
