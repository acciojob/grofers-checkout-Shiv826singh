const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // Get all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Sum all values
  prices.forEach(p => {
    total += Number(p.textContent);
  });

  // Create new row
  const tr = document.createElement("tr");

  // Create single cell
  const td = document.createElement("td");

  td.colSpan = 2; // span across both columns
  td.textContent = total;

  tr.appendChild(td);

  // Append row to table
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);