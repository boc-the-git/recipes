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
import type { SupermarketCategoryRelation } from './SupermarketCategoryRelation';
import {
    SupermarketCategoryRelationFromJSON,
    SupermarketCategoryRelationFromJSONTyped,
    SupermarketCategoryRelationToJSON,
} from './SupermarketCategoryRelation';

/**
 * 
 * @export
 * @interface PaginatedSupermarketCategoryRelationList
 */
export interface PaginatedSupermarketCategoryRelationList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSupermarketCategoryRelationList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSupermarketCategoryRelationList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSupermarketCategoryRelationList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<SupermarketCategoryRelation>}
     * @memberof PaginatedSupermarketCategoryRelationList
     */
    results?: Array<SupermarketCategoryRelation>;
}

/**
 * Check if a given object implements the PaginatedSupermarketCategoryRelationList interface.
 */
export function instanceOfPaginatedSupermarketCategoryRelationList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedSupermarketCategoryRelationListFromJSON(json: any): PaginatedSupermarketCategoryRelationList {
    return PaginatedSupermarketCategoryRelationListFromJSONTyped(json, false);
}

export function PaginatedSupermarketCategoryRelationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSupermarketCategoryRelationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(SupermarketCategoryRelationFromJSON)),
    };
}

export function PaginatedSupermarketCategoryRelationListToJSON(value?: PaginatedSupermarketCategoryRelationList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(SupermarketCategoryRelationToJSON)),
    };
}

