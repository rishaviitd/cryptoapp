import { useState, useRef, useEffect } from "react";
import React from "react";
import logo from "../images/logo.png";
import { Routes, Link, Route } from "react-router-dom";
import tabData from "../data/tabData";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
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

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-900">
          <div className="flex items-center mb-4">
            <Link to="/" className="flex items-center p-2">
              <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
              <span className="text-lg font-semibold text-gray-200">
                Cryptoverse
              </span>
            </Link>
          </div>
          <ul class="space-y-2 font-medium">
            {tabData.map((tab, index) => (
              <li className="hover:text-gray-900" key={index}>
                <Link
                  to={tab.to}
                  className={`flex items-center p-2 rounded-lg hover:bg-gray-100 group ${
                    selectedTab === tab ? "bg-white" : ""
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    height="32"
                    width="32"
                    dangerouslySetInnerHTML={{ __html: tab.svgHTML }}
                  ></svg>
                  <span
                    className={`ms-3 text-sm text-gray-200 hover:text-gray-900 ${
                      selectedTab === tab ? "text-gray-900" : ""
                    }`}
                  >
                    {tab.tabName}
                  </span>
                </Link>
              </li>
            ))}

            <li>
              {isSidebarOpen && (
                <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    <button className="text-gray-white" onClick={closeSidebar}>
                      Close Sidebar
                    </button>
                  </span>
                </a>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
