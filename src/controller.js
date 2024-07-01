import deeplyClone from "./utils/deeplyClone.js";
import flattenArray from "./utils/flatten.js";
import rotateMatrix90d from "./utils/rotateMatrix.js";
import throttle from "./utils/throttle.js";



export const deepClone = (req, res) => {
  const { original, clone } = req.body;
  const result = deeplyClone(original, clone);
  res.json(result);
};


export const flatArray = (req, res) => {
  const {original} = req.body;
  const result = flattenArray(original);
  console.log(flatArray)
  res.json({result: result});
};


export const throttleFun = (req, res) => {
  const {original} = req.body;
  const result = throttle(original);
  console.log(result)
  res.json(result);
};

export const rotateMatrix90 = (req, res) => {
  const{ matrix} = req.body;
  const result = rotateMatrix90d(matrix);
  console.log(result)
  res.json(result);
};


