/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `TANDOOR` - Tandoor
 * * `BOOTSTRAP` - Bootstrap
 * * `DARKLY` - Darkly
 * * `FLATLY` - Flatly
 * * `SUPERHERO` - Superhero
 * * `TANDOOR_DARK` - Tandoor Dark (INCOMPLETE)
 * @export
 */
export const ThemeEnum = {
    Tandoor: 'TANDOOR',
    Bootstrap: 'BOOTSTRAP',
    Darkly: 'DARKLY',
    Flatly: 'FLATLY',
    Superhero: 'SUPERHERO',
    TandoorDark: 'TANDOOR_DARK'
} as const;
export type ThemeEnum = typeof ThemeEnum[keyof typeof ThemeEnum];


export function instanceOfThemeEnum(value: any): boolean {
    return Object.values(ThemeEnum).includes(value);
}

export function ThemeEnumFromJSON(json: any): ThemeEnum {
    return ThemeEnumFromJSONTyped(json, false);
}

export function ThemeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemeEnum {
    return json as ThemeEnum;
}

export function ThemeEnumToJSON(value?: ThemeEnum | null): any {
    return value as any;
}

