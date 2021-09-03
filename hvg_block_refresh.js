// ==UserScript==
// @name        HVG fórum block refresh
// @namespace   My
// @description HVG fórum block refresh
// @include     https://hvg.hu/*/*
// @version     1
// @grant       none
// ==/UserScript==
window.onbeforeunload = function() {if (document.activeElement.href!=undefined) return; else return "Dude";}
