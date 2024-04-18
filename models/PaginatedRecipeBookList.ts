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
import type { RecipeBook } from './RecipeBook';
import {
    RecipeBookFromJSON,
    RecipeBookFromJSONTyped,
    RecipeBookToJSON,
} from './RecipeBook';

/**
 * 
 * @export
 * @interface PaginatedRecipeBookList
 */
export interface PaginatedRecipeBookList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedRecipeBookList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRecipeBookList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRecipeBookList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<RecipeBook>}
     * @memberof PaginatedRecipeBookList
     */
    results?: Array<RecipeBook>;
}

/**
 * Check if a given object implements the PaginatedRecipeBookList interface.
 */
export function instanceOfPaginatedRecipeBookList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedRecipeBookListFromJSON(json: any): PaginatedRecipeBookList {
    return PaginatedRecipeBookListFromJSONTyped(json, false);
}

export function PaginatedRecipeBookListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedRecipeBookList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(RecipeBookFromJSON)),
    };
}

export function PaginatedRecipeBookListToJSON(value?: PaginatedRecipeBookList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(RecipeBookToJSON)),
    };
}

