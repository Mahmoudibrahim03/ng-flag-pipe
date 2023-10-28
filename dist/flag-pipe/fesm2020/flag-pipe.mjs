import * as i0 from '@angular/core';
import { Injectable, inject, Pipe, NgModule } from '@angular/core';

class CustomModuleConfigService {
    constructor() {
        // Global Configration for the flag-pipe module
        // This is the default configuration
        // You can override this configuration by providing a new one in your module
        // For example:
        // @NgModule({
        //   declarations: [AppComponent],
        //   imports: [BrowserModule, FlagPipeModule.forRoot({ flagExtensions: ["svg"] })],
        //   providers: [],
        //   bootstrap: [AppComponent],
        // })
        // export class AppModule {}
        this.config = {
            flagExtensions: "png",
            flagType: "WAVY",
            flagSize: "20x15",
        };
    }
}
CustomModuleConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CustomModuleConfigService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomModuleConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CustomModuleConfigService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CustomModuleConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }] });

class FlagPipe {
    constructor() {
        this.flagUrl = "https://flagcdn.com";
        this._CMCS = inject(CustomModuleConfigService);
    }
    /*
     * transform
     * @param value countryCode
     * @param extention flagExtension
     * @param flagType flagTypies
     * @param size flagSizes<typeof flagType>
     * @returns string | null
     */
    transform(value, extention = this._CMCS.config.flagExtensions, flagType = this._CMCS.config.flagType, size = this._CMCS.config.flagSize) {
        if (!value) {
            return null;
        }
        else if (value === "il") {
            console.error(`       🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸
                                    This SHIT  is not Exist ever
                                                404
                                          FREE PALESTINE
        🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸`);
            return "404 MF !!!";
        }
        else {
            return `${this.flagUrl}/${extention !== "svg" ? size : ""}/${value.toLocaleLowerCase()}.${extention}`;
        }
    }
}
FlagPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FlagPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FlagPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: FlagPipe, name: "flag" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FlagPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "flag",
                    pure: true,
                }]
        }] });

class flagPipeModule {
    static forRoot(config) {
        return {
            ngModule: flagPipeModule,
            providers: [
                { provide: CustomModuleConfigService, useValue: config },
            ],
        };
    }
}
flagPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: flagPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
flagPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: flagPipeModule, declarations: [FlagPipe], exports: [FlagPipe] });
flagPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: flagPipeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: flagPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FlagPipe],
                    imports: [],
                    exports: [FlagPipe],
                }]
        }] });

/*
 * Public API Surface of flag-pipe
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FlagPipe, flagPipeModule };
//# sourceMappingURL=flag-pipe.mjs.map
