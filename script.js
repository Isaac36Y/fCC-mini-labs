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

/* UNITE UNIQUE */

const uniteUnique = (...restArr) => {
  let newArr = []
  for (let array of restArr) {
    for (let i = 0; i < array.length; i++)
    if (!newArr.includes(array[i])) {
      newArr.push(array[i])
    }
  }
  return newArr
  /* 
  logging(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1], [3, 5]))
  returns([ 1, 3, 2, 5, 4 ])
  */
}

/* RANDOM PASSWORD Math.floor, Math.random */

const generatePassword = (num) => {
  let password = "";
  let validChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");
  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * 72)
    password += validChar[randomIndex]
  }
  return password
} 

/* SUMALL  Math.min, Math.max*/

const sumAll = (arr) => {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;
  for (let i = max; i >= min; i--) {
    sum += i
  }
  return sum
}

/* DNA Pair Generater .map() */

const pairElement = (str) => {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  return [...str].map(letter => [letter, pairs[letter]])
}