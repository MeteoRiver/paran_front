"use client";
import { useState } from "react";
import Link from "next/link";
import Row from "./Row";
import AdminButton from "../user/admin/AdminButton";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* - 페이지 작아질 때 햄버거 버튼 생성 만들어 둠.  */}
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="size-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* <AdminButton /> */}
      
      <aside
        id="default-sidebar"
        className="top-100 sticky left-0 z-40 w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="min-h-screen overflow-y-auto bg-green-100 px-3 py-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                type="button"
                className={`group dark:hover:bg-gray-700 flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white ${
                  activeTab === "All"
                    ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                    : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleDropdown}
              >
                <svg
                  className="size-5 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  우리들의 작은 모임
                </span>

                <svg
                  className={`size-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen && (
                <ul id="dropdownItems" className="space-y-2 py-2">
                  <li>
                    <Link
                      href="/groups"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700"
                    >
                      모임보기
                    </Link>
                  </li>
                  <li>
                    <Link
                      
                      href="/chats/list"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700"
                    >
                      채팅방보기
                      <span className="ms-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        갯수
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/rooms"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="size-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">우리들의 작은 공간</span>
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="size-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">
                  우리들의 작은 서점
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-8 sm:ml-64 w-[88%] absolute top-0 h-full overflow-y-scroll">
        <div className="mb-4 grid grid-cols-3 gap-4">
          {/* {rowItem.map(){ */}
          <Row title={'제목2'} fetchUrl={'http://localhost:8083/reviews'} getId={()=> ('id')} />
          {/* }} */}
        </div>
      </div>
    </div>
  );
}
