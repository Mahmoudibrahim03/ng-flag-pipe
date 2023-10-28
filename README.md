# ng-Flag Pipe

[ Component In-progress ]

## Flag Pipe : is an Angular library

#### that provides a pipe to `[src]` attribute on `<img>` to dynamically import flag image path.

## Getting Started

### Dependencies

-   Angular 11.2.0 -> latest version

### Installing

-   `npm install flag-pipe` OR
    `yarn add flag-pipe` OR
    `pnpm add flag-pipe`
-   #### Import `FlagPipeModule` in your `AppModule` or `SharedModule`:

```typescript [AppModule.ts] linenums = "1"
import { FlagPipeModule } from "flag-pipe";
```

-   #### Import `FlagPipeModule` in `ngModule`:

```typescript [AppModule.ts] linenums = "1"
@NgModule({
  imports: [
		flagPipeModule.forRoot({
			config: {
				flagExtensions: "png",
				flagType: "FIXED_HEIGHT",
				flagSize: "h20",
			},
		}),
  ]
})
```

### Usage :

-   #### Use `flag` pipe in your template (Required):
-   #### Use CountryCode as `[ ISO 3166-1 alpha-2 ]` format
    <sub> -> `CountryCode` type already implemented in `flag-pipe` library you can use it as `CountryCode` type.
    REF : [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) +
    [Country Codes in Json](https://flagcdn.com/en/codes.json)
    </sub>
-   #### Use `flagExtension` as [ "png" | "svg" | "webp" ]
    <sub> -> `flagExtension` type already implemented in `flag-pipe` library you can use it as `flagExtension` type.</sub>
-   #### Use `flagTypies` [ 'WAVY' | 'FIXED_HEIGHT' | 'FIXED_WIDTH' ]
    <sub> -> `flagTypies` type already implemented in `flag-pipe` library you can use it as `flagTypies` type.</sub>
-   #### Use `flagSize` [ "w160" | "h240" | "256x192" ]

    <sub> -> `FlagSize` type already implemented in `flag-pipe` library you can use it as `FlagSize` type.</sub>

    | flag Type        | FIXED_HEIGHT | FIXED_WIDTH | WAVY      |
    | ---------------- | ------------ | ----------- | --------- |
    | flag Size Format | ` h240`      | `w160`      | `256x192` |

---

<br/>
Full Example :

```html [app.component.html] linenums = "1"
<img [src]="'qa' | flag : 'svg' : flagType : 'w160'" />
```

## Future Plans

-   [ In-Progress ] Create a component to use it as `<flag>` tag.
-   [ ] Add more features to the component.
-   [ ] CI/CD with Github Actions.

## Acknowledgments

Inspirations.

-   [FlagPedia](https://flagpedia.net/download/api)

## Contributions

This project is an easy and simple project to contribute to. Feel free to open issues and pull requests.
