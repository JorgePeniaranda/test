module.exports = {
  extends: 'love',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2015 
  },
  ignorePatterns: ['.eslintrc.js'],
}
