<!-- function throttle(fn, delay) {
    let isThrottling = false;

    return function (...args) {
        if (!isThrottling) {
            fn(...args);
            isThrottling = true;
            setTimeout(() => {
                isThrottling = false;
            }, delay);
        }
    };
}

// Example usage:
const throttledLog = throttle((data) => console.log(data), 1000);

throttledLog("Message 1"); // This will be logged immediately
throttledLog("Message 2"); // This will be ignored because it's within the 1000ms delay
setTimeout(() => throttledLog("Message 3"), 1100); // This will be logged after 1100ms

// function flattenArray(arr) {
//     // Initialize an empty array to hold the flattened result
//     let result = [];

//     // Iterate over each element in the input array
//     arr.forEach((element) => {
//         // If the element is an array, recursively flatten it and concatenate the result
//         if (Array.isArray(element)) {
//             result = result.concat(flattenArray(element));
//         } else {
//             // If the element is not an array, add it directly to the result
//             result.push(element);
//         }
//     });

//     return result;
// }

// Example usage:
// let nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
// let flatArray = flattenArray(nestedArray);
// console.log(flatArray);

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 2],
// ];
// console.log(arr);

// const newArr = arr.flatMap((subarray) => subarray.map((item) => item));
// console.log(newArr);

// const newArr = arr.flat(3);
// console.log(newArr);

// const obj = {
//     name: "Afzal",
//     email: "afzal@gmail.com",
//     address: {
//         locality: "jp nagar",
//         city: "Bengaluru",
//     },
// };

// const obj2 = JSON.parse(JSON.stringify(obj));
// obj2.address.locality = "RXL";
// console.log("obj:", obj);
// console.log("obj2: ", obj2);

// shallow copy
// const obj = {
//     name: "Afzal",
//     email: "afzal@gmail.com",
//     address: {
//         locality: "jp nagar",
//         city: "Bengaluru",
//     },
// };

// // const obj2 = { ...obj };
// const obj2 = obj;
// obj2.address.locality = "RXL";
// console.log("obj:", obj);
// console.log("obj2: ", obj2); -->