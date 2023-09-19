import React from "react";
import { AiOutlineDoubleRight , AiOutlineDoubleLeft} from "react-icons/ai";

function Testimonials({
  review,
  randomNumber,
  incrementButton,
  decrementButton,
}) {
  return (

    <div className="Card bg-white sm:w-[60%] w-[90%] border-2 z-20 rounded-md relative shadow-md ring-violet-40 flex flex-col ">
      <div>
      <img
        alt="Error 🥺"
        src={review.image}
        className=" text-violet-600 text-xl font-bold aspect-square rounded-full w-[140px] h-[140px] transition-transform transform hover:scale-105 hover:shadow-violet-600 shadow-md ml-1 mt-1 pl-2 bg-violet-400"
      />
      </div>

     <div className='sm:absolute mt-3 sm:top-6 left-[40%] leading-loose'>
       <h3 className="name tracking-wider font-bold text-2xl capitalize">{review.name}</h3>

       <span className="jobPost text-violet-400 uppercase text-sm hover:text-shadow-lg hover:text-violet-600 ">{review.job}</span>
     </div>

      <div>
      <p className="description w-[75%] mx-auto leading-7 my-5 text-slate-500">{review.text}</p>

      </div>
      <div className="buttons">
       <div>

        <button
          className="decrementButton cursor-pointer bg-violet-400 text-yellow-100 hover:bg-violet-500 hover:text-white transition-all duration-200 p-3 pr-3 pl-3 rounded-full font-extrabold text-base mr-2"
          onClick={decrementButton}>
          <AiOutlineDoubleLeft />
        </button>

        <button
          className="incrementButton cursor-pointer bg-violet-400 text-yellow-100 hover:bg-violet-500 hover:text-white transition-all duration-200 p-3 pr-3 pl-3  rounded-full font-extrabold text-base ml-2 "
          onClick={incrementButton}>
          <AiOutlineDoubleRight />
        </button>

       </div>

        <div>
          <button
            className="supriseButton bg-violet-400 hover:bg-violet-500 transition-all duration-200
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4 mb-5"
            onClick={randomNumber}>
            Suprise Me
          </button>
        </div>

      </div>

      <style>
        {`
          @media (max-width: 420px) {
            .Card {
              justify-content: center;
              align-items: center;
            }
          }
        `}
      </style>
    </div> 
  );
}

export default Testimonials;
