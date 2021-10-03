var order;
var weekdays = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
]
var productList = [
    "PURINA_PRO_PLAN_WITH_PROBIOTICS",
    "HILLS_SCIENCE_DIET_DRY",
    "NUTRO_ULTRA_LARGE_BREED",
    "ROYAL_CANIN_SMALL"
]
var buttonBuyCollection = {
    "button1": {
        orderImage: document.getElementsByClassName("food1Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food1Title")[0].innerText,
        foodtype: document.getElementsByClassName("food1Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food1Price span")[0].innerText
    },
    "button2": {
        orderImage: document.getElementsByClassName("food2Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food2Title")[0].innerText,
        foodtype: document.getElementsByClassName("food4Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food2Price span")[0].innerText
    },
    "button3": {
        orderImage: document.getElementsByClassName("food3Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food3Title")[0].innerText,
        foodtype: document.getElementsByClassName("food4Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food3Price span")[0].innerText
    },
    "button4": {
        orderImage: document.getElementsByClassName("food4Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food4Title")[0].innerText,
        foodtype: document.getElementsByClassName("food4Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food4Price span")[0].innerText
    }
}
var orderedKilo = 0;
var selectedDay = "";
var selectedProduct = "";
var orderPrice = 0;
var processedOrder = {
    "SUNDAY": {
        "PURINA_PRO_PLAN_WITH_PROBIOTICS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "HILLS_SCIENCE_DIET_DRY": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "NUTRO_ULTRA_LARGE_BREED": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "ROYAL_CANIN_SMALL": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "MONDAY": {
        "PURINA_PRO_PLAN_WITH_PROBIOTICS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "HILLS_SCIENCE_DIET_DRY": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "NUTRO_ULTRA_LARGE_BREED": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "ROYAL_CANIN_SMALL": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "TUESDAY": {
        "PURINA_PRO_PLAN_WITH_PROBIOTICS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "HILLS_SCIENCE_DIET_DRY": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "NUTRO_ULTRA_LARGE_BREED": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "ROYAL_CANIN_SMALL": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }

    },
    "WEDNESDAY": {
        "PURINA_PRO_PLAN_WITH_PROBIOTICS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "HILLS_SCIENCE_DIET_DRY": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "NUTRO_ULTRA_LARGE_BREED": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "ROYAL_CANIN_SMALL": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "THURSDAY": {
        "PURINA_PRO_PLAN_WITH_PROBIOTICS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "HILLS_SCIENCE_DIET_DRY": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "NUTRO_ULTRA_LARGE_BREED": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "ROYAL_CANIN_SMALL": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "FRIDAY": {
        "PURINA_PRO_PLAN_WITH_PROBIOTICS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "HILLS_SCIENCE_DIET_DRY": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "NUTRO_ULTRA_LARGE_BREED": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "ROYAL_CANIN_SMALL": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "SATURDAY": {
        "PURINA_PRO_PLAN_WITH_PROBIOTICS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "HILLS_SCIENCE_DIET_DRY": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "NUTRO_ULTRA_LARGE_BREED": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "ROYAL_CANIN_SMALL": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    }

}

function processOrder(button) {
    order = buttonBuyCollection[button];
     document.getElementById("modalImage").setAttribute("src", order.orderImage);
    selectedProduct = document.getElementById("modalTitle").innerText = order.foodTitle;
    document.getElementById("modalType").innerText = order.foodtype;
    orderPrice = document.getElementById("modalPrice").innerText = order.foodPrice;

}

function saveDataSet() {
    var getWeek = document.getElementById("weeks").selectedIndex;
    selectedDay = weekdays[getWeek]; //get selected day
    orderedKilo = document.getElementById("getOrderKilo").value; //get kilo
    orderPrice = +orderPrice * +orderedKilo // get price
    selectedProduct = selectedProduct.replace(/(\r\n|\n|\r)/gm, " ");
    selectedProduct = selectedProduct.replace(/ /g, "_");
    selectedProduct = selectedProduct.toUpperCase();

    // process to add the orders to the dataset object
    var ORDER_SUCCESS = false;
    if (selectedDay in processedOrder) {
        if (selectedProduct == productList[0]) {
            processedOrder[selectedDay].PURINA_PRO_PLAN_WITH_PROBIOTICS.KILO = orderedKilo;
            processedOrder[selectedDay].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS = +processedOrder[selectedDay].PURINA_PRO_PLAN_WITH_PROBIOTICS.VISITS + 1;
            processedOrder[selectedDay].PURINA_PRO_PLAN_WITH_PROBIOTICS.PRICE = orderPrice;
            ORDER_SUCCESS = true;
        } else if (selectedProduct == productList[1]) {
            processedOrder[selectedDay].HILLS_SCIENCE_DIET_DRY.KILO = orderedKilo;
            processedOrder[selectedDay].HILLS_SCIENCE_DIET_DRY.VISITS = +processedOrder[selectedDay].HILLS_SCIENCE_DIET_DRY.VISITS + 1;
            processedOrder[selectedDay].HILLS_SCIENCE_DIET_DRY.PRICE = orderPrice;
            ORDER_SUCCESS = true;
        } else if (selectedProduct == productList[2]) {
            processedOrder[selectedDay].NUTRO_ULTRA_LARGE_BREED.KILO = orderedKilo;
            processedOrder[selectedDay].NUTRO_ULTRA_LARGE_BREED.VISITS = +processedOrder[selectedDay].NUTRO_ULTRA_LARGE_BREED.VISITS + 1;
            processedOrder[selectedDay].NUTRO_ULTRA_LARGE_BREED.PRICE = orderPrice;
            ORDER_SUCCESS = true;
        } else if (selectedProduct == productList[3]) {
            processedOrder[selectedDay].ROYAL_CANIN_SMALL.KILO = orderedKilo;
            processedOrder[selectedDay].ROYAL_CANIN_SMALL.VISITS = +processedOrder[selectedDay].ROYAL_CANIN_SMALL.VISITS + 1;
            processedOrder[selectedDay].ROYAL_CANIN_SMALL.PRICE = orderPrice;
            ORDER_SUCCESS = true;
        }
        if (ORDER_SUCCESS) {
            alert("TRANSACTION COMPLETE");
        }
        document.getElementById("getOrderKilo").value = "";
        reProcess()
    } else {
        alert("TRANSACTION NOT PROCESSED, PLESE TRY AGAIN")
    }
    document.getElementById("getOrderKilo").value = "";
    reProcess()
}
