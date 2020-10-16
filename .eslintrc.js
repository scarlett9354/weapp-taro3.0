module.exports = {
  "extends": ["taro/react"],
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }], // 禁止出现未使用过的变量
    "react/no-unused-state": "warn", // 避免定义未使用的state
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // 限制包含JSX的文件扩展名
    "quotes": ["error", "single", { "allowTemplateLiterals": true }], // 强制使用一致的反勾号、双引号或单引号
    "space-infix-ops": ["error", {"int32Hint": false}], // 需要在中缀操作符前后加空格
    "indent": ["error", 2, { "SwitchCase": 1 }], // 缩进风格
    "eqeqeq": ["error", "always"], // 要求使用 === 和 !==
    "no-empty-function": "error", // 禁止定义多余的空函数
    "no-floating-decimal": "error", // 禁止出现不标准的浮动的小数（如‘.5’‘2.’‘-.7’）
    "no-multi-spaces": "error", // 不允许多个空格，一个足矣
    "no-redeclare": "error", // 禁止重复声明变量
    "require-await": "error", // 在async函数中必须要有await
    "array-bracket-spacing": ["error", "never"], // 禁止在数组方括号开头或结尾使用空格
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // 强制在代码块中使用一致的大括号风格
    "comma-spacing": ["error", { "before": false, "after": true }], // 逗号前后的空格，前面不能有空格，后面必须有
    "key-spacing": ["error", { "beforeColon": false }], // 在对象属性中强制键和值之间的空格，冒号前不能有空格
    "lines-between-class-members": ["error", "always"], // 类成员之间必须有空行
    "no-unneeded-ternary": "error", // 当存在更简单的替代时，不允许三元运算符（一般都是取值为true/false时，禁止用三元）
    "no-whitespace-before-property": "error", // 不允许在属性的‘.’或‘[]’前使用空格，但是‘.’前可以有换行
    "object-curly-spacing": ["error", "always"], // 强制在大括号开头和结尾使用空格
    "semi":["error", "never"] // 禁止分号
  }
}
