var xReportValues = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
reProcess();

function reProcess() {

    var day1Visit = +processedOrder["SUNDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS +
        +processedOrder["SUNDAY"].NUTRO_ULTRA_LARGE_BREED.VISITS +
        +processedOrder["SUNDAY"].HILLS_SCIENCE_DIET_DRY.VISITS +
        +processedOrder["SUNDAY"].ROYAL_CANIN_SMALL.VISITS;

    var day2Visit = +processedOrder["MONDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS +
        +processedOrder["MONDAY"].NUTRO_ULTRA_LARGE_BREED.VISITS +
        +processedOrder["MONDAY"].HILLS_SCIENCE_DIET_DRY.VISITS +
        +processedOrder["MONDAY"].ROYAL_CANIN_SMALL.VISITS;


    var day3Visit = +processedOrder["TUESDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS +
        +processedOrder["TUESDAY"].NUTRO_ULTRA_LARGE_BREED.VISITS +
        +processedOrder["TUESDAY"].HILLS_SCIENCE_DIET_DRY.VISITS +
        +processedOrder["TUESDAY"].ROYAL_CANIN_SMALL.VISITS;

    var day4Visit = +processedOrder["WEDNESDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS +
        +processedOrder["WEDNESDAY"].NUTRO_ULTRA_LARGE_BREED.VISITS +
        +processedOrder["WEDNESDAY"].HILLS_SCIENCE_DIET_DRY.VISITS +
        +processedOrder["WEDNESDAY"].ROYAL_CANIN_SMALL.VISITS;

    var day5Visit = +processedOrder["THURSDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS +
        +processedOrder["THURSDAY"].NUTRO_ULTRA_LARGE_BREED.VISITS +
        +processedOrder["THURSDAY"].HILLS_SCIENCE_DIET_DRY.VISITS +
        +processedOrder["THURSDAY"].ROYAL_CANIN_SMALL.VISITS;

    var day6Visit = +processedOrder["FRIDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS +
        +processedOrder["FRIDAY"].NUTRO_ULTRA_LARGE_BREED.VISITS +
        +processedOrder["FRIDAY"].HILLS_SCIENCE_DIET_DRY.VISITS +
        +processedOrder["FRIDAY"].ROYAL_CANIN_SMALL.VISITS;

    var day7Visit = +processedOrder["SATURDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS +
        +processedOrder["SATURDAY"].NUTRO_ULTRA_LARGE_BREED.VISITS +
        +processedOrder["SATURDAY"].HILLS_SCIENCE_DIET_DRY.VISITS +
        +processedOrder["SATURDAY"].ROYAL_CANIN_SMALL.VISITS;

    var values = [day1Visit, day2Visit, day3Visit, day4Visit, day5Visit, day6Visit, day7Visit];
    var color = ["red", "green", "white", "blue", "violet", "orange", "yellow"]
    new Chart("myCustomerVisitChart", {
        type: "line",
        data: {
            labels: xReportValues,
            datasets: [{
                data: values,
                borderColor: "blue",
                fill: true,
                label: "PEOPLE VISITED THE STORE"
            }]
        },
        options: {
            title: {
                display: true,
                text: "VISIT REPORT"
            },
            legend: {
                display: true
            }
        }
    });
    // KILO PER WEEK
    var a = +processedOrder["SUNDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO +
        +processedOrder["MONDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO +
        +processedOrder["TUESDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO +
        +processedOrder["WEDNESDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO +
        +processedOrder["THURSDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO +
        +processedOrder["FRIDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO +
        +processedOrder["SATURDAY"].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO;

    var b = +processedOrder["SUNDAY"].ROYAL_CANIN_SMALL.KILO +
        +processedOrder["MONDAY"].ROYAL_CANIN_SMALL.KILO +
        +processedOrder["TUESDAY"].ROYAL_CANIN_SMALL.KILO +
        +processedOrder["WEDNESDAY"].ROYAL_CANIN_SMALL.KILO +
        +processedOrder["THURSDAY"].ROYAL_CANIN_SMALL.KILO +
        +processedOrder["FRIDAY"].ROYAL_CANIN_SMALL.KILO +
        +processedOrder["SATURDAY"].ROYAL_CANIN_SMALL.KILO;

    var c = +processedOrder["SUNDAY"].HILLS_SCIENCE_DIET_DRY.KILO +
        +processedOrder["MONDAY"].HILLS_SCIENCE_DIET_DRY.KILO +
        +processedOrder["TUESDAY"].HILLS_SCIENCE_DIET_DRY.KILO +
        +processedOrder["WEDNESDAY"].HILLS_SCIENCE_DIET_DRY.KILO +
        +processedOrder["THURSDAY"].HILLS_SCIENCE_DIET_DRY.KILO +
        +processedOrder["FRIDAY"].HILLS_SCIENCE_DIET_DRY.KILO +
        +processedOrder["SATURDAY"].HILLS_SCIENCE_DIET_DRY.KILO;

    var d = +processedOrder["SUNDAY"].NUTRO_ULTRA_LARGE_BREED.KILO +
        +processedOrder["MONDAY"].NUTRO_ULTRA_LARGE_BREED.KILO +
        +processedOrder["TUESDAY"].NUTRO_ULTRA_LARGE_BREED.KILO +
        +processedOrder["WEDNESDAY"].NUTRO_ULTRA_LARGE_BREED.KILO +
        +processedOrder["THURSDAY"].NUTRO_ULTRA_LARGE_BREED.KILO +
        +processedOrder["FRIDAY"].NUTRO_ULTRA_LARGE_BREED.KILO +
        +processedOrder["SATURDAY"].NUTRO_ULTRA_LARGE_BREED.KILO;

    var xValues = ["PURINA", "ROYAL", "HILLS", "NUTRO"];
    var colorKilo = ["red", "green", "white", "blue"]
    var yValues = [a, b, c, d];
    new Chart("getOrderKiloWeekChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: colorKilo,
                borderColor: "#304D63",
                data: yValues,
                label: "KILO"
            }]
        },
        options: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: "AMOUNT OF DOG FOODS TO BE ORDERED FOR NEXT WEEK (KG)"
            }
        }
    });

}
