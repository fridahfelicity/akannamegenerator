
function generatename(){
    let bdate = document.getElementById("dateinput").value;
    let gender = document.getElementById("genderdropdown").value;
    let byear = document.getElementById("yearinput").value;
    let bmonth = document.getElementById("monthinput").value;
    
    
    let weekdays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fnames = ["Abiero", "Anyango", "Achieng", "Akinyi", "Awuor", "Auma", "Akumu"];
    let mnames =["Ochieng", "Ouma", "Odero", "Okumu", "Owuor", "Odhiambo", "Otieno"];

    if (isNaN(byear) || (byear > 2022 )) {
        alert("You entered an invalid year")
    }
    if (isNaN(bmonth) || (bmonth < 1) || (bmonth >12)) {
        alert("You entered an invalid month")
    }
    if (isNaN(bdate) || (bdate < 1) || (bdate >31)) {
        alert("You entered an invalid date")
    }
    if (bmonth === 2 && Number(byear) %4 === 0){
        if(bdate > 28) {
            alert("You entered an invalid date")
        }
    }
    let dayOfWeekNumber = Math.floor((((Number(byear.slice(0,2))/4)-2*Number(byear.slice(0,2))-1)+
          ((5*Number(byear.slice(2,4))/4))+((26*(bmonth+1)/10))+bdate)%7);
          
    let day = ""
    if (dayOfWeekNumber === 0){
        day = "Sunday";

    }
    else if(dayOfWeekNumber === 1){
        day= "Monday";
    }
    else if(dayOfWeekNumber === 2){
        day= "Tuesday";
    }
    else if(dayOfWeekNumber === 3){
        day= "Wednesday";
    }
    else if(dayOfWeekNumber === 4){
        day= "Thursday";
    }
    else if(dayOfWeekNumber === 5){
        day= "Friday";
    }
    else{
        day="Saturday";
    }
    let selectedname = ""
    
    if(gender === "m"){
        selectedname = mnames[dayOfWeekNumber]
    }
    if(gender === "f"){
        selectedname = fnames[dayOfWeekNumber]
    }
    console.log("My name is " + selectedname + " and was born on " + day + " " + byear +"/" +bmonth + "/" + bdate+ "");
    document.getElementById("name").textContent = "My name is " + selectedname + " and was born on " + day + " " + byear +"/" +bmonth + "/" + bdate+ "";
    return false;

}

// function ageCalculator() {
//     var userinput = document.getElementById("DOB").value;
//     var dob = new Date(userinput);
//     if(userinput==null || userinput=='') {
//       document.getElementById("message").innerHTML = "**Choose a date please!";  
//       return false; 
//     } else {
    
//     //calculate month difference from current date in time
//     var month_diff = Date.now() - dob.getTime();
    
//     //convert the calculated difference in date format
//     var age_dt = new Date(month_diff); 
    
//     //extract year from date    
//     var year = age_dt.getUTCFullYear();
    
//     //now calculate the age of the user
//     var age = Math.abs(year - 1970);
    
//     //display the calculated age
//     return document.getElementById("result").innerHTML =  
//              "Age is: " + age + " years. ";
//     }
// }
