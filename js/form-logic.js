//Global List Variable

var list = [];

//Autofocus on item

$(document).ready(function() {
	$('#item').focus();
})

//Validation of Item Names

function formValid() {
	var itemName = $('#item').val();
	if (itemName === "" || itemName.toLowerCase() == "item name...") {
		$('#required').show();
		$('#item').focus();
	} else {
		if( $('#item').css('display') != 'none' ) {
			$('#required').hide();
		}
		itemObj();
		formClear();
	}
}

//Validation of Enter Key

$(document).keypress(function(e) {
	var code = e.keyCode;
	if (code == '13') {
		formValid();
	}
});

//Clear form fields after click or enter

function formClear() {
	$('#item').val('');
	$('#qty').val('1');
	$('#price').val('0');
	$('#item').focus();
}

//Validation of Click to Add

$('.fa').on('click', function(e) {
	formValid();
});

// //Creating an Item Object

function itemObj() {
	this.name = $('#item').val();
	this.price = $('#price').val();
	this.quantity = $('#qty').val();
	list.push(this);
	addItem();
}

//Adding Item to List
	
function addItem() {
	$('.list-items').append('<p>(' + list[(list.length - 1)].quantity + ') ' + list[(list.length - 1)].name + '</p>');
	$('.list-items').children().addClass('listing');
}
