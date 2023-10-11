// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let flag=true;

// COLLECT VALUES FROM THE USER

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate as xx.x'));
years = parseInt(prompt('Enter the number of years you want to invest for'));

//Within investment, the number should be numeric. Within rate, 
//the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.
if (!isNaN(investment)){
    if ( !isNaN(rate) && (rate >=0 && (rate <= 6))){
        if ((years >= 1) && (years <= 30)){
        } else {
            flag = false;            
        }
    } else {
        flag = false;        
    }
} else {
    flag = false;    
}

// CALCULATE FUTURE VALUE
if ( flag == true) {
    futureValue = investment;
    for (let i = 0; i < years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }

    // DISPLAY RESULT
    document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
    document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
    document.write(`Years: ${years}<br>`);
    document.write(`Future value: $${futureValue.toFixed(2)}`);
} else {
    document.write("The application has exited.")
}