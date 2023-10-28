import { ModuleWithProviders } from "@angular/core";
import { CustomModuleConfigService } from "./services/custom-module-config-service.service";
import * as i0 from "@angular/core";
import * as i1 from "./pipes/flag/flag.pipe";
export declare class flagPipeModule {
    static forRoot(config: CustomModuleConfigService): ModuleWithProviders<flagPipeModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<flagPipeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<flagPipeModule, [typeof i1.FlagPipe], never, [typeof i1.FlagPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<flagPipeModule>;
}
