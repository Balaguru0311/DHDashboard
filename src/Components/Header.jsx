import React from "react";

const Header = () => {
  return (
    <div className="p-4 z-10 mt-12">
      <h3 className="text-[#312E81] text-2xl">Dashboard</h3>
      <header className="flex justify-between items-center relative mt-3">
        <div className="d-block">
          <p htmlFor="surveySelect" className="text-[#312E81] mb-2">
            Select survey
          </p>
          <select id="surveySelect" className="border rounded p-1">
            <option>New product</option>
          </select>
        </div>
        <div>
          <p htmlFor="dateRange" className="text-[#312E81] mb-2 ">
            Date range
          </p>
          <input
            type="text"
            id="dateRange"
            defaultValue="21/02/24 - 22/02/24"
            className="border rounded p-1"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
