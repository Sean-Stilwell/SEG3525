// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutFree: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		lactoseFree: true,
		nutFree: true,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		lactoseFree: true,
		nutFree: true,
		price: 10.49
	},
	{
		name: '1% Milk',
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: false,
		nutFree: true,
		price: 2.99
	},
	{
		name: 'Blueberries',
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutFree: true,
		price: 4.99
	},
	{
		name: 'Muffins',
		vegetarian: true,
		glutenFree: false,
		organic: false,
		lactoseFree: true,
		nutFree: true,
		price: 4.99
	},
	{
		name: 'Yogurt',
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactoseFree: false,
		nutFree: true,
		price: 3.99
	},
	{
		name: 'Coca Cola',
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactoseFree: true,
		nutFree: true,
		price: 0.99
	},
	{
		name: 'Chicken Breasts',
		vegetarian: false,
		glutenFree: true,
		organic: false,
		lactoseFree: true,
		nutFree: true,
		price: 12.99
	},
	{
		name: 'Tomatoes',
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutFree: true,
		price: 3.49
	},
	{
		name: 'Frozen Pizza',
		vegetarian: false,
		glutenFree: false,
		organic: false,
		lactoseFree: false,
		nutFree: true,
		price: 5.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods, veg, gf, org, lf, nf) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		let breaksRestriction = false; // Indicates whether a product is valid for the customer

		// If the customer has a concern and that concern is not met by a product,
		// we set breaksRestriction to true so it won't be displayed.
		if (veg && (prods[i].vegetarian == false)){
			breaksRestriction = true;
		}
		if (gf && (prods[i].glutenFree == false)){
			breaksRestriction = true;
		}
		if (org && (prods[i].organic == false)){
			breaksRestriction = true;
		}
		if (lf && (prods[i].lactoseFree == false)){
			breaksRestriction = true;
		}
		if (nf && (prods[i].nutFree == false)){
			breaksRestriction = true;
		}

		if (!breaksRestriction){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}