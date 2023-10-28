import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class CustomModuleConfigService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1vZHVsZS1jb25maWctc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmxhZy1waXBlL3NyYy9saWIvc2VydmljZXMvY3VzdG9tLW1vZHVsZS1jb25maWctc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyx5QkFBeUI7SUFIdEM7UUFJQywrQ0FBK0M7UUFDL0Msb0NBQW9DO1FBQ3BDLDRFQUE0RTtRQUM1RSxlQUFlO1FBQ2YsY0FBYztRQUNkLGtDQUFrQztRQUNsQyxtRkFBbUY7UUFDbkYsbUJBQW1CO1FBQ25CLCtCQUErQjtRQUMvQixLQUFLO1FBQ0wsNEJBQTRCO1FBRXJCLFdBQU0sR0FBa0I7WUFDOUIsY0FBYyxFQUFFLEtBQUs7WUFDckIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE9BQU87U0FDakIsQ0FBQztLQUNGOzt1SEFsQlkseUJBQXlCOzJIQUF6Qix5QkFBeUIsY0FGekIsTUFBTTs0RkFFTix5QkFBeUI7a0JBSHJDLFVBQVU7bUJBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbU1vZHVsZUNvbmZpZ1NlcnZpY2Uge1xuXHQvLyBHbG9iYWwgQ29uZmlncmF0aW9uIGZvciB0aGUgZmxhZy1waXBlIG1vZHVsZVxuXHQvLyBUaGlzIGlzIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cblx0Ly8gWW91IGNhbiBvdmVycmlkZSB0aGlzIGNvbmZpZ3VyYXRpb24gYnkgcHJvdmlkaW5nIGEgbmV3IG9uZSBpbiB5b3VyIG1vZHVsZVxuXHQvLyBGb3IgZXhhbXBsZTpcblx0Ly8gQE5nTW9kdWxlKHtcblx0Ly8gICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuXHQvLyAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBGbGFnUGlwZU1vZHVsZS5mb3JSb290KHsgZmxhZ0V4dGVuc2lvbnM6IFtcInN2Z1wiXSB9KV0sXG5cdC8vICAgcHJvdmlkZXJzOiBbXSxcblx0Ly8gICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuXHQvLyB9KVxuXHQvLyBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG5cblx0cHVibGljIGNvbmZpZzogSU1vZHVsZUNvbmZpZyA9IHtcblx0XHRmbGFnRXh0ZW5zaW9uczogXCJwbmdcIixcblx0XHRmbGFnVHlwZTogXCJXQVZZXCIsXG5cdFx0ZmxhZ1NpemU6IFwiMjB4MTVcIixcblx0fTtcbn1cbiJdfQ==