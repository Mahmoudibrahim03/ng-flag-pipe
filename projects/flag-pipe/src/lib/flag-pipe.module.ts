import { ModuleWithProviders, NgModule } from "@angular/core";

import { FlagPipe } from "./pipes/flag/flag.pipe";
import { CustomModuleConfigService } from "./services/custom-module-config-service.service";

@NgModule({
	declarations: [FlagPipe],
	imports: [],
	exports: [FlagPipe],
})
export class flagPipeModule {
	static forRoot(
		config: CustomModuleConfigService
	): ModuleWithProviders<flagPipeModule> {
		return {
			ngModule: flagPipeModule,
			providers: [
				{ provide: CustomModuleConfigService, useValue: config },
			],
		};
	}
}
