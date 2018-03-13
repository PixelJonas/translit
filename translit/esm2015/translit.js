import { InjectionToken, Directive, ElementRef, Inject, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */


const LIT_CONFIG = new InjectionToken('lit.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TranslitDirective {
    /**
     * @param {?} el
     * @param {?} config
     */
    constructor(el, config) {
        this.config = config;
        el.nativeElement.style.backgroundColor = 'blue';
        config.subscribe((conf) => {
            Object.keys(this.config).forEach((key) => console.log(key));
        });
    }
}
TranslitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lit-translate]'
            },] },
];
/** @nocollapse */
TranslitDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Observable, decorators: [{ type: Inject, args: [LIT_CONFIG,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TranslitModule {
    /**
     * @param {?} config
     * @return {?}
     */
    forRoot(config) {
        return {
            ngModule: TranslitModule,
            providers: [
                {
                    provide: LIT_CONFIG,
                    useValue: config,
                },
            ],
        };
    }
}
TranslitModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TranslitDirective],
                exports: [TranslitDirective],
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

export { TranslitModule, TranslitDirective as eTranslitDirective, LIT_CONFIG as ɵb };
//# sourceMappingURL=translit.js.map
