import { ModuleWithProviders } from '@angular/core';
import { TranslitConfig } from "./model/translit.config";
import { Observable } from "rxjs/Observable";
export declare class TranslitModule {
    forRoot(config: Observable<TranslitConfig>): ModuleWithProviders;
}
