test('First Test', () => {
  expect(true).toBeTruthy();
});

// Unit Tests: Tests one single functionality

// Integration Tests: Test things working together

// Mock Functions
const add = jest.fn(() => 3)

test('add', () => {
  expect(add(1,2)).toBe(3)
  expect(add).toHaveBeenCalledTimes(1)
  expect(add).toHaveBeenCalledWith(1,2)
})

