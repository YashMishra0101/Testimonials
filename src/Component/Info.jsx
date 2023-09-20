import React from "react";
import reviews from "../data";
import { useState } from "react";
import Testimonials from "./Testimonials";

function Info() {
  const [review, setReview] = useState(reviews[0]);
  function incrementButton() {
    let currentIndex = reviews.indexOf(review);
    let increase = currentIndex + 1;
    reviews.length > increase
      ? setReview(reviews[increase])
      : setReview(reviews[0]);
  }

  function decrementButton() {
    let currentIndex = reviews.indexOf(review);
    let decrease = currentIndex - 1;
    let lastIndex = reviews.length - 1;
    decrease > -1
      ? setReview(reviews[decrease])
      : setReview(reviews[lastIndex]);
  }

  function randomNumber() {
    let max = reviews.length;
    let currentIndex = reviews.indexOf(review);
    let random;

    do {
      random = Math.floor(Math.random() * max);
    } while (random === currentIndex);

    setReview(reviews[random]);

  }

  return (
    <div className="bg-slate-200 min-h-screen text-center flex justify-center items-center flex-col flex-wrap select-none">
      <header className="text-3xl font-bold text-violet-800 mb-3">
        <h1>Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
      </header>

      <Testimonials review={review} randomNumber={randomNumber} incrementButton={incrementButton}  decrementButton={decrementButton}/>
    </div>
  );
}

export default Info;
