// creating my objects
const products = [
    {sku:"P-0123", name:"Phone", category:"Electronics", price:899.99, inventory:20},
    {sku:"B-0124", name:"Soccer Ball", category:"Sports", price:129.99, inventory:45},
    {sku:"W-0125", name:"Washing Machine", category:"Electronics", price:1299.99, inventory:15},
    {sku:"C-0126", name:"Pokemon Cards", category:"Toys" ,price:19.99, inventory:60},
    {sku:"S-0127", name:"T-Shirt", category:"Clothing", price:15.99, inventory:80},
];

//attempting the switch statement
switch (products.category) {
    case "Phone":
    case "Washing Machine":
        console.log("Phones and Washine Machines are now 20% off");
        break;
    case "Soccer Ball":
        console.log("Soccer balls are now 30% off!");
        break;
    case "Pokemon Cards":
        console.log("Pokemon cards are now 10% off!");
        break;
    case "T-Shirt":
    console.log("T-shirts are now 50% off");
        break;

    default:
        console.log(`Sorry we are out of ${products.category}`);
        break;
}
