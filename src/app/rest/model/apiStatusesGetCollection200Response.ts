/**
 * Rice Management Service
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ApiArrivalsGetCollection200ResponseSearch } from './apiArrivalsGetCollection200ResponseSearch';
import { StatusJsonldStatusesCollectionGetStatusesCollectionPost } from './statusJsonldStatusesCollectionGetStatusesCollectionPost';
import { ApiArrivalsGetCollection200ResponseView } from './apiArrivalsGetCollection200ResponseView';


export interface ApiStatusesGetCollection200Response { 
    member: Array<StatusJsonldStatusesCollectionGetStatusesCollectionPost>;
    totalItems?: number;
    view?: ApiArrivalsGetCollection200ResponseView;
    search?: ApiArrivalsGetCollection200ResponseSearch;
}
