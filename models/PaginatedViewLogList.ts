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
import type { ViewLog } from './ViewLog';
import {
    ViewLogFromJSON,
    ViewLogFromJSONTyped,
    ViewLogToJSON,
} from './ViewLog';

/**
 * 
 * @export
 * @interface PaginatedViewLogList
 */
export interface PaginatedViewLogList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedViewLogList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedViewLogList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedViewLogList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ViewLog>}
     * @memberof PaginatedViewLogList
     */
    results?: Array<ViewLog>;
}

/**
 * Check if a given object implements the PaginatedViewLogList interface.
 */
export function instanceOfPaginatedViewLogList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedViewLogListFromJSON(json: any): PaginatedViewLogList {
    return PaginatedViewLogListFromJSONTyped(json, false);
}

export function PaginatedViewLogListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedViewLogList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(ViewLogFromJSON)),
    };
}

export function PaginatedViewLogListToJSON(value?: PaginatedViewLogList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(ViewLogToJSON)),
    };
}

