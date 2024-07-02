"use client";

import { useAppStore } from "../useAppStore";
import TopComponent from "../components/TopComponent";
import BgImg from "../components/BgImg";
import { auth } from "@/firebaseConfig";
import { APP_URL } from "../constants";
import ShareMsg from "../components/ShareMsg";
import { useEffect } from "react";

const Collaborators = () => {
  const [isLoggedIn, getActiveCount, setRedirect] = useAppStore((s) => [
    s.loggedIn,
    s.getActiveCount,
    s.setRedirect,
  ]);

  const user = auth.currentUser;

  let webLink: string | null = null;
  isLoggedIn
    ? (webLink = APP_URL.concat("/?ref=", user ? user.uid : ""))
    : null;

  useEffect(() => {
    setRedirect("/collaborators");
  }, []);

  return (
    <div>
      <BgImg />
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center space-y-12 text-center text-white">
        <TopComponent />
        <div className="text-4xl text-center">
          {!isLoggedIn && (
            <div> Please Log In / Signup to acces the collaborators page</div>
          )}
          {isLoggedIn && (
            <div className="space-y-10">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                Get upto 50% OFF for 5 active connections.
              </h3>
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                Get free ott plan for 10 active connections.
              </h3>
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                For commisions on more connections you can contact us at
                937011103.
              </h3>
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                You can share the message below or make a custom message with the link given in user link section to promote us.
              </h3>
              <div className="p-6 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center space-y-4 ">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  User Link:
                </h3>

                <div className="p-2 bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg transform transition-transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {webLink}
                  </h3>
                </div>
              </div>
              {/* <div className="p-6 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center space-y-4 ">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Active Users:
                </h3>
                <div className="p-2 bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg transform transition-transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {getActiveCount(user ? user.uid : "")}
                  </h3>
                </div>
              </div> */}
              <ShareMsg webUrl={webLink} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
