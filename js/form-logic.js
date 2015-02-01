(function() {
	var list = [], total = 0, itemIndex = 0;

//Autofocus on item

$(document).ready(function() {
	$('#item').focus();
	itemCheck();
	remItem();
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
		list.push(new Item());
	}
}

//Validation of Enter Key

$(document).keypress(function(e) {
	var code = e.keyCode;
	if (code == '13') {
		formValid();
		// itemCheck();
		addItem();
		formClear();
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
	// itemCheck();
	addItem();
	formClear();
});

//Creating an Item Object

function Item(item) {
	this.name = $('#item').val();
	this.price = $('#price').val();
	this.quantity = $('#qty').val();
}

//Adding Item to List
	
function addItem() {
	itemTotals();
	$('.list-items').append('<p data-id="' + itemIndex + '">(' + list[(list.length - 1)].quantity + ') ' + list[(list.length - 1)].name + '</p>');
	itemIndex++;
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
	$('.list-items').on('click', '.listing', function() {
		$(this).toggleClass('highlight');
	});
}

//Remove highlighted items

function remItem() {
	$('.fa-trash').on('click', function() {
		for (var j = 0; j < $('.highlight').length; j++) {
			var id = $(this).data('id');
			list.splice(id, 1);
		}
		$('.highlight').remove();
		itemTotals();
	})
}
}())