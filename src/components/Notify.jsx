import React from "react";
import SpotlightCard from "./styles/SpotlightCard";
const Notify = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 bg-black">
      <SpotlightCard className="w-full sm:w-2/3 text-white p-4 rounded-lg shadow-lg transition-all">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="w-full"
        >
          <div className="w-full max-w-2xl mx-auto p-6 bg-cyan-900 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-cyan-400">
              General Norms
            </h1>
            <div className="bg-gray-800 p-4 rounded-md shadow-md">
              <p className="text-sm sm:text-base text-gray-300 text-center">
                Who doesn't like rules? Let us share ours!!
              </p>
            </div>
          </div>
        </button>
      </SpotlightCard>
      <SpotlightCard className="w-full sm:w-2/3 text-white p-4 rounded-lg shadow-lg transition-all">
        <div className="w-full max-w-2xl mx-auto p-2 bg-cyan-900 text-white rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-cyan-400">
            Bus Route
          </h1>
          <div className="bg-gray-800 p-4 rounded-md shadow-md mb-4">
            <p className="text-sm sm:text-base text-gray-300 text-center">
              We make it easy to reach us 😇
            </p>
          </div>
          <a
            href="/about"
            className="w-full block text-center text-cyan-400 hover:underline font-bold"
          >
            Read More
          </a>
        </div>
      </SpotlightCard>
      <SpotlightCard className="w-full sm:w-2/3 text-white p-4 rounded-lg shadow-lg transition-all">
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="w-full"
        >
          <div className="w-full max-w-2xl mx-auto p-6 bg-cyan-900 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-cyan-400">
              Why should you come?
            </h1>
            <div className="bg-gray-800 p-4 rounded-md shadow-md">
              <p className="text-sm sm:text-base text-gray-300 text-center">
                💵Exciting prizes and more fun awaits
              </p>
            </div>
          </div>
        </button>
      </SpotlightCard>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full max-w-2xl mx-auto p-6 bg-black text-white rounded-lg shadow-lg min-h-[400px] flex flex-col justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
              Rules
            </h1>
            <div className="bg-gray-900 p-4 rounded-md shadow-md mb-4">
              <ul className="list-disc list-inside text-gray-400">
                <li>Respect all members</li>
                <li>No spamming or self-promotion</li>
                <li>Keep discussions constructive</li>
                <li>Follow community guidelines</li>
                <li>Report any violations</li>
              </ul>
            </div>
            <a
              href="/rules"
              className="text-cyan-400 hover:underline text-center font-bold"
            >
              Read More
            </a>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full max-w-2xl mx-auto p-6 bg-black text-white rounded-lg shadow-lg min-h-[400px] flex flex-col justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
              Why should you come?
            </h1>
            <div className="bg-gray-900 p-4 rounded-md shadow-md mb-4">
              <ul className="list-disc list-inside text-gray-400">
                <li>Respect all members</li>
                <li>No spamming or self-promotion</li>
                <li>Keep discussions constructive</li>
                <li>Follow community guidelines</li>
                <li>Report any violations</li>
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Notify;
