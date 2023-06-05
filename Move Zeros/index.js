function moveZeroes(nums) {
  let i = 0; 

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }

  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }

  return nums;
}


//Example 1

const nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1));
// Output: [1, 3, 12, 0, 0]

//Example 2

const nums2 = [0];
console.log(moveZeroes(nums2));
// Output: [0]

