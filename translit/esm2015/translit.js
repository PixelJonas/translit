import { Directive, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TranslitDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}
TranslitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lit-translate]',
            },] },
];
/** @nocollapse */
TranslitDirective.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TranslitModule {
}
TranslitModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TranslitDirective],
                exports: [TranslitDirective]
            },] },
];
/** @nocollapse */
TranslitModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { TranslitModule, TranslitDirective as eTranslitDirective };
//# sourceMappingURL=translit.js.map
