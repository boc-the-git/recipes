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
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface PatchedSupermarketCategory
 */
export interface PatchedSupermarketCategory {
    /**
     * 
     * @type {number}
     * @memberof PatchedSupermarketCategory
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedSupermarketCategory
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedSupermarketCategory
     */
    description?: string;
}

/**
 * Check if a given object implements the PatchedSupermarketCategory interface.
 */
export function instanceOfPatchedSupermarketCategory(value: object): boolean {
    return true;
}

export function PatchedSupermarketCategoryFromJSON(json: any): PatchedSupermarketCategory {
    return PatchedSupermarketCategoryFromJSONTyped(json, false);
}

export function PatchedSupermarketCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedSupermarketCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function PatchedSupermarketCategoryToJSON(value?: Omit<PatchedSupermarketCategory, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

