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
 * 
 * @export
 * @interface PatchedRecipeNutrition
 */
export interface PatchedRecipeNutrition {
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeNutrition
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeNutrition
     */
    carbohydrates: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeNutrition
     */
    fats: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeNutrition
     */
    proteins: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipeNutrition
     */
    calories: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipeNutrition
     */
    source?: string | null;
}

/**
 * Check if a given object implements the PatchedRecipeNutrition interface.
 */
export function instanceOfPatchedRecipeNutrition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "carbohydrates" in value;
    isInstance = isInstance && "fats" in value;
    isInstance = isInstance && "proteins" in value;
    isInstance = isInstance && "calories" in value;

    return isInstance;
}

export function PatchedRecipeNutritionFromJSON(json: any): PatchedRecipeNutrition {
    return PatchedRecipeNutritionFromJSONTyped(json, false);
}

export function PatchedRecipeNutritionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRecipeNutrition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'carbohydrates': json['carbohydrates'],
        'fats': json['fats'],
        'proteins': json['proteins'],
        'calories': json['calories'],
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function PatchedRecipeNutritionToJSON(value?: PatchedRecipeNutrition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'carbohydrates': value.carbohydrates,
        'fats': value.fats,
        'proteins': value.proteins,
        'calories': value.calories,
        'source': value.source,
    };
}

