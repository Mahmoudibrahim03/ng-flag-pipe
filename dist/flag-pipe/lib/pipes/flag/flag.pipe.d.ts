import { PipeTransform } from "@angular/core";
import { countryCode, flagExtension, flagSizes, flagTypies } from "../../types";
import * as i0 from "@angular/core";
export declare class FlagPipe implements PipeTransform {
    private readonly flagUrl;
    transform(value: countryCode | undefined, extention?: flagExtension, flagType?: flagTypies, size?: flagSizes<typeof flagType>): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlagPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FlagPipe, "flag", false>;
}
