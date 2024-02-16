function calculateMoney(ticketSale){
   
   
    const ticketPrice = 120;
    const incomeByTicket = ticketPrice * ticketSale;
  
    const darowanCost = 500;
    const darowanFood = 8 * 50;
    const darowanTotalCost = darowanCost + darowanFood ;

   
  return perDayIncome = incomeByTicket - darowanTotalCost;
  
}
const ticketSale = 50;
console.log(perDayIncome);




function checkName(names){

    const lastLetters = ['a','y','i','e','o','u','w']
    const letters = names.charAt(names.length-1);
    
    
    if(lastLetters.includes(letters)){
        return 'good name';
    }
    
    else{
        return 'bad Name';
    }
    
    }
    
    console.log(checkName("rafee"));


 function deleteInvalids(inputArr) {
  
        return inputArr.filter(
          (element) => typeof element === "number" && !isNaN(element)
        );
      }
      
      const inputArray = [1,null,undefined,18,-19,NaN,"12",[1, 2],{ ob: "lala" }]; 
      const resultArray = deleteInvalids(inputArray);
      console.log(resultArray);
      console.log(typeof resultArray);




function password(inputs) {
        const { name, birthYear, siteName } = inputs;
        return `${siteName}#${name}@${birthYear}`;
      }
      
      
      const inputsData = { name: "nusrat", birthYear: 2000, siteName: "flex" };
      const remakePassword = password(inputsData);
      console.log(remakePassword);



      function monthlySavings(cost, livingexpense) {
        if (Array.isArray(cost) === true && typeof livingexpense === "number") {
          let sum = 0;
          for (let i = 0; i < cost.length; i++) {
            const singlePay = cost[i];
            if (singlePay >= 3000) {
              const afterTax = singlePay - (singlePay * 20) / 100;
              sum = sum + afterTax;
            } else {
              sum = sum + singlePay;
            }
          }
          const savings = sum - livingexpense;
          if (savings < 0) {
            return "earn more";
          } else {
            return savings;
          }
        } else {
          return "invalid input";
        }
      }
        
      const allPayments = [900, 2700, 3400]; 
      const livingexpense = 1000; 
      
      const result = monthlySavings(allPayments, livingexpense);
      console.log(result);