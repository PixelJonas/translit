(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.translit = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var TranslitDirective = /** @class */ (function () {
    function TranslitDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    return TranslitDirective;
}());
TranslitDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[lit-translate]',
            },] },
];
TranslitDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
var TranslitModule = /** @class */ (function () {
    function TranslitModule() {
    }
    return TranslitModule;
}());
TranslitModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [TranslitDirective],
                exports: [TranslitDirective]
            },] },
];
TranslitModule.ctorParameters = function () { return []; };

exports.TranslitModule = TranslitModule;
exports.eTranslitDirective = TranslitDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=translit.umd.js.map
