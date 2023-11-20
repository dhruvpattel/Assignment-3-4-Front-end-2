function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var conversionType = document.getElementById("conversionType").value;
    var result = 0;

    if (amount === '' || isNaN(amount)) {
        alert("Please enter a valid number");
        return;
    }

    // Hardcoded conversion rates
    var cadToUsdRate = 0.75; // Example rate
    var usdToCadRate = 1.33; // Example rate

    if (conversionType === "CADtoUSD") {
        result = amount * cadToUsdRate;
    } else if (conversionType === "USDtoCAD") {
        result = amount * usdToCadRate;
    }

    document.getElementById("result").innerHTML = ` ${result.toFixed(3)}`;
}
