import React, { useState } from "react";
import "./month_spinner.css";
export default function Month_Spinner() {
  const [month, setMonth] = useState(new Date().getMonth());

  const handleClick = (e) => {
    let circularProgress_month = document.querySelector(
      ".circular_progress_month"
    );
    let progressStartValue = 0;
    let progressEndValue = 100;
    setMonth(month + 1);
    let progress = setInterval(() => {
      progressStartValue++;
      circularProgress_month.style.background = `conic-gradient(#055160 ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;
      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, 1);
  };
  return (
    <>
      <div className="month">
        <div class="circular_progress_month" onClick={handleClick}>
          <span class="progress-value">{month}</span>
        </div>
        <span class="text">Month</span>
      </div>
    </>
  );
}
