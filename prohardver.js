// ==UserScript==
// @name        Prohardver fórum szinezgetés
// @namespace   https://github.com/realthk/greasemonkey_scripts
// @description Prohardver fórum szinezgetés
// @include     https://prohardver.hu/tema/*
// @include     https://logout.hu/tema/*
// @include     https://mobilarena.hu/tema/*
// @include     https://gamepod.hu/tema/*
// @include     https://itcafe.hu/tema/*
// @version     1
// @grant       none
// ==/UserScript==
var ezvagyoken = "Degeczi";
var ezazenszinem = "#CCFFFF";
var ezavalaszolokszine = "#CCFF99";
var main = document.getElementsByClassName("msg-list msg-list-desc");
var messages = main[0].getElementsByClassName("list-unstyled")[0].getElementsByClassName("media");
for (var i = 0 ; i < messages.length; i++)
{
  var message = messages[i].getElementsByClassName("card")[0];
  var haveHit = false;

  if (message !== undefined) {
    var face = message.getElementsByClassName("msg-head-author")[0];
    if (face.innerHTML.indexOf(ezvagyoken)>-1) {
      message.getElementsByClassName("card-body")[0].style.backgroundColor = ezazenszinem;
      haveHit = true;
    }
    if (!haveHit) {
      var head = message.getElementsByClassName("msg-head-replied");
      if (head!==undefined && head.length>0 && head[0].innerHTML.indexOf(ezvagyoken)>-1) {
         message.getElementsByClassName("card-body")[0].style.backgroundColor = ezavalaszolokszine;
         haveHit = true;
      }
      if (!haveHit) {
        var text = message.getElementsByClassName("msg-content")[0];
        var rows = text.getElementsByTagName("p");
        for (var k = 0; !haveHit && k < rows.length; k++)
        {
          var row = rows[k];
          if (row.innerHTML.indexOf(ezvagyoken)>-1) {
            row.style.backgroundColor = ezavalaszolokszine;
          }
        }
      }
    }
  }
}
