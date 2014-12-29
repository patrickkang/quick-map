'use strict';

var GMAP_URL = 'https://www.google.ca/maps?q=';

function openMap(txt){
  chrome.tabs.create({'url': GMAP_URL + encodeURIComponent(txt) });
}

// Create context menu item
chrome.contextMenus.create({
  type: 'normal', // the default textual option
  title: 'Quick Map', // the text that is displayed
  contexts: ['selection'], // only display on selected text
  onclick: function (obj) { openMap(obj.selectionText); },
  documentUrlPatterns: ['<all_urls>'] // show on all addresses
});