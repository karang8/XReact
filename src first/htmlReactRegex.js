var regexAllTags = /<([a-zA-Z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gim;
var html =
  '<h3 class="any" id="hey">Test</h3> raw text here <a href="http://google.com">hehe</a><Button onClick={this.handleClick}>React Button</Button>';

var html2 = "<App onClick={this.handleClick} />";
var htmlTags = html2.match(regexAllTags);
console.log(htmlTags);

// ["<h3 class="any" id="hey">Test</h3>", "<a href="http://google.com">hehe</a>"]

var regexSingleTag = /<([a-zA-Z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/;
// for (var i = 0; i < htmlTags.length; i++) {
var text = regexSingleTag.exec(htmlTags[0]);
console.log("Tag #", text);
// }
