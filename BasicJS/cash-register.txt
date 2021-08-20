

const values = [
  {'PENNY':	0.01},
  {'NICKEL': 0.05},
  {'DIME': 0.1},
  {'QUARTER':	0.25},
  {'ONE': 1},
  {'FIVE': 5},
  {'TEN':	10},
  {'TWENTY':	20},
  {'ONE HUNDRED':	100}
]
const translations = values.reverse()

function checkCashRegister(price, cash, cid) {
  const changeToReturn = cash - price;
  const cashArr = cid.slice(0,)
  const changeArr = calculateExactChange(changeToReturn, cashArr);
  const newCashArr = cashArr.map(item => Math.abs(item[1].toFixed(2)));
  const totalCash = newCashArr.reduce((a,b) => a + b);
  const totalChange = calculateTotal(changeArr).toFixed(2);

  if(totalCash === 0 && totalChange - changeToReturn === 0) {
    
    const result = changeArr.filter(arr => arr[1] > 0);
    const newCash = [...cashArr]
    
    newCash.forEach((arr) => {
      if (arr[0] === result[0][0] ){
        arr[1] = Number((arr[1] + result[0][1]).toFixed(1))
      }
    })
    console.log(new Response('CLOSED', [...newCash]))
    
    return new Response('CLOSED', [...newCash])
  }
  if (totalChange - changeToReturn === 0) {
    return new Response('OPEN', [...changeArr])
  }else {
    return new Response("INSUFFICIENT_FUNDS", [])
  }
  
  
}

function calculateTotal(arr) {
  return arr.map(item => item[1]).reduce((a,b) => a + b)
}
function calculateExactChange(number, arr) {
  let change = Number(number) + 0.001;
  let changeReturn = [];
  let cashArr = arr.slice(0).reverse()
  for(let i=0 ; i < cashArr.length; i++){    
    const billsNumber = cashArr[i][1] / values[i][cashArr[i][0]]
    const billName = cashArr[i][0]
    const actualBill = values[i][billName]
    let billsNeeded = 0;
    
    if(change - actualBill > 0) {
      while(change > 0 && billsNumber > 0 && change-actualBill >= 0) { 
        change -= (actualBill);
        cashArr[i][1] -= actualBill
        billsNeeded++;
        billsNumber--;
      }    

    changeReturn.push([billName, billsNeeded * actualBill])

    }
   
  }
  return changeReturn
}


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 90], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


function checkEnoughMoney(change, total) {
  if (change > total) {
    return false
  }
  else {
    return true
  }
}

function Response (status, change) {
  this.status = status
  this.change = change

}

