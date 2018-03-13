import { InjectionToken, Directive, ElementRef, Inject, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';

var LIT_CONFIG = new InjectionToken('lit.config');
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
    { type: Directive, args: [{
                selector: '[lit-translate]'
            },] },
];
TranslitDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Observable, decorators: [{ type: Inject, args: [LIT_CONFIG,] },] },
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TranslitDirective],
                exports: [TranslitDirective],
            },] },
];
TranslitModule.ctorParameters = function () { return []; };

export { TranslitModule, TranslitDirective as eTranslitDirective, LIT_CONFIG as ɵb };
//# sourceMappingURL=translit.js.map
