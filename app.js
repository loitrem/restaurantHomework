let drinks = ["Coke", "Dr Pepper", "Iced Tea", "Lemonaid"];

let chicken = ["Fried Chicken Breast", "Chicken Fingers", "Rotisserie Chicken"];

let dessert = ["Apple Pie", "Cheese Cake", "Iced Cream"];

let locations = ["Pittsburgh", "Huston", "New York"];
   

 let list;
 let drinksCheck = false;
 let chickenCheck = false;
 let dessertCheck = false;
 let listDrinks = document.getElementById("listDrinks");
 let listChicken = document.getElementById("listChicken");
 let listDessert = document.getElementById("listDessert");
 let listLocations = document.getElementById("listLocations");
listItems = (choice) => {
    // script from geeksforgeeks but slightly modified

    if (choice === "drinks"){
        console.log(drinks);
        if (drinksCheck ===false){

            drinks.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = item;
            listDrinks.appendChild(div);
            });
            drinksCheck = true;
        }
    } else if (choice === "chicken"){
        console.log(chicken);
        if (chickenCheck ===false){

            chicken.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = item;
            listChicken.appendChild(div);
            });
            chickenCheck=true;
        }
    } else if (choice === "dessert"){
        console.log(dessert);
        if (dessertCheck===false){

            dessert.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = item;
            listDessert.appendChild(div);
            });
            dessertCheck = true;
        }
    }
    else if (choice === "locations"){
        console.log(locations);
   
        locations.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = item;
            listLocations.appendChild(div);
        });
    }
    

    
  }
