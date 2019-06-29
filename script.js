var headingElement = document.querySelector("#main-heading");

headingElement.innerHTML = "Hello, world!";
 
var headingElement=document.querySelector("#hello-container");
headingElement.innerHTML="Hello, World";

var greeting = "hello, world";
document.querySelector("#hello-container").innerHTML=greeting;

var currentSpecial = {
    name: "Fried Green Tomato BLT",
    description: "So good you'll cry",
    price: 9.99
  }
  
  We'll use the object to build up an HTML string 
  var htmlString = `
    <h3 class="dish-name">${currentSpecial.name}</h3>
    <p class="dish-description">
      ${currentSpecial.description}
    </p>
    <h5 class= "dish-price">${currentSpecial.price}</h5>
  `
  Then we'll put the html string in the #daily-special div
  document.querySelector("#daily-special").innerHTML = htmlString;

  var menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]
 

  for(var i = 0; i < menuItemsArray.length; i++){
    // target the menu items container and add a bullet for each item in the array
    document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`
  
  }

  var choresArray = ["dishes", "sweep", "cut grass", "cook"];

  for(var i = 0; i < choresArray.length; i++){
     
    document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
    }

    var movieObject = {
        title: "Star Wars: A New Hope",
        genre: "Science Fiction",
        releaseDate: "May 25, 1977",
          }
    
          for(var i = 0; i <movieObject.length; i++){
          document.querySelector("#movieObject").innerHTML += `<li>${movieObject[i]}</li>`
     }
    
    document.querySelector("#title").innerHTML = `${movieObject.title}`
    document.querySelector("#genre").innerHTML = `${movieObject.genre}`
    document.querySelector("#releaseDate").innerHTML =
    `${movieObject.releaseDate}`


    var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

    
  for(var i = 0; i < downtownRestaurants.length; i++){
    // target the menu items container and add a bullet for each item in the array
    document.querySelector("#restaurantsList").innerHTML += `<li>${downtownRestaurants[i]}</li>`
    }


    var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"];  

    for(var i = 0; i < sandwhichToppings.length; i++){
        // target the menu items container and add a bullet for each item in the array
        document.querySelector("#sandwhich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
        }


 var jenniferObject = {

  firstName: "jennifer",
  lastName: "johnson",
  favoriteFood:["pizza", "guacomole" , "chocolate"],
 }
 document.querySelector("#firstName").innerHTML += `<li>${jenniferObject.firstName}</li>`
 document.querySelector("#lastName").innerHTML += `<li>${jenniferObject.lastName}</li>` 

for(var i = 0; i < jenniferObject.favoriteFood.length; i++){
               document.querySelector("#jenniferContainer").innerHTML += `<li>${jenniferObject.favoriteFood[i]}</li>`

        
      
}