(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{728:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.scripts.Node"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Execute a Node.js script")])]),t._v(" "),a("p",[t._v("With this Node task, we can execute a full javascript script."),a("br"),t._v("\nThe task will create a temprorary folder for every tasks and allows you to install some npm packages defined in an optional "),a("code",[t._v("package.json")]),t._v(" file.")]),t._v(" "),a("p",[t._v("By convention, you need to define at least a "),a("code",[t._v("main.js")]),t._v(" files in "),a("code",[t._v("inputFiles")]),t._v(" that will be the script used."),a("br"),t._v("\nYou can also  add as many javascript files as you need in "),a("code",[t._v("inputFiles")]),t._v(".")]),t._v(" "),a("p",[t._v("You can send outputs & metrics from your node script that can be used by others tasks. In order to help, we inject a node package directly on the working dir.Here is an example usage:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Kestra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./kestra"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nKestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("outputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" float"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nKestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tag1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nKestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tag1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nKestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tag1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'destroy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Execute a node script")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.scripts.Node"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("main.js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    const Kestra = require(\"./kestra\");\n    const fs = require('fs')\n    const result = fs.readFileSync(process.argv[2], \"utf-8\")\n    console.log(JSON.parse(result).status)\n    const axios = require('axios')\n    axios.get('http://google.fr').then(d => console.log(d.status); Kestra.outputs({'status': d.status, 'text': d.data}))\n    console.log(require('./mymodule').value)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data.json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    {"status": "OK"}')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mymodule.js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    module.exports.value = 'hello world'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("package.json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    {\n      "name": "tmp",\n      "version": "1.0.0",\n      "description": "",\n      "main": "index.js",\n      "dependencies": {\n          "axios": "^0.20.0"\n      },\n      "devDependencies": {},\n      "scripts": {\n          "test": "echo "Error: no test specified" && exit 1"\n      },\n      "author": "",\n      "license": "ISC"\n    }')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data.json\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args"}},[t._v("#")]),t._v(" "),a("code",[t._v("args")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("node command args")])]),t._v(" "),a("p",[t._v("Arguments list to pass to main javascript script")]),t._v(" "),a("h3",{attrs:{id:"exitonfailed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exitonfailed"}},[t._v("#")]),t._v(" "),a("code",[t._v("exitOnFailed")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Exit if any non true return value")])]),t._v(" "),a("p",[t._v("This tells bash that it should exit the script if any statement returns a non-true return value."),a("br"),t._v("\nThe benefit of using -e is that it prevents errors snowballing into serious issues when they could have been caught earlier.")]),t._v(" "),a("h3",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" "),a("code",[t._v("files")])]),t._v(" "),a("p",[t._v("🔒 "),a("em",[t._v("Deprecated")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The list of files that will be uploaded to internal storage,")])]),t._v(" "),a("p",[t._v("use "),a("code",[t._v("outputsFiles")]),t._v(" property instead")]),t._v(" "),a("h3",{attrs:{id:"inputfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("inputFiles")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Input files are extra files supplied by user that make it simpler organize code.")])]),t._v(" "),a("p",[t._v("Describe a files map that will be written and usable in execution context. In python execution context is in a temp folder, for bash scripts, you can reach files using a inputsDirectory variable like 'source "+t._s(t.inputsDirectory)+"/myfile.sh'")]),t._v(" "),a("h3",{attrs:{id:"interpreter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpreter"}},[t._v("#")]),t._v(" "),a("code",[t._v("interpreter")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("/bin/sh")])]),t._v(" "),a("li",[a("strong",[t._v("Min length:")]),t._v(" "),a("code",[t._v("1")])])]),t._v(" "),a("p",[t._v("Interpreter to used")]),t._v(" "),a("h3",{attrs:{id:"interpreterargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpreterargs"}},[t._v("#")]),t._v(" "),a("code",[t._v("interpreterArgs")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[-c]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Interpreter args used")])]),t._v(" "),a("h3",{attrs:{id:"nodepath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodepath"}},[t._v("#")]),t._v(" "),a("code",[t._v("nodePath")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("/usr/bin/node")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The node interpreter to use")])]),t._v(" "),a("p",[t._v("Set the node interpreter path to use")]),t._v(" "),a("h3",{attrs:{id:"npmpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npmpath"}},[t._v("#")]),t._v(" "),a("code",[t._v("npmPath")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("/usr/bin/npm")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The npm binary to use")])]),t._v(" "),a("p",[t._v("Set the npm binary path for node dependencies setup")]),t._v(" "),a("h3",{attrs:{id:"outputfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("outputFiles")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Output file list that will be uploaded to internal storage")])]),t._v(" "),a("p",[t._v("List of key that will generate temporary files."),a("br"),t._v("\nOn the command, just can use with special variable named "),a("code",[t._v("outputFiles.key")]),t._v("."),a("br"),t._v("\nIf you add a files with "),a("code",[t._v('["first"]')]),t._v(", you can use the special vars "),a("code",[t._v("echo 1 >> {[ outputFiles.first }}")]),t._v(" and you used on others tasks using "),a("code",{pre:!0},[t._v("{{  outputs.task-id.files.first  }}")])]),t._v(" "),a("h3",{attrs:{id:"outputsfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputsfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("outputsFiles")])]),t._v(" "),a("p",[t._v("🔒 "),a("em",[t._v("Deprecated")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Deprecated Output file")])]),t._v(" "),a("p",[t._v("use "),a("code",[t._v("outputFiles")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"exitcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exitcode"}},[t._v("#")]),t._v(" "),a("code",[t._v("exitCode")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The exit code of the whole execution")])]),t._v(" "),a("h3",{attrs:{id:"files-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("files")])]),t._v(" "),a("p",[t._v("🔒 "),a("em",[t._v("Deprecated")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Deprecated output files")])]),t._v(" "),a("p",[t._v("use "),a("code",[t._v("outputFiles")])]),t._v(" "),a("h3",{attrs:{id:"outputfiles-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputfiles-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("outputFiles")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The output files uri in Kestra internal storage")])]),t._v(" "),a("h3",{attrs:{id:"stderrlinecount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stderrlinecount"}},[t._v("#")]),t._v(" "),a("code",[t._v("stdErrLineCount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The standard error line count")])]),t._v(" "),a("h3",{attrs:{id:"stdoutlinecount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdoutlinecount"}},[t._v("#")]),t._v(" "),a("code",[t._v("stdOutLineCount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The standard output line count")])]),t._v(" "),a("h3",{attrs:{id:"vars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vars"}},[t._v("#")]),t._v(" "),a("code",[t._v("vars")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The value extract from output of the commands")])])])}),[],!1,null,null,null);s.default=n.exports}}]);