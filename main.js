console.log("yah");
let nums = [2, 7, 11, 15];
let target = 9;
// function find(x) {
//   for (i = 0; i < nums.length; i++) {
//     if (nums[x] + nums[i] == target && x != i) {
//       console.log(x, i);
//       console.log(nums[x], nums[i]);
//       return "epic";
//     } else {
//       x++;
//       console.log(x);
//     }
//   }
// }
let x = 0;
let i = 0;
function epic() {
  if (nums[x] + nums[i] == target && x != i) {
    console.log(x, i);
    console.log(nums[x], nums[i]);
    return "epic";
  } else {
    if (x <= nums.length) {
      x++;
      epic();
    } else {
      x = 0;
      i++;
      epic();
    }
  }
}
