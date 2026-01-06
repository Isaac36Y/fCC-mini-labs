/* INVENTORY manager */

const inventory = [

]

const findProductIndex = (prod) => {
    return inventory.findIndex(obj => obj.name === prod.toLowerCase());
}

const addProduct = (object) => {
    let productExist = findProductIndex(object.name);
    if (productExist + 1) {
        inventory[productExist].quantity += object.quantity;
        console.log(`${inventory[productExist].name.toLowerCase()} quantity updated`);
        return
    }else if (!productExist + 1) {  
        inventory.push({
        name: object.name.toLowerCase(),
        quantity: object.quantity
        });
        console.log(`${object.name.toLowerCase()} added to inventory`);
        return
    }
}

const removeProduct = (name, quant) => {
    let findProduct = findProductIndex(name);
    let object = inventory[findProduct];
    if (findProduct === -1) {
        console.log(`${name.toLowerCase()} not found`)
    }else if (quant > object.quantity) {
        console.log(`Not enough ${object.name} available, remaining pieces: ${object.quantity}`);
    }else if (quant < object.quantity) {
        object.quantity -= quant;
        console.log(`Remaining ${object.name} pieces: ${object.quantity}`);
    }else if (object.quantity === quant) {
        inventory.splice(object, 1)
    }
    return
}