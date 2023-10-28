import { Injectable } from "@angular/core";
import { IModuleConfig } from "../types";

@Injectable({
	providedIn: "root",
})
export class CustomModuleConfigService {
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

	public config: IModuleConfig = {
		flagExtensions: "png",
		flagType: "WAVY",
		flagSize: "20x15",
	};
}
