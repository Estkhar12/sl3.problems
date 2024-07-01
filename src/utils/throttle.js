function throttle(fn, delay) {
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




// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return func(...args);
//   };
// }

 export default throttle;



// Example usage:
// const throttledLog = throttle((data) => console.log(data), 1000);

// throttledLog("Message 1"); // This will be logged immediately
// throttledLog("Message 2"); // This will be ignored because it's within the 1000ms delay
// setTimeout(() => throttledLog("Message 3"), 1100); // This will be logged after 1100ms

// export default throttle;
