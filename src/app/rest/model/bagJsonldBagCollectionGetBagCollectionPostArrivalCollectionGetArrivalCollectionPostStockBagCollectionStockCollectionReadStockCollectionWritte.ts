/**
 * Rice Management Service
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { StockJsonldBagCollectionGetBagCollectionPostArrivalCollectionGetArrivalCollectionPostStockBagCollectionStockCollectionReadStockCollectionWritte } from './stockJsonldBagCollectionGetBagCollectionPostArrivalCollectionGetArrivalCollectionPostStockBagCollectionStockCollectionReadStockCollectionWritte';
import { ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPostContext } from './arrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPostContext';


/**
 * 
 */
export interface BagJsonldBagCollectionGetBagCollectionPostArrivalCollectionGetArrivalCollectionPostStockBagCollectionStockCollectionReadStockCollectionWritte { 
    readonly '@id'?: string;
    readonly '@type'?: string;
    '@context'?: ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPostContext;
    readonly id?: number;
    quantity?: string;
    stock?: Array<StockJsonldBagCollectionGetBagCollectionPostArrivalCollectionGetArrivalCollectionPostStockBagCollectionStockCollectionReadStockCollectionWritte>;
}

