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
import type { DefaultPageEnum } from './DefaultPageEnum';
import {
    DefaultPageEnumFromJSON,
    DefaultPageEnumFromJSONTyped,
    DefaultPageEnumToJSON,
} from './DefaultPageEnum';
import type { FoodInheritField } from './FoodInheritField';
import {
    FoodInheritFieldFromJSON,
    FoodInheritFieldFromJSONTyped,
    FoodInheritFieldToJSON,
} from './FoodInheritField';
import type { ThemeEnum } from './ThemeEnum';
import {
    ThemeEnumFromJSON,
    ThemeEnumFromJSONTyped,
    ThemeEnumToJSON,
} from './ThemeEnum';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';
import type { UserFileView } from './UserFileView';
import {
    UserFileViewFromJSON,
    UserFileViewFromJSONTyped,
    UserFileViewToJSON,
} from './UserFileView';
import type { UserPreferenceNavTextColorEnum } from './UserPreferenceNavTextColorEnum';
import {
    UserPreferenceNavTextColorEnumFromJSON,
    UserPreferenceNavTextColorEnumFromJSONTyped,
    UserPreferenceNavTextColorEnumToJSON,
} from './UserPreferenceNavTextColorEnum';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedUserPreference
 */
export interface PatchedUserPreference {
    /**
     * 
     * @type {number}
     * @memberof PatchedUserPreference
     */
    user?: number;
    /**
     * 
     * @type {UserFileView}
     * @memberof PatchedUserPreference
     */
    image?: UserFileView;
    /**
     * 
     * @type {ThemeEnum}
     * @memberof PatchedUserPreference
     */
    theme?: ThemeEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserPreference
     */
    navBgColor?: string;
    /**
     * 
     * @type {UserPreferenceNavTextColorEnum}
     * @memberof PatchedUserPreference
     */
    navTextColor?: UserPreferenceNavTextColorEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    navShowLogo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserPreference
     */
    defaultUnit?: string;
    /**
     * 
     * @type {DefaultPageEnum}
     * @memberof PatchedUserPreference
     */
    defaultPage?: DefaultPageEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    useFractions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    useKj?: boolean;
    /**
     * 
     * @type {Array<User>}
     * @memberof PatchedUserPreference
     */
    planShare?: Array<User>;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    navSticky?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedUserPreference
     */
    ingredientDecimals?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    comments?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedUserPreference
     */
    shoppingAutoSync?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    mealplanAutoaddShopping?: boolean;
    /**
     * 
     * @type {FoodInheritField}
     * @memberof PatchedUserPreference
     */
    readonly foodInheritDefault?: FoodInheritField;
    /**
     * 
     * @type {number}
     * @memberof PatchedUserPreference
     */
    defaultDelay?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    mealplanAutoincludeRelated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    mealplanAutoexcludeOnhand?: boolean;
    /**
     * 
     * @type {Array<User>}
     * @memberof PatchedUserPreference
     */
    shoppingShare?: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof PatchedUserPreference
     */
    shoppingRecentDays?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserPreference
     */
    csvDelim?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserPreference
     */
    csvPrefix?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    filterToSupermarket?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    shoppingAddOnhand?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    leftHanded?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    showStepIngredients?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUserPreference
     */
    readonly foodChildrenExist?: boolean;
}

/**
 * Check if a given object implements the PatchedUserPreference interface.
 */
export function instanceOfPatchedUserPreference(value: object): boolean {
    return true;
}

export function PatchedUserPreferenceFromJSON(json: any): PatchedUserPreference {
    return PatchedUserPreferenceFromJSONTyped(json, false);
}

export function PatchedUserPreferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUserPreference {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'] == null ? undefined : json['user'],
        'image': json['image'] == null ? undefined : UserFileViewFromJSON(json['image']),
        'theme': json['theme'] == null ? undefined : ThemeEnumFromJSON(json['theme']),
        'navBgColor': json['nav_bg_color'] == null ? undefined : json['nav_bg_color'],
        'navTextColor': json['nav_text_color'] == null ? undefined : UserPreferenceNavTextColorEnumFromJSON(json['nav_text_color']),
        'navShowLogo': json['nav_show_logo'] == null ? undefined : json['nav_show_logo'],
        'defaultUnit': json['default_unit'] == null ? undefined : json['default_unit'],
        'defaultPage': json['default_page'] == null ? undefined : DefaultPageEnumFromJSON(json['default_page']),
        'useFractions': json['use_fractions'] == null ? undefined : json['use_fractions'],
        'useKj': json['use_kj'] == null ? undefined : json['use_kj'],
        'planShare': json['plan_share'] == null ? undefined : ((json['plan_share'] as Array<any>).map(UserFromJSON)),
        'navSticky': json['nav_sticky'] == null ? undefined : json['nav_sticky'],
        'ingredientDecimals': json['ingredient_decimals'] == null ? undefined : json['ingredient_decimals'],
        'comments': json['comments'] == null ? undefined : json['comments'],
        'shoppingAutoSync': json['shopping_auto_sync'] == null ? undefined : json['shopping_auto_sync'],
        'mealplanAutoaddShopping': json['mealplan_autoadd_shopping'] == null ? undefined : json['mealplan_autoadd_shopping'],
        'foodInheritDefault': json['food_inherit_default'] == null ? undefined : FoodInheritFieldFromJSON(json['food_inherit_default']),
        'defaultDelay': json['default_delay'] == null ? undefined : json['default_delay'],
        'mealplanAutoincludeRelated': json['mealplan_autoinclude_related'] == null ? undefined : json['mealplan_autoinclude_related'],
        'mealplanAutoexcludeOnhand': json['mealplan_autoexclude_onhand'] == null ? undefined : json['mealplan_autoexclude_onhand'],
        'shoppingShare': json['shopping_share'] == null ? undefined : ((json['shopping_share'] as Array<any>).map(UserFromJSON)),
        'shoppingRecentDays': json['shopping_recent_days'] == null ? undefined : json['shopping_recent_days'],
        'csvDelim': json['csv_delim'] == null ? undefined : json['csv_delim'],
        'csvPrefix': json['csv_prefix'] == null ? undefined : json['csv_prefix'],
        'filterToSupermarket': json['filter_to_supermarket'] == null ? undefined : json['filter_to_supermarket'],
        'shoppingAddOnhand': json['shopping_add_onhand'] == null ? undefined : json['shopping_add_onhand'],
        'leftHanded': json['left_handed'] == null ? undefined : json['left_handed'],
        'showStepIngredients': json['show_step_ingredients'] == null ? undefined : json['show_step_ingredients'],
        'foodChildrenExist': json['food_children_exist'] == null ? undefined : json['food_children_exist'],
    };
}

export function PatchedUserPreferenceToJSON(value?: Omit<PatchedUserPreference, 'food_inherit_default'|'food_children_exist'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user': value['user'],
        'image': UserFileViewToJSON(value['image']),
        'theme': ThemeEnumToJSON(value['theme']),
        'nav_bg_color': value['navBgColor'],
        'nav_text_color': UserPreferenceNavTextColorEnumToJSON(value['navTextColor']),
        'nav_show_logo': value['navShowLogo'],
        'default_unit': value['defaultUnit'],
        'default_page': DefaultPageEnumToJSON(value['defaultPage']),
        'use_fractions': value['useFractions'],
        'use_kj': value['useKj'],
        'plan_share': value['planShare'] == null ? undefined : ((value['planShare'] as Array<any>).map(UserToJSON)),
        'nav_sticky': value['navSticky'],
        'ingredient_decimals': value['ingredientDecimals'],
        'comments': value['comments'],
        'shopping_auto_sync': value['shoppingAutoSync'],
        'mealplan_autoadd_shopping': value['mealplanAutoaddShopping'],
        'default_delay': value['defaultDelay'],
        'mealplan_autoinclude_related': value['mealplanAutoincludeRelated'],
        'mealplan_autoexclude_onhand': value['mealplanAutoexcludeOnhand'],
        'shopping_share': value['shoppingShare'] == null ? undefined : ((value['shoppingShare'] as Array<any>).map(UserToJSON)),
        'shopping_recent_days': value['shoppingRecentDays'],
        'csv_delim': value['csvDelim'],
        'csv_prefix': value['csvPrefix'],
        'filter_to_supermarket': value['filterToSupermarket'],
        'shopping_add_onhand': value['shoppingAddOnhand'],
        'left_handed': value['leftHanded'],
        'show_step_ingredients': value['showStepIngredients'],
    };
}

