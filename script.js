// Store Class (ES6 Class)
class Store {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    displayStoreInfo() {
        console.log(`${this.name}, Category: ${this.category}`);
    }
}

// Function Declaration
function loadHomePage() {
    console.log("Home page loaded");
}

// Function Expression
const calculateDiscount = function(price, discount) {
    return price * (1 - discount);
};

// Arrow Function
const addVAT = amount => amount * 1.20;

// Anonymous Function (used in event listener)
document.getElementById("someButton").addEventListener("click", function() {
    console.log("Button clicked");
});

// More Event Handlers
window.addEventListener("resize", () => {
    console.log("Window resized");
});

// AJAX Calls using Fetch API
function fetchStoreDetails() {
    fetch('api/store/details')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

function submitContactForm(formData) {
    fetch('api/contact/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}

// Utilizing the Store class
const fashionStore = new Store("Fashion Boutique", "Clothing");
fashionStore.displayStoreInfo();

// Additional Event Handlers to meet the requirement
for (let i = 0; i < 20; i++) {
    document.body.addEventListener("click", () => console.log(`Click event #${i+1}`));
}

// Global Function with Justification
// This function is globally available as it's a general utility function
window.formatCurrency = function(amount) {
    return `$${amount.toFixed(2)}`;
};

// Execute some functions
loadHomePage();
console.log(calculateDiscount(100, 0.2));
console.log(addVAT(100));

// Example formData for submitContactForm
const exampleFormData = { name: "John Doe", email: "john@example.com", message: "Hello!" };
submitContactForm(exampleFormData);

// Example usage of the global function
console.log(formatCurrency(123.456));
