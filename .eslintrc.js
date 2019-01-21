module.exports = {
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:vue/essential",
    ],
    "env": {
      "browser": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
    },
    "rules": {
      // 校验规则
      "camelcase": [2, {"properties": "never"}], //强制驼峰命名规则
      "default-case": 0, //在switch语句中需要有default语句
      "no-shadow-restricted-names": 2, //js关键字和保留字不能作为函数名或者变量名
      "new-cap": [2, {"newIsCap": true, "capIsNew": false}], //构造函数名字首字母要大写
      "no-mixed-spaces-and-tabs": [2, "smart-tabs"], //不允许混用tab和空格
      "no-ternary": 2, //不允许使用三目运算符
      "semi": [2, "always"], //强制语句分号结尾
      "no-var": 2, //使用let和const代替var
      "indent": 2,
    }
}; 