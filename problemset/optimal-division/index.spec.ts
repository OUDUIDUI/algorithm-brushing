import { describe, expect, it } from 'vitest'
import { optimalDivision } from '.'
// need refactor
describe('最优除法', () => {
  testCase(optimalDivision)
})

function testCase(fn: (nums: number[]) => string) {
  it('示例一', () => {
    const nums = [1000, 100, 10, 2]
    const expected = '1000/(100/10/2)'
    expect(fn(nums)).toBe(expected)
  })
}