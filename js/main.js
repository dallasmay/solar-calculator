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

const calculatePanel = () => {
    let userChoiceIndex = document.forms.solarForm.panel.selectedIndex;
    let panelOptions = document.forms.solarForm.panel.options;
    let power = panelOptions[userChoiceIndex].value;
    let name = panelOptions[userChoiceIndex].text;
    let panelArr = [power, name];
    return panelArr;
}




const calculateSolar = () => {
    let dailyUseKw = Math.round(addMonths("mpc"));
    // console.log(dailyUseKw);

    let sunHoursPerDay = sunHours();
    // console.log(sunHoursPerDay);

    let minKwNeeds = dailyUseKw / sunHoursPerDay;
    // console.log(minKwNeeds);

    let realKwNeeds = minKwNeeds * 1.25;
    // console.log(realKwNeeds);

    let realWattNeeds = Math.round(realKwNeeds * 1000);
    // console.log(realWattNeeds);

    let panelInfo = calculatePanel();
    let panelOutput = panelInfo[0];
    let panelName = panelInfo[1];
    // console.log(panelOutput);
    // console.log(panelName);

    let panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
    // console.log(panelsNeeded);

    let feedback = "";
    feedback += `<p>Based on your average daily use of ${dailyUseKw} kWh, you will need to purchase ${panelsNeeded} ${panelName} solar panels to offset 100% of your electricity bill.</p>`;
    feedback += `<h2>Additional Details</h2>`;
    feedback += `<p>Your average daily electricity consumption: ${dailyUseKw} kWh per day</p>`;
    feedback += `<p>Average sunshine hours per day: ${sunHoursPerDay}</p>`;
    feedback += `Realistic watts needed per hour: ${realWattNeeds} watts/hour.</p>`;
    feedback += `<p>The ${panelName} panel you selected generates about ${panelOutput} watts per hour.</p>`;

    document.getElementById("feedback").innerHTML = feedback;
}

