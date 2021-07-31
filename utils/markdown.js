/**
 * 处理markdown，转为ast或html
 *
 * doc:
 * https://www.npmjs.com/package/marked-ast
 *
 * bug:
 * https://github.com/markedjs/marked/issues/1238
 */
const marked = require('marked-ast');

class Markdown {
    constructor(content) {
        this.ast = marked.parse(content);
        this.html = marked.render(this.ast);
    }

    // 获取 ast
    getAst() {
        return this.ast;
    }

    // 获取 html
    getHtml() {
        return this.html;
    }

    // 提取content中的摘要（剔除 markdwon 语法）作为描述，并截取前n个字符
    getDesc(limit = 200) {
        let desc = this.html;
        if (!desc) return '';

        // 移除html标签、换行、连续空白等
        desc = desc.replace(/<\/?.+?\/?>/g, '').replace(/\t|\r|\n|\r\n/g, ' ').replace(/\s+/g, ' ');

        // 截取
        if (desc.length > limit) {
            desc = desc.substr(0, limit) + '...';
        }

        return desc;
    }


}

module.exports = Markdown;
