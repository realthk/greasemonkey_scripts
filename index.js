// ==UserScript==
// @id             Index fórum szinezgetés
// @name           Index fórum szinezgetés
// @namespace      My
// @description    Index fórum szinezgetés
// @include        https://forum.index.hu/Article/*
// @grant       none
// ==/UserScript==


var ezvagyoken = "Degeczi";
var ezazenszinem = "#CCFFFF";
var ezavalaszolokszine = "#CCFF99";


var tables = document.getElementsByTagName("table");

for (var i = 0 ; i < tables.length; i++) {
  var table = tables[i];

  if (table.getAttribute("class") != "art") {
    continue;
  }

  var userName = undefined;
  var bodyDiv = undefined;
  var rows = table.getElementsByTagName("tr");

  for (var k = 0; k < rows.length; k++) {
	var row = rows[k];

    if (row.getAttribute("class") == "art_h") {
        var fields = row.getElementsByTagName("a");
		for (var j = 0; j < fields.length; j++) {
		  var field = fields[j];
		  if (field.getAttribute("class") && field.getAttribute("class") == "art_owner")
			userName = field.getElementsByTagName("strong")[0].innerHTML;
		}
	} else if (row.getAttribute("class") == "art_b") {
		bodyDiv = row.getElementsByTagName("td")[0];
		if (userName == ezvagyoken) {
			bodyDiv.bgColor = ezazenszinem;
		}
	} else if (row.getAttribute("class") == "art_f") {
		var links = row.getElementsByTagName("a");
		if (links.length > 0) {
		  var prevuser = links[0].innerHTML.replace(/(.*) \(.*/,"$1");
		  if (prevuser == ezvagyoken) {
			bodyDiv.bgColor = ezavalaszolokszine;
		  }
		}
	}
  }
}
