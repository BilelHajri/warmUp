/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {

	var min = Math.min(...prices)
	var indexMin = prices.indexOf(min)

	var tab = prices.slice(indexMin)

	console.log(tab)
	max = Math.max(...tab)

	var indexMax = prices.indexOf(max)
	console.log(max)
	console.log(indexMax)

	if (max > min && indexMax > indexMin){
		console.log("buy on day ," + (indexMin+1) + " and sell on "+ (indexMax + 1))
		return "your profit = " + (max - min)
	}else {
		return "no transaction is done "
	}

  // YOUR CODE HERE
};
