/**
 * Rice Management Service
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TypeCompteJsonldTypeCompteCollectionGet } from './typeCompteJsonldTypeCompteCollectionGet';
import { ApiArrivalsGetCollection200ResponseSearch } from './apiArrivalsGetCollection200ResponseSearch';
import { ApiArrivalsGetCollection200ResponseView } from './apiArrivalsGetCollection200ResponseView';


export interface ApiRolesGetCollection200Response { 
    member: Array<TypeCompteJsonldTypeCompteCollectionGet>;
    totalItems?: number;
    view?: ApiArrivalsGetCollection200ResponseView;
    search?: ApiArrivalsGetCollection200ResponseSearch;
}

