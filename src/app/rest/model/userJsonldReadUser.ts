/**
 * Rice Management Service
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPostContext } from './arrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPostContext';


/**
 * 
 */
export interface UserJsonldReadUser { 
    readonly '@id'?: string;
    readonly '@type'?: string;
    '@context'?: ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPostContext;
    email?: string;
    /**
     * The user roles
     */
    roles?: Array<string>;
    createdAt?: string | null;
}

