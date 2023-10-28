import { Pipe, PipeTransform, inject } from "@angular/core";
import { CustomModuleConfigService } from "../../services/custom-module-config-service.service";
import {
	IModuleConfig,
	countryCode,
	flagExtension,
	flagSizes,
	flagTypies,
} from "../../types";

@Pipe({
	name: "flag",
	pure: true,
})
export class FlagPipe implements PipeTransform {
	private readonly flagUrl = "https://flagcdn.com";
	private _CMCS: IModuleConfig = inject(CustomModuleConfigService).config;

	/*
	 * transform
	 * @param value countryCode
	 * @param extention flagExtension
	 * @param flagType flagTypies
	 * @param size flagSizes<typeof flagType>
	 * @returns string | null
	 */

	transform(
		value: countryCode | undefined,
		extention: flagExtension = this._CMCS.flagExtensions,
		flagType: flagTypies = this._CMCS.flagType,
		size: flagSizes<typeof flagType> = this._CMCS.flagSize
	): string | null {
		if (!value) {
			return null;
		} else if (value === "il") {
			console.error(
				`       🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸
                                    This SHIT  is not Exist ever
                                                404
                                          FREE PALESTINE
        🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸🇵🇸`
			);
			return "404 MF !!!";
		} else {
			return `${this.flagUrl}/${
				extention !== "svg" ? size : ""
			}/${value.toLocaleLowerCase()}.${extention}`;
		}
	}
}
