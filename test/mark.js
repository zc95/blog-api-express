// https://www.npmjs.com/package/marked-ast

var marked = require('marked-ast');
const content = `##段落\n测试\n## 图片\n![](https://avatars.githubusercontent.com/u/21879812?s=48&v=4)\n## 分类\n- 分类1\n- 分类二\n\n`;
var ast = marked.parse(content);
var html = marked.render(ast);

console.log(ast);
console.log('\n');
console.log(html);
