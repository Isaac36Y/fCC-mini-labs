/* INVENTORY manager */

const inventory = [
  
]

const findProductIndex = (prod) => {
  return inventory.findIndex(obj => obj.name === prod.toLowerCase());
}

const addProduct = (object) => {
    let productExist = findProductIndex(object.name)
    if (productExist + 1) {
      inventory[productExist].quantity += object.quantity
      console.log(`${inventory[productExist].name.toLowerCase()} quantity updated`)
      return
    }
    if (!productExist + 1) {  
      inventory.push({
        name: object.name.toLowerCase(),
        quantity: object.quantity
      }) 
      console.log(`${object.name.toLowerCase()} added to inventory`)
      return
    }
}