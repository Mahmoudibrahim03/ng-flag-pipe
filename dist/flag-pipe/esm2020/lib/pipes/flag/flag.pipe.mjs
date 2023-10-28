import { Pipe, inject } from "@angular/core";
import { CustomModuleConfigService } from "../../services/custom-module-config-service.service";
import * as i0 from "@angular/core";
export class FlagPipe {
    constructor() {
        this.flagUrl = "https://flagcdn.com";
        this._CMCS = inject(CustomModuleConfigService).config;
    }
    /*
     * transform
     * @param value countryCode
     * @param extention flagExtension
     * @param flagType flagTypies
     * @param size flagSizes<typeof flagType>
     * @returns string | null
     */
    transform(value, extention = this._CMCS.flagExtensions, flagType = this._CMCS.flagType, size = this._CMCS.flagSize) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmxhZy1waXBlL3NyYy9saWIvcGlwZXMvZmxhZy9mbGFnLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOztBQWFoRyxNQUFNLE9BQU8sUUFBUTtJQUpyQjtRQUtrQixZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDekMsVUFBSyxHQUFrQixNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FrQ3hFO0lBaENBOzs7Ozs7O09BT0c7SUFFSCxTQUFTLENBQ1IsS0FBOEIsRUFDOUIsWUFBMkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQ3BELFdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMxQyxPQUFtQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFFdEQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FDWjs7OztpTUFJNkwsQ0FDN0wsQ0FBQztZQUNGLE9BQU8sWUFBWSxDQUFDO1NBQ3BCO2FBQU07WUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFDckIsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUM5QixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQzdDO0lBQ0YsQ0FBQzs7c0dBbkNXLFFBQVE7b0dBQVIsUUFBUTs0RkFBUixRQUFRO2tCQUpwQixJQUFJO21CQUFDO29CQUNMLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNWIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEN1c3RvbU1vZHVsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY3VzdG9tLW1vZHVsZS1jb25maWctc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuXHRJTW9kdWxlQ29uZmlnLFxuXHRjb3VudHJ5Q29kZSxcblx0ZmxhZ0V4dGVuc2lvbixcblx0ZmxhZ1NpemVzLFxuXHRmbGFnVHlwaWVzLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuQFBpcGUoe1xuXHRuYW1lOiBcImZsYWdcIixcblx0cHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRmxhZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0cHJpdmF0ZSByZWFkb25seSBmbGFnVXJsID0gXCJodHRwczovL2ZsYWdjZG4uY29tXCI7XG5cdHByaXZhdGUgX0NNQ1M6IElNb2R1bGVDb25maWcgPSBpbmplY3QoQ3VzdG9tTW9kdWxlQ29uZmlnU2VydmljZSkuY29uZmlnO1xuXG5cdC8qXG5cdCAqIHRyYW5zZm9ybVxuXHQgKiBAcGFyYW0gdmFsdWUgY291bnRyeUNvZGVcblx0ICogQHBhcmFtIGV4dGVudGlvbiBmbGFnRXh0ZW5zaW9uXG5cdCAqIEBwYXJhbSBmbGFnVHlwZSBmbGFnVHlwaWVzXG5cdCAqIEBwYXJhbSBzaXplIGZsYWdTaXplczx0eXBlb2YgZmxhZ1R5cGU+XG5cdCAqIEByZXR1cm5zIHN0cmluZyB8IG51bGxcblx0ICovXG5cblx0dHJhbnNmb3JtKFxuXHRcdHZhbHVlOiBjb3VudHJ5Q29kZSB8IHVuZGVmaW5lZCxcblx0XHRleHRlbnRpb246IGZsYWdFeHRlbnNpb24gPSB0aGlzLl9DTUNTLmZsYWdFeHRlbnNpb25zLFxuXHRcdGZsYWdUeXBlOiBmbGFnVHlwaWVzID0gdGhpcy5fQ01DUy5mbGFnVHlwZSxcblx0XHRzaXplOiBmbGFnU2l6ZXM8dHlwZW9mIGZsYWdUeXBlPiA9IHRoaXMuX0NNQ1MuZmxhZ1NpemVcblx0KTogc3RyaW5nIHwgbnVsbCB7XG5cdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJpbFwiKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRgICAgICAgIPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIFNISVQgIGlzIG5vdCBFeGlzdCBldmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0MDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZSRUUgUEFMRVNUSU5FXG4gICAgICAgIPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e4YFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiBcIjQwNCBNRiAhISFcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGAke3RoaXMuZmxhZ1VybH0vJHtcblx0XHRcdFx0ZXh0ZW50aW9uICE9PSBcInN2Z1wiID8gc2l6ZSA6IFwiXCJcblx0XHRcdH0vJHt2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpfS4ke2V4dGVudGlvbn1gO1xuXHRcdH1cblx0fVxufVxuIl19