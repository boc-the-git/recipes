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
 * * `true` - true
 * @export
 */
export const DeleteEnum = {
    True: 'true'
} as const;
export type DeleteEnum = typeof DeleteEnum[keyof typeof DeleteEnum];


export function instanceOfDeleteEnum(value: any): boolean {
    return Object.values(DeleteEnum).includes(value);
}

export function DeleteEnumFromJSON(json: any): DeleteEnum {
    return DeleteEnumFromJSONTyped(json, false);
}

export function DeleteEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteEnum {
    return json as DeleteEnum;
}

export function DeleteEnumToJSON(value?: DeleteEnum | null): any {
    return value as any;
}

