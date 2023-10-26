import { Pipe, PipeTransform } from "@angular/core";
import { countryCode, flagExtension, flagSizes, flagTypies } from "../../types";

@Pipe({
	name: "flag",
	pure: true,
})
export class FlagPipe implements PipeTransform {
	private readonly flagUrl = "https://flagcdn.com";

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
		extention: flagExtension = "png",
		flagType: flagTypies = "FIXED_HEIGHT",
		size: flagSizes<typeof flagType> = "h20"
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
