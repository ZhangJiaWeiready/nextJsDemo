const path = require('path');

// 如果你想使用next lint和lint-staged在暂存的git文件上运行linter
// 则必须使用以下内容添加到项目根目录中的.lintstagedrc.js中，以便指定--file标志的使用

const buildEslintCommand = (filenames) => (
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(),f)).join('--file')}`
)

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
}