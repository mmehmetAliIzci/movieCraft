module.exports = {
  preset: "react-native",
  globals: {
    "ts-jest": {
      tsconfig: { module: "commonjs" },
    },
  },
  transformIgnorePatterns: ["node_modules/(?!.*react-native)"],
  transform: {
    "node_modules.*\\.jsx?$": "react-native/jest/preprocessor.js",
    "\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  automock: false,
  setupFiles: ["./setupJest.js"],
};
