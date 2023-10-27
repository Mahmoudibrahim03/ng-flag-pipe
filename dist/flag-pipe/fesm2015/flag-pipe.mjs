import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';

class FlagPipe {
    constructor() {
        this.flagUrl = "https://flagcdn.com";
    }
    /*
     * transform
     * @param value countryCode
     * @param extention flagExtension
     * @param flagType flagTypies
     * @param size flagSizes<typeof flagType>
     * @returns string | null
     */
    transform(value, extention = "png", flagType = "FIXED_HEIGHT", size = "h20") {
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
