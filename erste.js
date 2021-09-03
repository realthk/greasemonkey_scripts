// ==UserScript==
// @name        Erste beautifier
// @namespace   https://github.com/realthk/greasemonkey_scripts
// @description Replace awful Erste image
// @include     https://www.erstebank.hu/content/*
// @version     1.0.0
// @grant       none
// ==/UserScript==

let lookup_table = {
	'https://www.erstebank.hu/content/dam/hu/ebh/www_erstebank_hu/george-images/login/user.png': 'https://fsa.zobj.net/crop.php?r=FbDVG74ckVlxT5fjkGnaFpgY-_wPNWe6cktjB5mwXIeOa_Ym_MVMwaYxyWECrub4GH0TTsVTvqNP8lFjSSVM_apI1hJd90U3KPdxY8t54xLvI_kn1SV4rtqp1wBYWVFWpg51k9eCfjaPfYRyE71DE-w_CCcT8ygziofRdryzb4AvZdfE6rG2JL_sG2oyAwzAnpEXAKuXELYwYOqg',
	'https://www.erstebank.hu/content/dam/hu/ebh/www_erstebank_hu/george-images/login/phone_screen_1.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png',
	'https://www.erstebank.hu/content/dam/hu/ebh/www_erstebank_hu/george-images/login/phone_screen_2.png': '',
	'https://www.erstebank.hu/content/dam/hu/ebh/www_erstebank_hu/george-images/login/phone_screen_3.png': '',
	'https://www.erstebank.hu/content/dam/hu/ebh/www_erstebank_hu/george-images/login/phone_screen_4.png': '',
};

for (let image of document.getElementsByTagName('img')) {
	for (let query in lookup_table) {
		if (image.src == query) {
			image.src = lookup_table[query];
		}
	}
}
