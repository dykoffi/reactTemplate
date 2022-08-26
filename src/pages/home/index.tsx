import React from "react"

export default function Index() {

  return (
    <div id="home" className="w-screen flex-col min-h-screen flex md:flex-row">
      <div className="p-5 md:p-10 flex flex-col flex-1 justify-center space-y-5 text-center">
        <span className="text-green-600 font-bold text-5xl">Template</span>
        <h1 className="text-gray-200 text-4xl font-extralight">
          de création de projets React</h1>
        <h1 className="text-gray-200 text-4xl font-bold">
          <span className="underline decoration-pink-500 text-yellow-500">React - Axios - FluentUI - Framer Motion - RTK</span></h1>
      </div>
    </div>

  );
};


