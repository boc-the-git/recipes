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

import { exists, mapValues } from '../runtime';
/**
 * Adds nested create feature
 * @export
 * @interface RecipeFlat
 */
export interface RecipeFlat {
    /**
     * 
     * @type {number}
     * @memberof RecipeFlat
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeFlat
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeFlat
     */
    image?: string | null;
}

/**
 * Check if a given object implements the RecipeFlat interface.
 */
export function instanceOfRecipeFlat(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function RecipeFlatFromJSON(json: any): RecipeFlat {
    return RecipeFlatFromJSONTyped(json, false);
}

export function RecipeFlatFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeFlat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function RecipeFlatToJSON(value?: RecipeFlat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'image': value.image,
    };
}

