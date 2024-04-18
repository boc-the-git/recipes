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
import type { FoodInheritField } from './FoodInheritField';
import {
    FoodInheritFieldFromJSON,
    FoodInheritFieldFromJSONTyped,
    FoodInheritFieldToJSON,
} from './FoodInheritField';
import type { PatchedSpaceImage } from './PatchedSpaceImage';
import {
    PatchedSpaceImageFromJSON,
    PatchedSpaceImageFromJSONTyped,
    PatchedSpaceImageToJSON,
} from './PatchedSpaceImage';
import type { SpaceNavTextColorEnum } from './SpaceNavTextColorEnum';
import {
    SpaceNavTextColorEnumFromJSON,
    SpaceNavTextColorEnumFromJSONTyped,
    SpaceNavTextColorEnumToJSON,
} from './SpaceNavTextColorEnum';
import type { SpaceThemeEnum } from './SpaceThemeEnum';
import {
    SpaceThemeEnumFromJSON,
    SpaceThemeEnumFromJSONTyped,
    SpaceThemeEnumToJSON,
} from './SpaceThemeEnum';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedSpace
 */
export interface PatchedSpace {
    /**
     * 
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedSpace
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly createdBy?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedSpace
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PatchedSpace
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly maxRecipes?: number;
    /**
     * Maximum file storage for space in MB. 0 for unlimited, -1 to disable file upload.
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly maxFileStorageMb?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly maxUsers?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedSpace
     */
    readonly allowSharing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedSpace
     */
    readonly demo?: boolean;
    /**
     * 
     * @type {Array<FoodInheritField>}
     * @memberof PatchedSpace
     */
    foodInherit?: Array<FoodInheritField>;
    /**
     * 
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly userCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly recipeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedSpace
     */
    readonly fileSizeMb?: number;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    image?: PatchedSpaceImage | null;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    navLogo?: PatchedSpaceImage | null;
    /**
     * 
     * @type {SpaceThemeEnum}
     * @memberof PatchedSpace
     */
    spaceTheme?: SpaceThemeEnum;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    customSpaceTheme?: PatchedSpaceImage | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedSpace
     */
    navBgColor?: string;
    /**
     * 
     * @type {SpaceNavTextColorEnum}
     * @memberof PatchedSpace
     */
    navTextColor?: SpaceNavTextColorEnum;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    logoColor32?: PatchedSpaceImage | null;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    logoColor128?: PatchedSpaceImage | null;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    logoColor144?: PatchedSpaceImage | null;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    logoColor180?: PatchedSpaceImage | null;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    logoColor192?: PatchedSpaceImage | null;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    logoColor512?: PatchedSpaceImage | null;
    /**
     * 
     * @type {PatchedSpaceImage}
     * @memberof PatchedSpace
     */
    logoColorSvg?: PatchedSpaceImage | null;
}

/**
 * Check if a given object implements the PatchedSpace interface.
 */
export function instanceOfPatchedSpace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedSpaceFromJSON(json: any): PatchedSpace {
    return PatchedSpaceFromJSONTyped(json, false);
}

export function PatchedSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedSpace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'maxRecipes': !exists(json, 'max_recipes') ? undefined : json['max_recipes'],
        'maxFileStorageMb': !exists(json, 'max_file_storage_mb') ? undefined : json['max_file_storage_mb'],
        'maxUsers': !exists(json, 'max_users') ? undefined : json['max_users'],
        'allowSharing': !exists(json, 'allow_sharing') ? undefined : json['allow_sharing'],
        'demo': !exists(json, 'demo') ? undefined : json['demo'],
        'foodInherit': !exists(json, 'food_inherit') ? undefined : ((json['food_inherit'] as Array<any>).map(FoodInheritFieldFromJSON)),
        'userCount': !exists(json, 'user_count') ? undefined : json['user_count'],
        'recipeCount': !exists(json, 'recipe_count') ? undefined : json['recipe_count'],
        'fileSizeMb': !exists(json, 'file_size_mb') ? undefined : json['file_size_mb'],
        'image': !exists(json, 'image') ? undefined : PatchedSpaceImageFromJSON(json['image']),
        'navLogo': !exists(json, 'nav_logo') ? undefined : PatchedSpaceImageFromJSON(json['nav_logo']),
        'spaceTheme': !exists(json, 'space_theme') ? undefined : SpaceThemeEnumFromJSON(json['space_theme']),
        'customSpaceTheme': !exists(json, 'custom_space_theme') ? undefined : PatchedSpaceImageFromJSON(json['custom_space_theme']),
        'navBgColor': !exists(json, 'nav_bg_color') ? undefined : json['nav_bg_color'],
        'navTextColor': !exists(json, 'nav_text_color') ? undefined : SpaceNavTextColorEnumFromJSON(json['nav_text_color']),
        'logoColor32': !exists(json, 'logo_color_32') ? undefined : PatchedSpaceImageFromJSON(json['logo_color_32']),
        'logoColor128': !exists(json, 'logo_color_128') ? undefined : PatchedSpaceImageFromJSON(json['logo_color_128']),
        'logoColor144': !exists(json, 'logo_color_144') ? undefined : PatchedSpaceImageFromJSON(json['logo_color_144']),
        'logoColor180': !exists(json, 'logo_color_180') ? undefined : PatchedSpaceImageFromJSON(json['logo_color_180']),
        'logoColor192': !exists(json, 'logo_color_192') ? undefined : PatchedSpaceImageFromJSON(json['logo_color_192']),
        'logoColor512': !exists(json, 'logo_color_512') ? undefined : PatchedSpaceImageFromJSON(json['logo_color_512']),
        'logoColorSvg': !exists(json, 'logo_color_svg') ? undefined : PatchedSpaceImageFromJSON(json['logo_color_svg']),
    };
}

export function PatchedSpaceToJSON(value?: PatchedSpace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'message': value.message,
        'food_inherit': value.foodInherit === undefined ? undefined : ((value.foodInherit as Array<any>).map(FoodInheritFieldToJSON)),
        'image': PatchedSpaceImageToJSON(value.image),
        'nav_logo': PatchedSpaceImageToJSON(value.navLogo),
        'space_theme': SpaceThemeEnumToJSON(value.spaceTheme),
        'custom_space_theme': PatchedSpaceImageToJSON(value.customSpaceTheme),
        'nav_bg_color': value.navBgColor,
        'nav_text_color': SpaceNavTextColorEnumToJSON(value.navTextColor),
        'logo_color_32': PatchedSpaceImageToJSON(value.logoColor32),
        'logo_color_128': PatchedSpaceImageToJSON(value.logoColor128),
        'logo_color_144': PatchedSpaceImageToJSON(value.logoColor144),
        'logo_color_180': PatchedSpaceImageToJSON(value.logoColor180),
        'logo_color_192': PatchedSpaceImageToJSON(value.logoColor192),
        'logo_color_512': PatchedSpaceImageToJSON(value.logoColor512),
        'logo_color_svg': PatchedSpaceImageToJSON(value.logoColorSvg),
    };
}

