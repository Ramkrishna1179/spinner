import React, { useState } from "react";
import "./spinner.css";
export default function Spinner() {
  const current_day = new Date().getDate();
  const [day, setDay] = useState(current_day);

  const handleClick = (e) => {
    let circularProgress = document.querySelector(".circular-progress"),
      progressValue = document.querySelector(".progress-value");
    setDay(day + 1);
    let progressStartValue = 0;
    let progressEndValue = 100;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${day}`;
      circularProgress.style.background = `conic-gradient(#7d2ae8 ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
        // setTimeout(()=>{
        //   e.target.style.background=""
        // },1000)
      }
    }, 1);
  };
  return (
    <div class="container">
      <div class="circular-progress" onClick={handleClick}>
        <span class="progress-value">{current_day}</span>
      </div>
      <span class="text">Date</span>
    </div>
  );
}
