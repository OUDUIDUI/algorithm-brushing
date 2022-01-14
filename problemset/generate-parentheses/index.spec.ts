import { generateParenthesis } from './index';

describe('括号生成', () => {
  testCase(generateParenthesis);
});

function testCase(fn: (n: number) => string[]) {
  test('示例一', () => {
    const n = 3;
    const expected: string[] = [
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()'
    ];

    checkExpected(fn(n), expected);
  });

  test('示例二', () => {
    const n = 1;
    const expected: string[] = ['()'];

    checkExpected(fn(n), expected);
  });
}

function checkExpected(ans: string[], expected: string[]): void {
  expect(ans.length).toBe(expected.length);
  expect(ans.every((item) => expected.includes(item))).toBe(true);
}
