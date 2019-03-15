// JS file contaning script for JQuery/Ajax:
// Copied from postman
//
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.samsara.com/v1/sensors/list?access_token=zuSyoZH2rVgbaY7MIYZfe69ufp9SsL",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
//    "Access-Control-Allow-Origin": "*",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": "{\"groupId\":25628}"
};
	document.write(linebreak);
	document.write('settings from usejquery.js:  ');
	document.write(settings.url + '||' + settings.method + '||');
//	document.write(settings.method);
	document.write(settings.headers);
	document.write(settings.data);
	document.write(linebreak);

$.ajax(settings).done(function (response) {
  console.log(response);
});
