(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Observable'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Observable', '@angular/common'], factory) :
	(factory((global.translit = {}),global.ng.core,global.Rx,global.ng.common));
}(this, (function (exports,core,Observable,common) { 'use strict';

var LIT_CONFIG = new core.InjectionToken('lit.config');
var TranslitDirective = /** @class */ (function () {
    function TranslitDirective(el, config) {
        var _this = this;
        this.config = config;
        el.nativeElement.style.backgroundColor = 'blue';
        config.subscribe(function (conf) {
            Object.keys(_this.config).forEach(function (key) { return console.log(key); });
        });
    }
    return TranslitDirective;
}());
TranslitDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[lit-translate]'
            },] },
];
TranslitDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: Observable.Observable, decorators: [{ type: core.Inject, args: [LIT_CONFIG,] },] },
]; };
var TranslitModule = /** @class */ (function () {
    function TranslitModule() {
    }
    TranslitModule.prototype.forRoot = function (config) {
        return {
            ngModule: TranslitModule,
            providers: [
                {
                    provide: LIT_CONFIG,
                    useValue: config,
                },
            ],
        };
    };
    return TranslitModule;
}());
TranslitModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [TranslitDirective],
                exports: [TranslitDirective],
            },] },
];
TranslitModule.ctorParameters = function () { return []; };

exports.TranslitModule = TranslitModule;
exports.eTranslitDirective = TranslitDirective;
exports.ɵb = LIT_CONFIG;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=translit.umd.js.map
