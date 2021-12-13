import {nextPermutation} from "./index";

describe('下一个排列', () => {
    describe('两遍扫描', () => {
        testCase(nextPermutation);
    })
});

function testCase(fn: Function) {
    test('示例一', () => {
        const nums: number[] = [1, 2, 3];
        const expected: number[] = [1, 3, 2];

        fn(nums);
        expect(nums).toEqual(expected);
    })

    test('示例二', () => {
        const nums: number[] = [3, 2, 1];
        const expected: number[] = [1, 2, 3];

        fn(nums);
        expect(nums).toEqual(expected);
    })

    test('示例三', () => {
        const nums: number[] = [1, 1, 5];
        const expected: number[] = [1, 5, 1];

        fn(nums);
        expect(nums).toEqual(expected);
    })

    test('示例四', () => {
        const nums: number[] = [1];
        const expected: number[] = [1];

        fn(nums);
        expect(nums).toEqual(expected);
    })
}