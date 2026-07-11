const filters = {
  category: "electronics",
  maxPrice: "500",
  brand: "Samsung",
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

// Build query string
const params = new URLSearchParams(filters);

const url = `https://shop.com/products?${params.toString()}`;

print("Full URL:");
print(url);

// Parse query string
const parsedParams = new URLSearchParams(params.toString());

print("\nFilters:");

for (const [key, value] of parsedParams.entries()) {
  print(`${key}: ${value}`);
}

// Check maxPrice
if (parsedParams.has("maxPrice")) {
  print(`Price filter is active: PKR ${parsedParams.get("maxPrice")}`);
}