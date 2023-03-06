import React, { useState } from "react";
import "./date_spinner.css";
export default function Date_Spinner() {
  // const current_day =
  const [day, setDay] = useState(new Date().getDate());

  const handleClick = (e) => {
    let circularProgress = document.querySelector(".circular-progress");
    let progressStartValue = 0;
    let progressEndValue = 100;
    setDay(day + 1);
    let progress = setInterval(() => {
      progressStartValue++;
      circularProgress.style.background = `conic-gradient(#7d2ae8 ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;
      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, 1);
  };
  return (
    <>
      <div className="date">
        <div class="circular-progress" onClick={handleClick}>
          <span class="progress-value">{day}</span>
        </div>
        <span className="text">Date</span>
      </div>
    </>
  );
}
