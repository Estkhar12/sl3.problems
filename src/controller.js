import  deeplyClone  from "./utils/deeplyClone.js";

export const deepClone = (req, res, next) => {
    console.log(req.body)
  const original = req.body;
  const result = deeplyClone(original);

  res.json(result);

};
