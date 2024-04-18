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
import type { ShoppingListRecipe } from './ShoppingListRecipe';
import {
    ShoppingListRecipeFromJSON,
    ShoppingListRecipeFromJSONTyped,
    ShoppingListRecipeToJSON,
} from './ShoppingListRecipe';

/**
 * 
 * @export
 * @interface PaginatedShoppingListRecipeList
 */
export interface PaginatedShoppingListRecipeList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedShoppingListRecipeList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedShoppingListRecipeList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedShoppingListRecipeList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ShoppingListRecipe>}
     * @memberof PaginatedShoppingListRecipeList
     */
    results?: Array<ShoppingListRecipe>;
}

/**
 * Check if a given object implements the PaginatedShoppingListRecipeList interface.
 */
export function instanceOfPaginatedShoppingListRecipeList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedShoppingListRecipeListFromJSON(json: any): PaginatedShoppingListRecipeList {
    return PaginatedShoppingListRecipeListFromJSONTyped(json, false);
}

export function PaginatedShoppingListRecipeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedShoppingListRecipeList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(ShoppingListRecipeFromJSON)),
    };
}

export function PaginatedShoppingListRecipeListToJSON(value?: PaginatedShoppingListRecipeList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(ShoppingListRecipeToJSON)),
    };
}

