(function () {
  const amountEl = document.getElementById("amount");
  const rateEl = document.getElementById("rate");
  const rateValueEl = document.getElementsByClassName("rate-value")[0];
  const yearEl = document.getElementById("years");
  const resultEl = document.getElementById("result");
  const submitEl = document.getElementsByTagName("button")[0];

  rateEl.addEventListener(
    "input",
    (event) => {
      const value = event.target.value;
      if (value.includes(".")) {
        const index = value.indexOf(".");
        rateValueEl.textContent = (value.slice(index).length === 2 ? value + "0" : value) + "%";
      } else {
        rateValueEl.textContent = value + ".00%";
      }
    },
    false
  );

  submitEl.addEventListener(
    "click",
    () => {
      const principal = amountEl.value;
      if (principal < 1) {
        alert("Please enter a positive value.");
        return amountEl.focus();
      }
      const rate = rateEl.value;
      const year = yearEl.value;
      const today = new Date().getFullYear();
      resultEl.innerHTML =
        "If you deposit <span>" +
        principal +
        "</span>\nat an interest rate of <span>" +
        rate +
        "%</span>,\nyou will receive an amount of <span>" +
        (principal * rate * year) / 100 +
        "</span>\nin the year <span>" +
        (today + Number(year)) +
        "</span>.";
    },
    false
  );
})();
