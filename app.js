/*function num(x){
  while(x<=12){
    console.log(x);
    x = x +2 ;
  }
}*/

// function Just(){
//   for(let x=20;x=x+1;){
//     if(x % 7 == 0){
//       console.log(x);
//       break;
//     }
//   }
// }

// function Weather(){
//   var  v = prompt("What is the weather like ");
//   switch (v){
//     case "rainy":
//       console.log("Remember to bring your umbrella ");
//       break;
//       case "sunny":
//         console.log("dress lightly");
//         break;
//         case "cloudly":
//           console.log("You can goo outside ");
//           break;
//           default:
//             console.log("unknown weather");
//             break;

//   }
//}

// function Loop(){
//   for (let i =1;i<=5;i++){
//     for (let j=1;j<=i;j++){
//       console.log("#");
//     }
// }}

// function FizzBuzz(n){
//   for (let i=1;i<=n;i++){
//     if(i % 3==0 && i %5 == 0){
//       console.log("FizzBuzz");
//     }
//     else if(i % 3 == 0){
//       console.log("Fizz");
//     }
//     else if (i % 5 == 0){
//       console.log("Buzz");
//   }
//   else {
//     console.log(i);
//   }
// }
//}

// const hari = function(price , amount){
//   let total = price * amount ;
//   return total;
// }
// console.log(`the total amount is ${hari(200,2)}`);

// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//   let ingredientAmount = amount * factor;
//   if (ingredientAmount > 1) {
//   unit += "s";
//   }
//   console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
//   };
// const fruitPieces = function(fruit){
//   return fruit * 4;
// }
// function fruits(apples,oranges){
//   const applePieces = fruitPieces(apples);
//   const orangePieces = fruitPieces(oranges);
//   const juice = ` ${applePieces} pieces apples and ${orangePieces} pieces oranges juice `;
//   return juice ;
// }
// console.log(fruits(2,3));
// const calc1 = function(birthYear,CurrentYear){
//   const age = CurrentYear - birthYear;
//   return age ;
// }
// console.log(`the age of the person is ${calc1(2004,2023)}`);

// const calc2 = birthYear => 2023 - birthYear;
// const age2 = calc2(2001);
// console.log(age2);

// const calc3 = (birthYear,currentYear,retirementAge) => {
//   const age3 =  currentYear - birthYear ;
//   const retirement = retirementAge - age3;
//   return retirement;
// }
// console.log(`the years remaining for the retirement is ${calc3(2001,2023,60)}`);
// function ramesh(){
//   var bhas = prompt("enter your name");
// if(bhas == "dipesh"){
//   console.log("sala chippudi");
// }
// else{
//   console.log("margaya madarchod");
// }
// }
// const  BirthYear = function(currentYear,birthYear){
//   let age = currentYear - birthYear;

//   let retirement = 60 - age;
//   if (retirement > 0 ){
//     console.log(`the remaining years for the retirement is ${retirement}`);

//   }
//   else{
//     console.log("the person has already retired");
//   }

// }
// BirthYear(2023,1970);

// const ramesh = (Name,age) => {
//   if(Name === "sujan" && age === 22){
//   console.log("the data entry is right ");
// }
// else{
//   console.log("the data entry is wrong");
// }
// }
// ramesh("sujan",23);

// const calcAverage = (score1, score2, score3) => {
//   let avg = (score1 + score2 + score3) / 3;
//   return avg;
// };
// let avgDolphins = console.log(
//   `the average score of the dolphins is ${calcAverage(44, 23, 71)}`
// );
// let avgKoalas = console.log(
//   `the average score of the koalas is ${calcAverage(65, 54, 49)}`
// );
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2*avgKoalas) {
//     console.log("the dolphins are the winner");
//   } else {
//     console.log("the koalas are the winner ");
//   }
// }
// checkWinner(avgDolphins,avgKoalas);

//   const friends = ['sujan','ramesh','ram','hari'];
//   // // console.log(friends[3]);
//   //  var Name = prompt("enter the name you want to search");
//   // for(var i=0;i<4;i++){
//   //   if(friends[i] === Name){
//   //     console.log("the name you have been searching for has been found");
//   //   }
//   //   else {
//   //     console.log("the name is not on the list");
//   //   }
//   //   }
//  const rameshowr = ['yadav','chaudari','kamlesh',friends];
//  console.log(rameshowr);
//  console.log(rameshowr.length);

// const calcAge = function(BirthYear){
//   let age = 2023 - BirthYear;
//   return age;
// }
// const years = [2000,2001,2003,2006,1999];
// for(i=0;i<years.length;i++){

//   console.log(`the age of the person is ${calcAge(years[i])}`);
// }

// const HHH = ['john','son','hell','thor'];
// console.log(HHH);
// HHH.push('ramesh');
// console.log(HHH);
// HHH.pop('john');
// console.log(HHH);
// HHH.unshift('hari');
// console.log(HHH);
// console.log(HHH.includes('son'));
// if(HHH.includes('john')){
//   console.log("the person ypu are seraching for exists in the list")
// }

// const Ramesh = {
//   firstName:'Ramesh',
//   lastName:'Tamrakar',
//   class:'12',
//   rollno:'21',
//   birthYear:2000,
//   calcAge : function(){
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function(){
//      return `Ramesh is a ${this.age} year old student who has ${this.friends.length} friends and studies in class ${this.class}`;
//   },
//   friends:['Ganesh','Hari','Sita','Gita'],
//   marks: [12,34,45,65,67],
//   result: function(){
//     for(let i = 0;i<this.marks.length;i++){
//       if(this.marks[i] > 40){
//         console.log('pass');
//       }
//       else{
//         console.log("fail");
//       }
//     }
//   }
// };
// console.log(Ramesh.calcAge());
// console.log(Ramesh.age);
// console.log(Ramesh.getSummary());
// Ramesh.result();

// const Mark = {
//   firstName : 'Mark',
//   lastName : 'Miller',
//   Height: 1.69,
//   Weight: 68,
//   calcBmi: function(){
//   return (this.Weight /this.Height **2) ;
//   }
// };
// const John = {
//   firstName : 'John',
//   lastName : 'Smith' ,
//   Height: 92,
//   Weight: 1.95,
//   calcBmi: function(){
//    return (this.Weight / this.Height ** 2) ;
//     }
// };

// if(Mark.calcBmi()>John.calcBmi()){
//   console.log(`the BMI of mark ${Mark.calcBmi()} is greater than John`);
// }
// else if (John.calcBmi() > Mark.calcBmi()){
//   console.log(`the BMI of John ${John.calcBmi()} is greater than Mark`);
// }
// else{
//   console.log("both of their BMI are same");
// }

//for loop
// const birthYear = [2000,2001,2003,2010]
// const age=[];

//   for(let i= 0;i<birthYear.length;i++){

//     age.push(2023 - birthYear[i]);
//     if(age[i] <= 18 ) break;
//       console.log("18+",age[i]);

//   }
// console.log(age);

//loop inside loop
// for(let exercise = 1 ;exercise<4;exercise++){
//   console.log('------starting exercise------',exercise);
//   for(let i = 1;i<=5;i++){
//     console.log(`starting rep ${i}`);
//   }
// }
// let dice = Math.trunc(Math.random()*6) +1;
// while(dice != 6){
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random()*6) +1;
// }

// const bill = [22, 295, 176, 440, 37];
// let tip = [];
// const total = [];
// const calcTip = function (bill) {
//   return bill <= 50 && bill > 300 ? bill * 0.2 : bill * 0.5;
// };

// for (let i = 0; i < bill.length; i++) {
//   const tips = calcTip(bill[i]);
//   tip.push(tips);
//   total.push(tips + bill[i]);
// }
// console.log(bill, tip, total);

// calcAverage = function (total) {
//   let sum = 0;
//   for (i = 0; i < total.length; i++) {
//     sum = sum + total[i];
//   }
//   return sum / total.length;
// };
// console.log(calcAverage(total));

//Wrong
// const Name = "sujan";
// const reverse = function (str) {
//   let newString;
//   for (let i = str.length; i >= 0; i--) {
//     newString = newString + str[i];
//   }
// };
// console.log("/n", reverse("mero"));

// const temp = [12, 3, 5, -2, "error", 5, -8];
// const temp2 = ["error", 23, 5, 4, 9, 11, -7, -21];
// const calcTemp = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== "number") continue;
//     if (temp[i] > max) max = temp[i];

//     if (temp[i] < min) min = temp[i];
//   }
//   console.log(min, max);
// };
// const temp3 = temp.concat(temp2);
// console.log(calcTemp(temp3));
// const Temp = [17, 21, 23];
// const printForecast = function (temp) {
//   let str = "";
//   for (let i = 0; i < temp.length; i++) {
//     str += `${temp[i]}°C.....in ${i + 1}day ......`;
//   }
//   console.log(str);
// };
// printForecast(Temp);
