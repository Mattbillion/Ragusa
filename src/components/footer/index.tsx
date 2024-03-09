"use client";
import React from "react";
import { CoverFlowSwiper } from "./Swiper";

const Footer = () => {
  return (
    <div className="bg-[#F4F7F9]">
      <footer className="flex flex-col gap-6 pt-[48px] container">
        <div className="flex gap-6 p-3">
          <CoverFlowSwiper />
          {footerData.map((item, idx) => (
            <div key={idx} className="max-w-[212px] w-full">
              <h4 className="font-medium text-[14px]">{item.title}</h4>
              <div className="flex flex-col ">
                {item.children &&
                  item.children.map((subItem, idx) => (
                    <p className="text-[14px]">{subItem.title}</p>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border border-transparent border-t-slate-200">
          <p>© 2024 powered by Proscript</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const footerData = [
  {
    title: "Аяллууд",
    children: [
      { title: "Гадаад аялал", link: "/" },
      { title: "Эвент үйл ажиллагаа", link: "/" },
      { title: "Дотоод аяллууд", link: "/" },
    ],
  },
  {
    title: "Тусламж",
    children: [
      { title: "Түгээмэл асуулт & хариулт", link: "/" },
      { title: "Аяллаа батагаажуулах", link: "/" },
      { title: "Нислэгийн тийз захиалах ", link: "/" },
    ],
  },
  {
    title: "Холбоо барих",
    children: [
      { title: "Ragusa.mn", link: "/", type: "social" },
      { title: "98119218, 7777-7777", link: "/", type: "social" },
      { title: "ragusatouragency", link: "/", type: "social" },
    ],
  },
  {
    title: "Subscribe to our newsletter",
    subtitle: "Stay updated on new travels and events, guides, and discounts.",
    type: "subscription",
  },
];
