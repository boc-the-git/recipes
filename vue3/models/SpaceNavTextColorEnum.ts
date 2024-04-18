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
 * * `BLANK` - -------
 * * `LIGHT` - Light
 * * `DARK` - Dark
 * @export
 */
export const SpaceNavTextColorEnum = {
    Blank: 'BLANK',
    Light: 'LIGHT',
    Dark: 'DARK'
} as const;
export type SpaceNavTextColorEnum = typeof SpaceNavTextColorEnum[keyof typeof SpaceNavTextColorEnum];


export function instanceOfSpaceNavTextColorEnum(value: any): boolean {
    return Object.values(SpaceNavTextColorEnum).includes(value);
}

export function SpaceNavTextColorEnumFromJSON(json: any): SpaceNavTextColorEnum {
    return SpaceNavTextColorEnumFromJSONTyped(json, false);
}

export function SpaceNavTextColorEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceNavTextColorEnum {
    return json as SpaceNavTextColorEnum;
}

export function SpaceNavTextColorEnumToJSON(value?: SpaceNavTextColorEnum | null): any {
    return value as any;
}

