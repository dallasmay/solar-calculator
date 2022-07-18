const addMonths = (element) => {
    let annualUseKw = 0;
    let dailyUseKw = 0;

    let months = document.getElementById(element).getElementsByTagName("input");

    for (let i = 0; i < months.length; i++) {
        let curVal = +months[i].value;
        annualUseKw += curVal;
    }

    dailyUseKw = annualUseKw / 365;

    return dailyUseKw;
}



const sunHours = () => {
    let zoneIndex = document.forms.solarForm.zone.selectedIndex + 1;
    let hours;

    switch(zoneIndex) {
        case 1:
            hours = 6;
            break;
        case 2:
            hours = 5.5;
            break;
        case 3:
            hours = 5;
            break;
        case 4:
            hours = 4.5;
            break;
        case 5:
            hours = 4.2;
            break;
        case 6: 
            hours = 3.5;
            break;
        default: 
            hours = 0;
    }
    return hours;
}

const calculateSolar = () => {
    let dailyUseKw = addMonths("mpc");
    console.log(dailyUseKw);

    let sunHoursPerDay = sunHours();
    console.log(sunHoursPerDay);
}

