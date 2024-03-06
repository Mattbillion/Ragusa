"use client";

import React, { useState } from "react";

const FilterTab = ({ filterValues }: any) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex gap-1 p-1 rounded-[8px] bg-[#F4F7F9]">
      {filterValues.map((btn: any, idx: any) => (
        <button
          className={`transition-all text-[14px] duration-200 px-4 py-1 rounded-[6px]  ${selected === idx ? "bg-[#0074FF] text-white" : "bg-none text-[#98A6BC]"}`}
          aria-label="filter-btn"
          key={idx}
          onClick={() => setSelected(idx)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FilterTab;
