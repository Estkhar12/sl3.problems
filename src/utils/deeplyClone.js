function deepClone(obj, obj2) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }
  
  // let obj2 = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj2[key] = deepClone(obj[key]);
    }
  }
  return obj2;
}

// const obj = {
//   name: "Rohit",
//   age: 23,
//   address: {
//     vill: "Beldarwa",
//     post: "Adapur",
//   },
// };

// const obj2 = deepClone(obj);
// obj2.address.post = "Auraiya";
// obj2.address.vill = "yamunapur";
// console.log(obj);
// console.log(obj2);

export default deepClone;
