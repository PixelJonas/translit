import { Directive, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var TranslitDirective = /** @class */ (function () {
    function TranslitDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    return TranslitDirective;
}());
TranslitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lit-translate]',
            },] },
];
TranslitDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
var TranslitModule = /** @class */ (function () {
    function TranslitModule() {
    }
    return TranslitModule;
}());
TranslitModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TranslitDirective],
                exports: [TranslitDirective]
            },] },
];
TranslitModule.ctorParameters = function () { return []; };

export { TranslitModule, TranslitDirective as eTranslitDirective };
//# sourceMappingURL=translit.js.map
