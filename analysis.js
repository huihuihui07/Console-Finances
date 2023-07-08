let totalProfit = 0; //?
let len = finances.length;

//total profit
for (let i = 0; i < len; i++) {
  totalProfit += finances[i][1];
}

//total change= profit of month(len)-profit of 1st month / total months-1
const totalChange = (finances[len - 1][1] - finances[1][1]) / (len - 1);

// how to consolidate this code?
console.log(
  "Financial Analysis \n----------------------------\nTotal Months: " + len
);
console.log("Total: $" + totalProfit);
console.log("Average Change: " + totalChange);
