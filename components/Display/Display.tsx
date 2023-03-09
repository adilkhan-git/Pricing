"use client";

import React, { useState } from "react";
import NumberOfPage from "../NumberOfPage/NumberOfPage";
import Rate from "../Rate/Rate";
import Slider from "../Slider/Slider";

const PRICE_PER_K_VIEWS = 0.16;

function Display() {
  const [views, setViews] = useState(0);
  const rate = PRICE_PER_K_VIEWS * views;
  return (
    <>
      <NumberOfPage views={views} />
      <Rate rate={rate} period={"month"} />
      <Slider views={views} setViews={setViews} />
    </>
  );
}

export default Display;
