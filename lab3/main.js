// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// On loading, initializes the product list and opens client information.
function start(){
	populateListProductChoices('displayProduct');
	openInfo(event, 'Client');
}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
	var s2 = document.getElementById(slct2);
    var vegetarianBox = document.getElementById('vegetarian');
	var glutenfreeBox = document.getElementById('glutenfree');
	var organicBox = document.getElementById('organic');
	var lactosefreeBox = document.getElementById('lactosefree');
	var nutsfreeBox = document.getElementById('nutsfree');
	var veg = vegetarianBox.checked;
	var gf = glutenfreeBox.checked;
	var org = organicBox.checked;
	var lf = lactosefreeBox.checked;
	var nf = nutsfreeBox.checked;
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, veg, gf, org, lf, nf);

	// Source Code: https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
	optionArray.sort(function(a,b){return a.price - b.price})

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var product = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = product;
		label.appendChild(document.createTextNode(product.name + " - $" + product.price));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	var checkout = document.getElementById('checkout');
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You added the following items to your cart: ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
			checkout.disabled = false;
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Your total price is $" + getTotalPrice(chosenProducts)));
		
}

function rld(){
	location.reload();
}