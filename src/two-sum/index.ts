/**
 * 暴力解法
 * @desc 时间复杂度：O(N^2)，空间复杂度：O(1)
 * @param nums
 * @param target
 * @return number[]
 */
export function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];
}

/**
 * 哈希表
 * @desc 时间复杂度：O(N)，空间复杂度：O(N)
 * @param nums
 * @param target
 * @return number[]
 */
export function twoSum2(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i: number = 0; i < nums.length; i++) {
        const diff: number = target - nums[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }else {
            map.set(nums[i], i);
        }
    }
    return [];
}
