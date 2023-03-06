import React, { useState } from "react";
import "./year_spinner.css";
export default function Year_Spinner() {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleClick = (e) => {
    let circularProgress_year = document.querySelector(".circular_progress_year");
    let progressStartValue = 0;
    let progressEndValue = 100;
    setYear(year + 1);
    let progress = setInterval(() => {
      progressStartValue++;
      circularProgress_year.style.background = `conic-gradient(orange ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;
      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      
      }
    }, 1);
  };
  return (
    <>
<div className="year">
      <div class="circular_progress_year" onClick={handleClick}>
        <span class="progress-value">{year}</span>
      </div>
      <span class="text">Year</span>
    </div>
</>
  );
}
