


//kilometerToMeter

function kilometerToMeter(a){
    kilometers = 1000;
    meter = kilometers *a;
   console.log(meter);
   return a;
}
kilometerToMeter(8);


//budgetCalculator
function budgetCalculator(watch,mobile,laptop){
    watchPrice =50;
    mobilePrice=100;
    laptopPrice=500;

    totalWatchPrice=watchPrice*watch;
    totalMobilePrice=mobilePrice*mobile;
    totallaptopPrice=laptopPrice*laptop;
    totalCost=totalWatchPrice+totalMobilePrice+laptopPrice;
   console.log(totalCost);
   return totalCost;


}
budgetCalculator(9,7,6);



// hotelCost
function hotelCost(day){
if (day<=10) {                 
   TotalCost=day*100;                         //first ten day cost 
}
else if (day>=11 && day<=20) {
   extraDay= day-10;                         // After fist ten day room rent decrease to 80 taka per day
   extraCost=extraDay*80;                    //extra day cost
   TotalCost=extraCost+(10*100);             // total cost after 20 day 
}
else if (day>=21) {
   extraDay= day-20;
   extraCost= extraDay*50;                   // After  tweenty day room rent decrease to 50 taka per day
   TotalCost= extraCost+(10*100)+(10*80);
}
console.log(TotalCost);
return  TotalCost;
}
hotelCost(50);


//megaFreind
function megaFreind() {
   var array = ['shepon', 'shihab', 'Fahim', 'Mostafizur'];
   var max = 0;
   var index = 0;
   for (i = 0; i < array.length; i++) {
       if (array[i].length > max) {
           max = array[i].length;
           index = i;
       }
   }
        console.log(array[index]);
  return array[index];
}
megaFreind();
