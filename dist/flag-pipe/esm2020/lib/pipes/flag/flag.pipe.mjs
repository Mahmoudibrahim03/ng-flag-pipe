import { Pipe, inject } from "@angular/core";
import { CustomModuleConfigService } from "../../services/custom-module-config-service.service";
import * as i0 from "@angular/core";
export class FlagPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmxhZy1waXBlL3NyYy9saWIvcGlwZXMvZmxhZy9mbGFnLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOztBQU9oRyxNQUFNLE9BQU8sUUFBUTtJQUpyQjtRQUtrQixZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDekMsVUFBSyxHQUE4QixNQUFNLENBQ2hELHlCQUF5QixDQUN6QixDQUFDO0tBa0NGO0lBaENBOzs7Ozs7O09BT0c7SUFFSCxTQUFTLENBQ1IsS0FBOEIsRUFDOUIsWUFBMkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUMzRCxXQUF1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQ2pELE9BQW1DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFFN0QsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FDWjs7OztpTUFJNkwsQ0FDN0wsQ0FBQztZQUNGLE9BQU8sWUFBWSxDQUFDO1NBQ3BCO2FBQU07WUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFDckIsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUM5QixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQzdDO0lBQ0YsQ0FBQzs7c0dBckNXLFFBQVE7b0dBQVIsUUFBUTs0RkFBUixRQUFRO2tCQUpwQixJQUFJO21CQUFDO29CQUNMLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNWIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEN1c3RvbU1vZHVsZUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY3VzdG9tLW1vZHVsZS1jb25maWctc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBjb3VudHJ5Q29kZSwgZmxhZ0V4dGVuc2lvbiwgZmxhZ1NpemVzLCBmbGFnVHlwaWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbkBQaXBlKHtcblx0bmFtZTogXCJmbGFnXCIsXG5cdHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZsYWdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHByaXZhdGUgcmVhZG9ubHkgZmxhZ1VybCA9IFwiaHR0cHM6Ly9mbGFnY2RuLmNvbVwiO1xuXHRwcml2YXRlIF9DTUNTOiBDdXN0b21Nb2R1bGVDb25maWdTZXJ2aWNlID0gaW5qZWN0KFxuXHRcdEN1c3RvbU1vZHVsZUNvbmZpZ1NlcnZpY2Vcblx0KTtcblxuXHQvKlxuXHQgKiB0cmFuc2Zvcm1cblx0ICogQHBhcmFtIHZhbHVlIGNvdW50cnlDb2RlXG5cdCAqIEBwYXJhbSBleHRlbnRpb24gZmxhZ0V4dGVuc2lvblxuXHQgKiBAcGFyYW0gZmxhZ1R5cGUgZmxhZ1R5cGllc1xuXHQgKiBAcGFyYW0gc2l6ZSBmbGFnU2l6ZXM8dHlwZW9mIGZsYWdUeXBlPlxuXHQgKiBAcmV0dXJucyBzdHJpbmcgfCBudWxsXG5cdCAqL1xuXG5cdHRyYW5zZm9ybShcblx0XHR2YWx1ZTogY291bnRyeUNvZGUgfCB1bmRlZmluZWQsXG5cdFx0ZXh0ZW50aW9uOiBmbGFnRXh0ZW5zaW9uID0gdGhpcy5fQ01DUy5jb25maWcuZmxhZ0V4dGVuc2lvbnMsXG5cdFx0ZmxhZ1R5cGU6IGZsYWdUeXBpZXMgPSB0aGlzLl9DTUNTLmNvbmZpZy5mbGFnVHlwZSxcblx0XHRzaXplOiBmbGFnU2l6ZXM8dHlwZW9mIGZsYWdUeXBlPiA9IHRoaXMuX0NNQ1MuY29uZmlnLmZsYWdTaXplXG5cdCk6IHN0cmluZyB8IG51bGwge1xuXHRcdGlmICghdmFsdWUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPT09IFwiaWxcIikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdFx0YCAgICAgICDwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBTSElUICBpcyBub3QgRXhpc3QgZXZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDA0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGUkVFIFBBTEVTVElORVxuICAgICAgICDwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuGBcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gXCI0MDQgTUYgISEhXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBgJHt0aGlzLmZsYWdVcmx9LyR7XG5cdFx0XHRcdGV4dGVudGlvbiAhPT0gXCJzdmdcIiA/IHNpemUgOiBcIlwiXG5cdFx0XHR9LyR7dmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKX0uJHtleHRlbnRpb259YDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==