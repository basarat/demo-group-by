const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const traditional = inventory.reduce((acc, current) => {
  if (acc[current.type]) acc[current.type].push(current);
  else acc[current.type] = [current];
  return acc;
}, Object.create(null));

const result = Object.groupBy(
  inventory,
  (item) => item.type
);

console.log(result);