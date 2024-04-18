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
import type { Ingredient } from './Ingredient';
import {
    IngredientFromJSON,
    IngredientFromJSONTyped,
    IngredientToJSON,
} from './Ingredient';
import type { UserFileView } from './UserFileView';
import {
    UserFileViewFromJSON,
    UserFileViewFromJSONTyped,
    UserFileViewToJSON,
} from './UserFileView';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedStep
 */
export interface PatchedStep {
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    instruction?: string;
    /**
     * 
     * @type {Array<Ingredient>}
     * @memberof PatchedStep
     */
    ingredients?: Array<Ingredient>;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    readonly instructionsMarkdown?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    time?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedStep
     */
    showAsHeader?: boolean;
    /**
     * 
     * @type {UserFileView}
     * @memberof PatchedStep
     */
    file?: UserFileView;
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    stepRecipe?: number;
    /**
     * 
     * @type {any}
     * @memberof PatchedStep
     */
    readonly stepRecipeData?: any;
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    readonly numrecipe?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedStep
     */
    showIngredientsTable?: boolean;
}

/**
 * Check if a given object implements the PatchedStep interface.
 */
export function instanceOfPatchedStep(value: object): boolean {
    return true;
}

export function PatchedStepFromJSON(json: any): PatchedStep {
    return PatchedStepFromJSONTyped(json, false);
}

export function PatchedStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedStep {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'instruction': json['instruction'] == null ? undefined : json['instruction'],
        'ingredients': json['ingredients'] == null ? undefined : ((json['ingredients'] as Array<any>).map(IngredientFromJSON)),
        'instructionsMarkdown': json['instructions_markdown'] == null ? undefined : json['instructions_markdown'],
        'time': json['time'] == null ? undefined : json['time'],
        'order': json['order'] == null ? undefined : json['order'],
        'showAsHeader': json['show_as_header'] == null ? undefined : json['show_as_header'],
        'file': json['file'] == null ? undefined : UserFileViewFromJSON(json['file']),
        'stepRecipe': json['step_recipe'] == null ? undefined : json['step_recipe'],
        'stepRecipeData': json['step_recipe_data'] == null ? undefined : json['step_recipe_data'],
        'numrecipe': json['numrecipe'] == null ? undefined : json['numrecipe'],
        'showIngredientsTable': json['show_ingredients_table'] == null ? undefined : json['show_ingredients_table'],
    };
}

export function PatchedStepToJSON(value?: Omit<PatchedStep, 'id'|'instructions_markdown'|'step_recipe_data'|'numrecipe'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'instruction': value['instruction'],
        'ingredients': value['ingredients'] == null ? undefined : ((value['ingredients'] as Array<any>).map(IngredientToJSON)),
        'time': value['time'],
        'order': value['order'],
        'show_as_header': value['showAsHeader'],
        'file': UserFileViewToJSON(value['file']),
        'step_recipe': value['stepRecipe'],
        'show_ingredients_table': value['showIngredientsTable'],
    };
}

