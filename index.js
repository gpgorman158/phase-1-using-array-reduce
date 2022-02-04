const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(addBattery, element){return element + addBattery
}, 0);

console.log(totalBatteries);
