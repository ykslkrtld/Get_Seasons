// Get Season

const month = Number(prompt("Enter a month (1-12)"))
const day = Number(prompt("Enter a day (1-31)"))
let season = ""

if(
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    (month == 2 && day > 29) ||
    (month == 4 && day > 30) ||
    (month == 6 && day > 30) ||
    (month == 9 && day > 30) ||
    (month == 11 && day > 30)
    ){
    alert("Invalid month or day")
} 
if(
    (month == 2 && day >= 21 && day <= 28) ||
    (month == 3 && day >= 1 && day <= 31) ||
    (month == 4 && day >= 1 && day <= 30) ||
    (month == 5 && day >= 1 && day <= 31)
){
    season = "Spring";
    alert(`The season for ${month}/${day} is a ${season}`);
} else if(
    (month == 6 && day >= 1 && day <= 30) ||
    (month == 7 && day >= 1 && day <= 31) ||
    (month == 8 && day >= 1 && day <= 31) ||
    (month == 9 && day >= 1 && day <= 21)
  ) {
    season = "Summer"
    alert(`The season for ${month}/${day} is a ${season}`);
} else if(
    (month == 9 && day >= 22 && day <= 30) ||
    (month == 10 && day >= 1 && day <= 31) ||
    (month == 11 && day >= 1 && day <= 30) ||
    (month == 12 && day >= 1 && day <= 20)
  ){
    season = "Fall"
    alert(`The season for ${month}/${day} is a ${season}`);
} else if(
    (month == 12 && day >= 21 && day <= 31) ||
    (month == 1 && day >= 1 && day <= 31) ||
    (month == 2 && day >= 1 && day <= 20)
  ){
    season = "Winter"
    alert(`The season for ${month}/${day} is a ${season}`);
}