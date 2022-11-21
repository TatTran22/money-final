"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var glob = require('glob');
var fs = require('fs');
var currency_1 = require("./currency");
// const currencyImages = glob('../assets/images/country-flag/*.png')
glob('../assets/images/country-flag/*.png', {}, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    //   console.log(files)
    var paths = files.map(function (f) {
        var fArray = f.split('/');
        return fArray[fArray.length - 1];
    });
    var result = currency_1.currencyList.map(function (c) {
        var name = paths.find(function (p) { return Number(p.split('-')[0]) - 1 == c.id; });
        return __assign(__assign({}, c), { currency_image_name: name });
    });
    console.log(result);
    var data = JSON.stringify(result);
    fs.writeFileSync('./currency.json', data);
});
// console.log(currencyImages)
