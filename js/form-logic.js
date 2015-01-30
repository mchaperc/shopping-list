//Global Variables

var list = [], total = 0;

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
		window['item' + $('#item').val()] = new itemObj();
		formClear();
	}
}

//Validation of Enter Key

$(document).keypress(function(e) {
	var code = e.keyCode;
	if (code == '13') {
		formValid();
		itemCheck();
		remItem();
	}
});

//Clear form fields after click or enter

function formClear() {
	$('#item').val('');
	$('#qty').val('');
	$('#price').val('');
	$('#item').focus();
}

//Validation of Click to Add

$('.fa-plus-circle').on('click', function() {
	formValid();
	itemCheck();
	remItem();
});

//Creating an Item Object

function itemObj(item) {
	this.name = $('#item').val();
	this.price = $('#price').val();
	this.quantity = $('#qty').val();
	list.push(this);
	// for (var i = 0; i < list.length; i++) {
	// 	alert(list[i].name);
	// }
	addItem();
}

//Adding Item to List
	
function addItem() {
	itemTotals();
	$('.list-items').append('<p>(' + list[(list.length - 1)].quantity + ') ' + list[(list.length - 1)].name + '</p>');
	$('.list-items').children().addClass('listing');
}

//Totaling the list items' price

function itemTotals() {
	total = 0;
	for (var i = 0; i < list.length; i++) {
		if (list[i].quantity === "") {
			list[i].quantity = 1;
		}
		total += (list[i].price * list[i].quantity);
	}
	total = total * 1.06;
	total = total.toFixed(2);
	$('.actual-total').text('$' + total);
}

//Check Items when they're purchased

function itemCheck() {
	$('.listing').on('click', function() {
		$(this).toggleClass('highlight');
	})
}

//Remove highlighted items

function remItem() {
	$('.fa-trash').on('click', function() {
		$('.highlight').remove();
	})
}