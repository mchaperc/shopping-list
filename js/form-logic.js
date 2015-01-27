//Global List Variable

var list = [];

//Validation of Item Names

function formValid() {
	var itemName = $('#item').val(), message = "Please enter an item";
	if (itemName === "" || itemName.toLowerCase() == "item name...") {
		alert(message);
	} else {
		alert(itemName);
	}
}

//Validation of Enter Key

$(document).keypress(function(e) {
	var code = e.keyCode;
	if (code == '13') {
		formValid();
	}
});

//Validation of Click to Add

$(document).on('click', function(e) {
	formValid();
});

//Assigning item to List