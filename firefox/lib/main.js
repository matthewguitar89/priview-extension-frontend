var data = require("sdk/self").data;
var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
 
var popup = require("sdk/panel").Panel({
  width: 212,
  height: 200,
  contentURL: data.url("popup.html"),
  contentScriptFile: data.url("popup.js")
});

var widget = widgets.Widget({
  id: "mozilla-link",
  label: "Mozilla website",
  contentURL: data.url("worldeye.png"),
  panel: popup
});

tabs.on('activate', function(tab) {
  popup.port.emit('update', tab === null ? "empty" : tab.url);
});
tabs.on('ready', function(tab) {
  popup.port.emit('update', tab === null ? "empty" : tab.url);
});
