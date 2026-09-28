// John Maher
// Exercise 1:

console.log("These are what I \"ordered\"\n1. My son's watch\n2. 12 cans of soda\n3. Some chips -\n\tLays\n\tPringles\n\nYes. The order id is \\5412\\")

// Exercise 2:
const formatCurrency = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

console.log(`125 divided by pi is approximately ${125 / Math.PI}\n`);
console.log(`The current world population is about ${7e9}`);
console.log(`Let's say 7.139% of them are financially stable\n`);
console.log(`If 499,730,000 each donate $0.01 a day\nimagine how much money we can collect!`)
console.log(`499,730,000 * $0.01 would be ${formatCurrency.format(499730000 * 0.01)} a day, and ${formatCurrency.format(499730000 * 0.01 * 365)} a year!`)


/*

Exercise 3:

1. console.log("Apple" > "orange")   = false
2. console.log("Apple" > "apple")    = false
3. console.log("Apple" > "APP")      = true
4. console.log("ABCD" == "ABCD")     = true
5. console.log("abcd" === "dcba")    = false
6. console.log("2" == 2)             = true
7. console.log("2" === 2)            = false
8. console.log("12" == 21)           = false
9. console.log("Two" == 2)           = false
10. console.log(null == null)        = true
11. console.log(null == undefined)   = true

*/