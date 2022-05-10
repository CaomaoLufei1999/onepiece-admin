import {Editor} from "@bytemd/react";
// 引入中文包
import zhHans from "bytemd/locales/zh_Hans.json";
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import breaks from "@bytemd/plugin-breaks";
import footnotes from "@bytemd/plugin-footnotes";
import frontmatter from "@bytemd/plugin-frontmatter";
import math from "@bytemd/plugin-math-ssr";
import mermaid from "@bytemd/plugin-mermaid";
import "bytemd/dist/index.min.css";
import "highlight.js/styles/vs.css";
import "./index.less"
// 主题
import 'juejin-markdown-themes/dist/condensed-night-purple.min.css'; // npm install juejin-markdown-themes
import 'juejin-markdown-themes/dist/condensed-night-purple';
import {useState} from "react";

const plugins = [gfm(), gemoji(), highlight(), mediumZoom(), breaks(), footnotes(), frontmatter(), math(), mermaid()];


export default () => {
  const [value, setValue] = useState('给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。\n' +
    '\n' +
    '你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。\n' +
    '\n' +
    '你可以按任意顺序返回答案。\n' +
    '\n' +
    '示例 1：\n' +
    '```\n' +
    '输入：nums = [2,7,11,15], target = 9\n' +
    '输出：[0,1]\n' +
    '解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。\n' +
    '```\n' +
    '示例 2：\n' +
    '```\n' +
    '输入：nums = [3,2,4], target = 6\n' +
    '输出：[1,2]\n' +
    '```\n' +
    '示例 3：\n' +
    '```\n' +
    '输入：nums = [3,3], target = 6\n' +
    '输出：[0,1]\n' +
    '```\n' +
    '\n' +
    '**提示**：\n' +
    '\n' +
    '`2 <= nums.length <= 104`\n' +
    '`-109 <= nums[i] <= 109`\n' +
    '`-109 <= target <= 109`\n' +
    '\n' +
    '只会存在一个有效答案');

  return(
    <Editor
      locale={zhHans}
      // 内部的值
      value={value}
      // 插件
      plugins={plugins}
      // 动态修改值
      onChange={v => setValue(v)}
      placeholder={"开始你的创作吧！"}
    />
  );
};
