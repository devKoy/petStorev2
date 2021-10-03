var modal = document.getElementById("myModal");
const btns = document.querySelectorAll(".food_buton");
var span = document.getElementsByClassName("close")[0];
var buy_button = document.getElementById("modalBuy");
var inputKilo = document.getElementById("getOrderKilo")
var cash = document.getElementById("modalCash");
var change = document.getElementById("modalChange")
var amount = document.getElementById("modalAmount")
var orderedKilo = 0;
var isPassed = "no";
var formatter = new Intl.NumberFormat('en-US', { 
style: 'currency', currency: 'Php',
 });
var amounterist = 0;
btns.forEach(element => {
    element.addEventListener("click", function () {
        modal.style.display = "block";
        processOrder(element.getAttribute("id"));
    });
});

span.onclick = function () {
    modal.style.display = "none";
    document.getElementById("getOrderKilo").value = "";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("getOrderKilo").value = "";
    }
}

buy_button.addEventListener("click", function () {
    modal.style.display = "none";  
    			if(isPassed == "yes"){
    						cash.value = "";
    						change.value = "";
    						amount.value = "";
    						inputKilo.value = "";
    						saveDataSet();
    			}else{
    						alert("Please just please complete the form. Thank you!");
    						cash.value = "";
    						change.value = "";
    						amount.value = "";
    						inputKilo.value = "";
    			}
        

});

inputKilo.addEventListener('input', function() {  
			orderedKilo = +inputKilo.value;
			amounterist = +orderPrice * +orderedKilo;
			var formatted = formatter.format(amounterist);
	  amount.value = formatted;
})

cash.addEventListener('input', function() {
			var cashAmount = +cash.value;
			var amountfinal = +amounterist;
			if(cashAmount < amountfinal) {
						amount.style.color = "red";
						change.value = "INSUFFICIENT"
						isPassed = "no";
			}else{
						amount.style.color = "gray";//passed
						var changerist = +cashAmount - +amountfinal;
						changerist = formatter.format(changerist);
						change.value = changerist;
						isPassed = "yes";
			}
})