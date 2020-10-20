module.exports = {
  "extends": ["taro/react"],
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "react/no-unused-state": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "space-infix-ops": ["error", {"int32Hint": false}],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "eqeqeq": ["error", "always"],
    "no-empty-function": "error",
    "no-floating-decimal": "error",
    "no-multi-spaces": "error",
    "no-redeclare": "error",
    "require-await": "error",
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "key-spacing": ["error", { "beforeColon": false }],
    "lines-between-class-members": ["error", "always"],
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "semi":["error", "never"]
  }
}
