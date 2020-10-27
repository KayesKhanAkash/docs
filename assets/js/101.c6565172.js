(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{373:function(a,t,r){"use strict";r.r(t);var v=r(25),e=Object(v.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"avrowriter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avrowriter"}},[a._v("#")]),a._v(" AvroWriter")]),a._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"org.kestra.task.serdes.avro.AvroWriter"')]),a._v("\n")])])]),r("blockquote",[r("p",[a._v("Read a provided file containing ion serialized data and convert it to avro.")])]),a._v(" "),r("h2",{attrs:{id:"inputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[a._v("#")]),a._v(" Inputs")]),a._v(" "),r("h3",{attrs:{id:"dateformat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dateformat"}},[a._v("#")]),a._v(" "),r("code",[a._v("dateFormat")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),r("blockquote",[r("p",[a._v("Format to use when parsing date")])]),a._v(" "),r("p",[a._v("Default value is yyyy-MM-dd[XXX].")]),a._v(" "),r("h3",{attrs:{id:"datetimeformat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#datetimeformat"}},[a._v("#")]),a._v(" "),r("code",[a._v("datetimeFormat")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),r("blockquote",[r("p",[a._v("Format to use when parsing datetime")])]),a._v(" "),r("p",[a._v("Default value is yyyy-MM-dd'T'HH:mm[:ss][.SSSSSS][XXX]")]),a._v(" "),r("h3",{attrs:{id:"decimalseparator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#decimalseparator"}},[a._v("#")]),a._v(" "),r("code",[a._v("decimalSeparator")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),r("blockquote",[r("p",[a._v("Character to recognize as decimal point (e.g. use ‘,’ for European data).")])]),a._v(" "),r("p",[a._v("Default value is '.'")]),a._v(" "),r("h3",{attrs:{id:"falsevalues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#falsevalues"}},[a._v("#")]),a._v(" "),r("code",[a._v("falseValues")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("array")])]),a._v(" "),r("li",[r("strong",[a._v("SubType:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),r("blockquote",[r("p",[a._v("Values to consider as False")])]),a._v(" "),r("p",[a._v('Default values are "f", "false", "disabled", "0", "off", "no", ""')]),a._v(" "),r("h3",{attrs:{id:"from"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[a._v("#")]),a._v(" "),r("code",[a._v("from")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ✔️")])]),a._v(" "),r("blockquote",[r("p",[a._v("Source file URI")])]),a._v(" "),r("h3",{attrs:{id:"nullvalues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nullvalues"}},[a._v("#")]),a._v(" "),r("code",[a._v("nullValues")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("array")])]),a._v(" "),r("li",[r("strong",[a._v("SubType:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),r("blockquote",[r("p",[a._v("Values to consider as null")])]),a._v(" "),r("p",[a._v('Default values are "",'),r("br"),a._v('\n"#N/A",'),r("br"),a._v('\n"#N/A N/A",'),r("br"),a._v('\n"#NA",'),r("br"),a._v('\n"-1.#IND",'),r("br"),a._v('\n"-1.#QNAN",'),r("br"),a._v('\n"-NaN",'),r("br"),a._v('\n"1.#IND",'),r("br"),a._v('\n"1.#QNAN",'),r("br"),a._v('\n"NA",'),r("br"),a._v('\n"n/a",'),r("br"),a._v('\n"nan",'),r("br"),a._v('\n"null"')]),a._v(" "),r("h3",{attrs:{id:"schema"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[a._v("#")]),a._v(" "),r("code",[a._v("schema")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ✔️")])]),a._v(" "),r("blockquote",[r("p",[a._v("The avro schema associated to the data")])]),a._v(" "),r("h3",{attrs:{id:"timeformat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timeformat"}},[a._v("#")]),a._v(" "),r("code",[a._v("timeFormat")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),r("blockquote",[r("p",[a._v("Format to use when parsing time")])]),a._v(" "),r("p",[a._v("Default value is HH:mm[:ss][.SSSSSS][XXX]")]),a._v(" "),r("h3",{attrs:{id:"truevalues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#truevalues"}},[a._v("#")]),a._v(" "),r("code",[a._v("trueValues")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("array")])]),a._v(" "),r("li",[r("strong",[a._v("SubType:")]),a._v(" "),r("mark",[a._v("string")])]),a._v(" "),r("li",[r("strong",[a._v("Dynamic:")]),a._v(" ✔️")]),a._v(" "),r("li",[r("strong",[a._v("Required:")]),a._v(" ❌")])]),a._v(" "),r("blockquote",[r("p",[a._v("Values to consider as True")])]),a._v(" "),r("p",[a._v('Default values are "t", "true", "enabled", "1", "on", "yes"')]),a._v(" "),r("h2",{attrs:{id:"outputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[a._v("#")]),a._v(" Outputs")]),a._v(" "),r("h3",{attrs:{id:"uri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[a._v("#")]),a._v(" "),r("code",[a._v("uri")])]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("Type:")]),a._v(" "),r("mark",[a._v("object")])])]),a._v(" "),r("blockquote",[r("p",[a._v("URI of a temporary result file")])])])}),[],!1,null,null,null);t.default=e.exports}}]);