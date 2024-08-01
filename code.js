let Burl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/";

let To = document.querySelectorAll(".currency select");
let dp = document.querySelector(".box h3");
let btn = document.querySelector(".convert");

let to = "USD";
let from = "PKR";
for (const i of To) {
  i.addEventListener("change", () => {
    if (i.getAttribute("id") == "from") {
      from = i.value;
    } else {
      to = i.value;
    }
  });
}
let amount = 1;
let data;
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  to = to.toLowerCase();
  from = from.toLowerCase();
  let url = `${Burl + to}.min.json`;
  let promise = await fetch(url);
  data = await promise.json();
  amount = document.querySelector(".amount input");
  amountvalue = amount.value;
  if ((amount.value="" || amount.value < 1)) {
    amountvalue = 1;
  }
  cal(data[to][from], amountvalue);
});

function cal(f, s) {
  let a = f * s;
  dp.innerText = `${s} ${from.toUpperCase()} = ${a.toFixed(2)} ${to.toUpperCase()}`;
}
