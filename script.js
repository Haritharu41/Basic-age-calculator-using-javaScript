let userDOB = document.querySelector("input");
let display = document.querySelector(".display")



let button = document.querySelector("button");

button.addEventListener("click", () => {
    const today = new Date();

    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();


    // if (dd < 10) dd = '0' + dd;
    // if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;


    let dobValue = userDOB.value;




    let userDob = new Date(dobValue)




    let userYyyy = userDob.getFullYear();


    let userMm = userDob.getMonth();
    let userDd = userDob.getDate();

    let aYyyy = yyyy - userYyyy;
    let aMm = mm - userMm;
    let aDd = dd - userDd;

    display.innerHTML = `<h2> Your age= ${aDd} Day, ${aMm} Month, ${aYyyy} Years`;


})