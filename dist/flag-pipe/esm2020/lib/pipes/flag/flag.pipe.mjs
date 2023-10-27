import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class FlagPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmxhZy1waXBlL3NyYy9saWIvcGlwZXMvZmxhZy9mbGFnLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxRQUFRO0lBSnJCO1FBS2tCLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztLQWtDakQ7SUFoQ0E7Ozs7Ozs7T0FPRztJQUVILFNBQVMsQ0FDUixLQUE4QixFQUM5QixZQUEyQixLQUFLLEVBQ2hDLFdBQXVCLGNBQWMsRUFDckMsT0FBbUMsS0FBSztRQUV4QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUMxQixPQUFPLENBQUMsS0FBSyxDQUNaOzs7O2lNQUk2TCxDQUM3TCxDQUFDO1lBQ0YsT0FBTyxZQUFZLENBQUM7U0FDcEI7YUFBTTtZQUNOLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUNyQixTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzlCLElBQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUksU0FBUyxFQUFFLENBQUM7U0FDN0M7SUFDRixDQUFDOztzR0FsQ1csUUFBUTtvR0FBUixRQUFROzRGQUFSLFFBQVE7a0JBSnBCLElBQUk7bUJBQUM7b0JBQ0wsSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGNvdW50cnlDb2RlLCBmbGFnRXh0ZW5zaW9uLCBmbGFnU2l6ZXMsIGZsYWdUeXBpZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuQFBpcGUoe1xuXHRuYW1lOiBcImZsYWdcIixcblx0cHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRmxhZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0cHJpdmF0ZSByZWFkb25seSBmbGFnVXJsID0gXCJodHRwczovL2ZsYWdjZG4uY29tXCI7XG5cblx0Lypcblx0ICogdHJhbnNmb3JtXG5cdCAqIEBwYXJhbSB2YWx1ZSBjb3VudHJ5Q29kZVxuXHQgKiBAcGFyYW0gZXh0ZW50aW9uIGZsYWdFeHRlbnNpb25cblx0ICogQHBhcmFtIGZsYWdUeXBlIGZsYWdUeXBpZXNcblx0ICogQHBhcmFtIHNpemUgZmxhZ1NpemVzPHR5cGVvZiBmbGFnVHlwZT5cblx0ICogQHJldHVybnMgc3RyaW5nIHwgbnVsbFxuXHQgKi9cblxuXHR0cmFuc2Zvcm0oXG5cdFx0dmFsdWU6IGNvdW50cnlDb2RlIHwgdW5kZWZpbmVkLFxuXHRcdGV4dGVudGlvbjogZmxhZ0V4dGVuc2lvbiA9IFwicG5nXCIsXG5cdFx0ZmxhZ1R5cGU6IGZsYWdUeXBpZXMgPSBcIkZJWEVEX0hFSUdIVFwiLFxuXHRcdHNpemU6IGZsYWdTaXplczx0eXBlb2YgZmxhZ1R5cGU+ID0gXCJoMjBcIlxuXHQpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSBcImlsXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdGAgICAgICAg8J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgU0hJVCAgaXMgbm90IEV4aXN0IGV2ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRlJFRSBQQUxFU1RJTkVcbiAgICAgICAg8J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7jwn4e18J+HuPCfh7Xwn4e48J+HtfCfh7hgXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIFwiNDA0IE1GICEhIVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gYCR7dGhpcy5mbGFnVXJsfS8ke1xuXHRcdFx0XHRleHRlbnRpb24gIT09IFwic3ZnXCIgPyBzaXplIDogXCJcIlxuXHRcdFx0fS8ke3ZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCl9LiR7ZXh0ZW50aW9ufWA7XG5cdFx0fVxuXHR9XG59XG4iXX0=