const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += parseInt(price.textContent) || 0;
  });

  // Remove old total row if exists
  const old = document.getElementById("ans");
  if (old) old.remove();

  // Create new row
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.id = "ans";
  td.colSpan = 2;
  td.textContent = total;

  tr.appendChild(td);
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);