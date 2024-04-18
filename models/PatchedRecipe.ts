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
import type { Keyword } from './Keyword';
import {
    KeywordFromJSON,
    KeywordFromJSONTyped,
    KeywordToJSON,
} from './Keyword';
import type { PatchedRecipeNutrition } from './PatchedRecipeNutrition';
import {
    PatchedRecipeNutritionFromJSON,
    PatchedRecipeNutritionFromJSONTyped,
    PatchedRecipeNutritionToJSON,
} from './PatchedRecipeNutrition';
import type { Property } from './Property';
import {
    PropertyFromJSON,
    PropertyFromJSONTyped,
    PropertyToJSON,
} from './Property';
import type { Step } from './Step';
import {
    StepFromJSON,
    StepFromJSONTyped,
    StepToJSON,
} from './Step';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedRecipe
 */
export interface PatchedRecipe {
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipe
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipe
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipe
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipe
     */
    readonly image?: string | null;
    /**
     * 
     * @type {Array<Keyword>}
     * @memberof PatchedRecipe
     */
    keywords?: Array<Keyword>;
    /**
     * 
     * @type {Array<Step>}
     * @memberof PatchedRecipe
     */
    steps?: Array<Step>;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipe
     */
    workingTime?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipe
     */
    waitingTime?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipe
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedRecipe
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedRecipe
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipe
     */
    sourceUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedRecipe
     */
    internal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedRecipe
     */
    showIngredientOverview?: boolean;
    /**
     * 
     * @type {PatchedRecipeNutrition}
     * @memberof PatchedRecipe
     */
    nutrition?: PatchedRecipeNutrition | null;
    /**
     * 
     * @type {Array<Property>}
     * @memberof PatchedRecipe
     */
    properties?: Array<Property>;
    /**
     * 
     * @type {any}
     * @memberof PatchedRecipe
     */
    readonly foodProperties?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipe
     */
    servings?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipe
     */
    filePath?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedRecipe
     */
    servingsText?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedRecipe
     */
    readonly rating?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedRecipe
     */
    readonly lastCooked?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedRecipe
     */
    _private?: boolean;
    /**
     * 
     * @type {Array<User>}
     * @memberof PatchedRecipe
     */
    shared?: Array<User>;
}

/**
 * Check if a given object implements the PatchedRecipe interface.
 */
export function instanceOfPatchedRecipe(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedRecipeFromJSON(json: any): PatchedRecipe {
    return PatchedRecipeFromJSONTyped(json, false);
}

export function PatchedRecipeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRecipe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'keywords': !exists(json, 'keywords') ? undefined : ((json['keywords'] as Array<any>).map(KeywordFromJSON)),
        'steps': !exists(json, 'steps') ? undefined : ((json['steps'] as Array<any>).map(StepFromJSON)),
        'workingTime': !exists(json, 'working_time') ? undefined : json['working_time'],
        'waitingTime': !exists(json, 'waiting_time') ? undefined : json['waiting_time'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'sourceUrl': !exists(json, 'source_url') ? undefined : json['source_url'],
        'internal': !exists(json, 'internal') ? undefined : json['internal'],
        'showIngredientOverview': !exists(json, 'show_ingredient_overview') ? undefined : json['show_ingredient_overview'],
        'nutrition': !exists(json, 'nutrition') ? undefined : PatchedRecipeNutritionFromJSON(json['nutrition']),
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(PropertyFromJSON)),
        'foodProperties': !exists(json, 'food_properties') ? undefined : json['food_properties'],
        'servings': !exists(json, 'servings') ? undefined : json['servings'],
        'filePath': !exists(json, 'file_path') ? undefined : json['file_path'],
        'servingsText': !exists(json, 'servings_text') ? undefined : json['servings_text'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'lastCooked': !exists(json, 'last_cooked') ? undefined : (json['last_cooked'] === null ? null : new Date(json['last_cooked'])),
        '_private': !exists(json, 'private') ? undefined : json['private'],
        'shared': !exists(json, 'shared') ? undefined : ((json['shared'] as Array<any>).map(UserFromJSON)),
    };
}

export function PatchedRecipeToJSON(value?: PatchedRecipe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'keywords': value.keywords === undefined ? undefined : ((value.keywords as Array<any>).map(KeywordToJSON)),
        'steps': value.steps === undefined ? undefined : ((value.steps as Array<any>).map(StepToJSON)),
        'working_time': value.workingTime,
        'waiting_time': value.waitingTime,
        'source_url': value.sourceUrl,
        'internal': value.internal,
        'show_ingredient_overview': value.showIngredientOverview,
        'nutrition': PatchedRecipeNutritionToJSON(value.nutrition),
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(PropertyToJSON)),
        'servings': value.servings,
        'file_path': value.filePath,
        'servings_text': value.servingsText,
        'private': value._private,
        'shared': value.shared === undefined ? undefined : ((value.shared as Array<any>).map(UserToJSON)),
    };
}

