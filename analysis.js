let totalProfit = 0; //?
let len = finances.length;

//total profit
for (let i = 0; i < len; i++) {
  totalProfit += finances[i][1];
}

//total change= profit of month(len)-profit of 1st month / total months-1
const totalChange = (finances[len - 1][1] - finances[0][1]) / (len - 1);

//max increase in profit/loss
let maxIncrease=0;
let tempIncrease=0;
let maxIncreaseMonth=0;
for(let i = 1; i < len; i++){
    tempIncrease=finances[i][1]-finances[i-1][1];
    if(tempIncrease>maxIncrease)
    {maxIncrease= tempIncrease;
        maxIncreaseMonth=i;
    }
}

///max decrease in profit/loss
let maxDecrease=0;
let tempDecrease=0;
let maxDecreaseMonth=0;
for(let i = 1; i < len; i++){
    tempDecrease=finances[i][1]-finances[i-1][1];
    if(tempDecrease<maxDecrease)
    {maxDecrease= tempDecrease;
        maxDecreaseMonth=i;
    }
}

// how to consolidate this code?
console.log(
  "Financial Analysis \n----------------------------\nTotal Months: " + len
);
console.log("Total: $" + totalProfit);
console.log("Average Change: " + totalChange);
console.log(`Greatest Increase in Profits/Losses: ${finances[maxIncreaseMonth][0]} ($${maxIncrease})`);
console.log(`Greatest Increase in Profits/Losses: ${finances[maxDecreaseMonth][0]} ($${maxDecrease})`);
