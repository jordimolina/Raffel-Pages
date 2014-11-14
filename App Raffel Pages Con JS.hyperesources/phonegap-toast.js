/*global cordova, module*/
module.exports = {
    showShort: function (message, win, fail) {
        cordova.exec(win, fail, "Toasty", "show_short", [message]);
    },

    showLong: function (message, win, fail) {
        cordova.exec(win, fail, "Toasty", "show_long", [message]);
    },

	connect: function (message, win, fail) {
        cordova.exec(win, fail, "Toasty", "connect", [message]);
    },
    cancel: function (win, fail) {
        cordova.exec(win, fail, "Toasty", "cancel", []);
    }
};
