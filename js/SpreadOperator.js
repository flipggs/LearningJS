const myPackage = ['cheese', 'eggs', 'milk', 'bread'];
console.log("\n");
console.log("SpreadOperator - parametros variaveis");
console.log("const myPackage = ['cheese', 'eggs', 'milk', 'bread'];")
console.log("...myPackage", ...myPackage);

console.log("function printPackageContents(...items) {}");
printPackageContents('cheese', 'eggs', 'milk', 'bread');

function printPackageContents(...items) {
    for (const item of items){
        console.log(item);
    }
}