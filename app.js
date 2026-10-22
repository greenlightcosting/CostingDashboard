// Edit these example values to match your project.
const budget = 12000;
const costs = [
  { category: "Design and research", owner: "Creative", status: "Approved", amount: 2400 },
  { category: "Frontend development", owner: "Engineering", status: "In progress", amount: 4600 },
  { category: "Hosting and tools", owner: "Operations", status: "Approved", amount: 850 },
  { category: "Content production", owner: "Marketing", status: "Planned", amount: 1750 },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const plannedSpend = costs.reduce((total, cost) => total + cost.amount, 0);
const rows = document.querySelector("#cost-rows");

for (const cost of costs) {
  const row = document.createElement("tr");
  for (const value of [cost.category, cost.owner]) {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.append(cell);
  }

  const statusCell = document.createElement("td");
  const status = document.createElement("span");
  status.className = "status";
  status.textContent = cost.status;
  statusCell.append(status);
  row.append(statusCell);

  const amountCell = document.createElement("td");
  amountCell.className = "amount";
  amountCell.textContent = currency.format(cost.amount);
  row.append(amountCell);
  rows.append(row);
}

document.querySelector("#budget-total").textContent = currency.format(budget);
document.querySelector("#planned-total").textContent = currency.format(plannedSpend);
document.querySelector("#remaining-total").textContent = currency.format(budget - plannedSpend);
document.querySelector("#table-total").textContent = currency.format(plannedSpend);
document.querySelector("#item-count").textContent = `${costs.length} items`;
