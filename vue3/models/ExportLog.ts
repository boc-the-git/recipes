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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ExportLog
 */
export interface ExportLog {
    /**
     * 
     * @type {number}
     * @memberof ExportLog
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ExportLog
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ExportLog
     */
    msg?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExportLog
     */
    running?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExportLog
     */
    totalRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof ExportLog
     */
    exportedRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof ExportLog
     */
    cacheDuration?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ExportLog
     */
    possiblyNotExpired?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExportLog
     */
    readonly createdBy: number;
    /**
     * 
     * @type {Date}
     * @memberof ExportLog
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the ExportLog interface.
 */
export function instanceOfExportLog(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('type' in value)) return false;
    if (!('createdBy' in value)) return false;
    if (!('createdAt' in value)) return false;
    return true;
}

export function ExportLogFromJSON(json: any): ExportLog {
    return ExportLogFromJSONTyped(json, false);
}

export function ExportLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'msg': json['msg'] == null ? undefined : json['msg'],
        'running': json['running'] == null ? undefined : json['running'],
        'totalRecipes': json['total_recipes'] == null ? undefined : json['total_recipes'],
        'exportedRecipes': json['exported_recipes'] == null ? undefined : json['exported_recipes'],
        'cacheDuration': json['cache_duration'] == null ? undefined : json['cache_duration'],
        'possiblyNotExpired': json['possibly_not_expired'] == null ? undefined : json['possibly_not_expired'],
        'createdBy': json['created_by'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function ExportLogToJSON(value?: Omit<ExportLog, 'id'|'created_by'|'created_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'msg': value['msg'],
        'running': value['running'],
        'total_recipes': value['totalRecipes'],
        'exported_recipes': value['exportedRecipes'],
        'cache_duration': value['cacheDuration'],
        'possibly_not_expired': value['possiblyNotExpired'],
    };
}

