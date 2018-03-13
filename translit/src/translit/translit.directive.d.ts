import { ElementRef } from '@angular/core';
import { TranslitConfig } from "../model/translit.config";
import { Observable } from "rxjs/Observable";
export declare class TranslitDirective {
    private config;
    constructor(el: ElementRef, config: Observable<TranslitConfig>);
}
