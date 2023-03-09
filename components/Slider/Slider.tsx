"use client";
import { ChangeEvent } from "react";

interface IProps {
  views: number;
  setViews: (newViews: number) => void;
}

function Slider(props: IProps) {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setViews(event.currentTarget.valueAsNumber);
  };
  return (
    <input
      type="range"
      id="volume"
      name="volume"
      min="0"
      max="200"
      value={props.views}
      onChange={changeHandler}
    />
  );
}

export default Slider;
