// Mock the global fetch function
global.fetch = jest.fn();

// Clear all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});