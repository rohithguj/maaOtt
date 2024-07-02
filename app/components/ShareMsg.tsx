import React from "react";

interface ShareMsgProps {
  webUrl: string | null;
}

function ShareMsg({ webUrl }: ShareMsgProps) {
  return (
    <div>
      <div className="p-6 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center space-y-4 ">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          Share Message:
        </h3>
        <div className="p-6 bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg text-xl flex flex-col space-y-4 ">
          🎉 Unlock Unbeatable Deals on Your Favorite OTT Platforms! 🎉
          <br></br>
          Looking for a way to binge-watch without breaking the bank? Look no
          further! 🌟<br></br>
          🌐 Visit <strong>{webUrl}</strong> now to discover:<br></br>✅ Cheaper
          Prices on all your favorite OTT subscriptions!<br></br>✅ Combo Packs
          at unbelievably low prices!<br></br>✅ Exclusive Deals you won't find
          anywhere else!<br></br>
          Why pay more when you can save big and enjoy all your favorite shows
          and movies? 🍿📺<br></br>
          👉 Click the link and start saving today: <strong>{webUrl}</strong>
          <br></br>
          #MaaOTT #OTTDeals #BingeWatch #SaveMore #StreamingDeals
        </div>
      </div>
    </div>
  );
}

export default ShareMsg;
