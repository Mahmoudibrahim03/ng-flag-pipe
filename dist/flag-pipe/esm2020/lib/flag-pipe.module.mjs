import { NgModule } from "@angular/core";
import { FlagPipe } from "./pipes/flag/flag.pipe";
import { CustomModuleConfigService } from "./services/custom-module-config-service.service";
import * as i0 from "@angular/core";
export class flagPipeModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZsYWctcGlwZS9zcmMvbGliL2ZsYWctcGlwZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOztBQU81RixNQUFNLE9BQU8sY0FBYztJQUMxQixNQUFNLENBQUMsT0FBTyxDQUNiLE1BQWlDO1FBRWpDLE9BQU87WUFDTixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4RDtTQUNELENBQUM7SUFDSCxDQUFDOzs0R0FWVyxjQUFjOzZHQUFkLGNBQWMsaUJBSlgsUUFBUSxhQUViLFFBQVE7NkdBRU4sY0FBYzs0RkFBZCxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNULFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDeEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRmxhZ1BpcGUgfSBmcm9tIFwiLi9waXBlcy9mbGFnL2ZsYWcucGlwZVwiO1xuaW1wb3J0IHsgQ3VzdG9tTW9kdWxlQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2N1c3RvbS1tb2R1bGUtY29uZmlnLXNlcnZpY2Uuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtGbGFnUGlwZV0sXG5cdGltcG9ydHM6IFtdLFxuXHRleHBvcnRzOiBbRmxhZ1BpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBmbGFnUGlwZU1vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KFxuXHRcdGNvbmZpZzogQ3VzdG9tTW9kdWxlQ29uZmlnU2VydmljZVxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGZsYWdQaXBlTW9kdWxlPiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBmbGFnUGlwZU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IEN1c3RvbU1vZHVsZUNvbmZpZ1NlcnZpY2UsIHVzZVZhbHVlOiBjb25maWcgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fVxufVxuIl19