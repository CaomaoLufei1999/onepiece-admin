import {UnControlled as CodeMirror} from "react-codemirror2"; // npm install codemirror react-codemirror2 --save
import 'codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';
// 主题风格 https://codemirror.net/demo/theme.html#dracula
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/theme/idea.css';
import 'codemirror/theme/eclipse.css';
// 代码模式，clike 是包含java,c++等模式的
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/perl/perl.js';
import 'codemirror/mode/clike/clike.js';
// ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/lint/lint.js';  // 错误校验
import 'codemirror/addon/lint/lint.css'  // 代码错误提示
import 'codemirror/addon/hint/anyword-hint.js';
// import 'codemirror/addon/hint/javascript-hint'
// 代码高亮
import 'codemirror/addon/selection/active-line'; // 当前行高亮
// 折叠代码
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchBrackets';
import {useState} from "react";

export default () => {
  const [tabKey, setTabKey] = useState('problemInfo');
  const [codeData, setCodeData] = useState('class Solution {\n' +
    '    public int lengthOfLongestSubstring(String s) {\n' +
    '        // 哈希集合，记录每个字符是否出现过\n' +
    '        Set<Character> occ = new HashSet<Character>();\n' +
    '        int n = s.length();\n' +
    '        // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动\n' +
    '        int rk = -1, ans = 0;\n' +
    '        for (int i = 0; i < n; ++i) {\n' +
    '            if (i != 0) {\n' +
    '                // 左指针向右移动一格，移除一个字符\n' +
    '                occ.remove(s.charAt(i - 1));\n' +
    '            }\n' +
    '            while (rk + 1 < n && !occ.contains(s.charAt(rk + 1))) {\n' +
    '                // 不断地移动右指针\n' +
    '                occ.add(s.charAt(rk + 1));\n' +
    '                ++rk;\n' +
    '            }\n' +
    '            // 第 i 到 rk 个字符是一个极长的无重复字符子串\n' +
    '            ans = Math.max(ans, rk - i + 1);\n' +
    '        }\n' +
    '        return ans;\n' +
    '    }\n' +
    '}');
  const [instance, setInstance] = useState(null);
  const [codeTheme, setCodeTheme] = useState("dracula");

  return(
    <CodeMirror
      // onCursorActivity={e => e.showHint() /*调用显示提示*/ }
      // editorDidMount={editor => { {instance = editor }}
      value={codeData}
      // editorDidAttach={editor => instance}
      editorDidMount={(editor) => {
        editor.setSize('auto', '400px')
        editor.on("inputRead", function () {
          // editor.on("cursorActivity", function () {
          // 调用显示提示
          editor.showHint();
        });
        setInstance(editor);
      }}
      options={{
        // 配置：https://www.cnblogs.com/minjh/p/15044706.html
        mode: {name: 'text/x-java', json: true},// 语言
        // mode: {name:'text/css'},
        lineNumbers: true, // 是否显示行号
        completeSingle: false,
        readOnly: false, // 是否只读
        // hintOptions: {hint: },
        // theme: 'blackboard',// 主题
        // theme: 'solarized dark',
        theme: codeTheme,
        autofocus: true,// 自动获取焦点
        styleActiveLine: true,// 光标代码高亮
        smartIndent: true,  // 自动缩进
        cursorHeight: 1,
        // start-设置支持代码折叠
        lineWrapping: true,// 是 否支持代码折叠
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],// end
        extraKeys: {
          // "Alt": "autocomplete",
          "Ctrl-S": function (editor) {
            // editor.setValue(editor)
            // that.codeSave(editor)
          },
          "Ctrl-Z": function (editor) {
            editor.undo();
          },// undo
          "F8": function (editor) {
            editor.redo();
          },// Redo
        },
        matchBrackets: true,  // 括号匹配，光标旁边的括号都高亮显示
        autoCloseBrackets: true, // 键入时将自动关闭()[]{}''""
        lint: true, // 错误提示
      }}
      // onChange={this.codeOnChange}

      // 在失去焦点的时候触发，这个时候放数据最好
      // onBlur={this.codeOnBlur}

      // // 这个必须加上，否则在一些情况下，第二次打开就会有问题
      // //     onBeforeChange={(editor, data, value) => {
      // //       console.log("onBeforeChange fresh")
      // //       console.log(JSON.stringify(data));
      // //     }}
      //     /* HERE: pick out only the value. and might as well get name. */
    />
  );
}
