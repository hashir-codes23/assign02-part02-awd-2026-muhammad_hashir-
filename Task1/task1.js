const inventory = {
  Laptop: 15,
  Mouse: 42,
  Keyboard: 28,
  Monitor: 9,
  Headphones: 33,
};

function print(message) {
  console.log(message);
  if (typeof document !== "undefined") {
    const output = document.getElementById("output");
    if (output) {
      output.textContent += `${message}\n`;
    }
  }
}

// 1. List all product names
print("Product Names:");
print(Object.keys(inventory));

// 2. Calculate total stock
const totalStock = Object.values(inventory).reduce(
  (total, stock) => total + stock,
  0
);

print("\nTotal Stock: " + totalStock);

// 3. Print each product
print("\nInventory:");
Object.entries(inventory).forEach(([product, stock]) => {
  print(`${product}: ${stock} units in stock`);
});

// 4. Add a new product
inventory.Webcam = 18;

print("\nUpdated Inventory:");
Object.entries(inventory).forEach(([product, stock]) => {
  print(`${product}: ${stock} units in stock`);
});