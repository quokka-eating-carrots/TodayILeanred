function solution(nums) {
  let getPocketMon = nums.length / 2;
  let map = new Map();
  for (let x of nums) {
    map.set(x, map.get(x) + 1 || 1);
  }
  return map.size > getPocketMon ? getPocketMon : map.size;
}
