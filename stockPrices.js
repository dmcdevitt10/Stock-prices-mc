function best(stockPrices){
    let maxProfit = 0
    for(let i = 0; i < stockPrices.length; i++){
        let currentBuyNumber = stockPrices[i]
        for(let k = i + 1; k < stockPrices.length; k++){
            let currentSellNumber = stockPrices[k]
            let currentProfit = currentSellNumber - currentBuyNumber
            if(currentProfit > maxProfit){
                maxProfit = currentProfit
            }
        }
    }
    return maxProfit
}

console.log(best([8,6,5]))