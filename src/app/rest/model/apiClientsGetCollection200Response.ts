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
import { ClientJsonldClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet } from './clientJsonldClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet';
import { ApiArrivalsGetCollection200ResponseView } from './apiArrivalsGetCollection200ResponseView';


export interface ApiClientsGetCollection200Response { 
    member: Array<ClientJsonldClientCollectionGetClientCollectionPostClientCollectionPutGenderCollectionGet>;
    totalItems?: number;
    view?: ApiArrivalsGetCollection200ResponseView;
    search?: ApiArrivalsGetCollection200ResponseSearch;
}

