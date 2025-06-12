// Menu Data
const entrees = [
    {
        name: "Cheese Pasta",
        price: 3.00
    },
    {
        name: "Corn Dogs",
        price: 3.50
    },
    {
        name: "Classic Cheeseburger",
        price: 12.99
    },
    {
        name: "Grilled Chicken Salad",
        price: 11.50
    },
    {
        name: "Spicy Beef Tacos (3)",
        price: 9.75
    },
    {
        name: "Vegetable Stir-Fry",
        price: 10.00
    },
    {
        name: "Fish and Chips",
        price: 14.25
    },
    {
        name: "Mushroom Risotto",
        price: 13.00
    },
    {
        name: "BBQ Pulled Pork Sandwich",
        price: 10.50
    }
];

const mains = [
    {
        name: "Pan-Seared Salmon with Asparagus",
        price: 24.50
    },
    {
        name: "Ribeye Steak (10oz) with Garlic Mash",
        price: 32.00
    },
    {
        name: "Roasted Vegetable Lasagna",
        price: 18.75
    },
    {
        name: "Chicken Alfredo Fettuccine",
        price: 20.25
    },
    {
        name: "Shrimp Scampi with Linguine",
        price: 21.99
    },
    {
        name: "Duck Confit with Cherry Reduction",
        price: 28.00
    },
    {
        name: "Portobello Mushroom Burger (Veg)",
        price: 16.00
    },
    {
        name: "Slow-Cooked Lamb Shank",
        price: 26.50
    }
];

const desserts = [
    {
        name: "New York Cheesecake",
        price: 8.50
    },
    {
        name: "Chocolate Lava Cake",
        price: 9.00
    },
    {
        name: "Apple Crumble with Vanilla Ice Cream",
        price: 7.75
    },
    {
        name: "Tiramisu",
        price: 9.25
    },
    {
        name: "Fresh Fruit Platter",
        price: 6.50
    },
    {
        name: "Crème Brûlée",
        price: 8.00
    }
];

// Hepler function to iterate through dish arrays and append
function renderDishes(arrayOfDishObjects, sectionToAppendTo) {
    for (let dish of arrayOfDishObjects) {
        // Create div for flex display of menu items
        const dishDiv = document.createElement("div");
        dishDiv.classList.add("dish-div");

        // Add text content for dish properties
        const dishName = document.createElement("p");
        dishName.textContent = dish.name;
        dishDiv.appendChild(dishName);

        const dishPrice = document.createElement("p");
        dishPrice.textContent = `$${dish.price.toFixed(2)}`;
        dishDiv.appendChild(dishPrice);

        // Append div to section
        sectionToAppendTo.appendChild(dishDiv);
    }
}

export const menuLoad = (contentDiv) => {
     // Ensure content section is clear before loading new content
    if (contentDiv) {
        contentDiv.innerHTML = "";
    }

    // Create Section for Entrees
    const entreeSection = document.createElement("section");

    const entreeHeading  = document.createElement("h2");
    entreeHeading.textContent = "Entrees";
    entreeSection.appendChild(entreeHeading);

    renderDishes(entrees, entreeSection);

    contentDiv.appendChild(entreeSection);

    // Main Section Heading
    const mainSection = document.createElement("section");

    const mainHeading  = document.createElement("h2");
    mainHeading.textContent = "Mains";
    mainSection.appendChild(mainHeading);

    renderDishes(mains, mainSection);

    contentDiv.appendChild(mainSection);

    // Dessert Section Heading
    const dessertSection = document.createElement("section");

    const dessertHeading  = document.createElement("h2");
    dessertHeading.textContent = "Desserts";
    dessertSection.appendChild(dessertHeading);

    renderDishes(desserts, dessertSection);

    contentDiv.appendChild(dessertSection);
}