/**
 * Rice Management Service
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { ApiArrivalsGetCollection200Response } from '../model/apiArrivalsGetCollection200Response';
// @ts-ignore
import { ArrivalArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost } from '../model/arrivalArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost';
// @ts-ignore
import { ArrivalArrivalCollectionPostStatusCollectionPost } from '../model/arrivalArrivalCollectionPostStatusCollectionPost';
// @ts-ignore
import { ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost } from '../model/arrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost';
// @ts-ignore
import { ArrivalJsonldArrivalCollectionPostStatusCollectionPost } from '../model/arrivalJsonldArrivalCollectionPostStatusCollectionPost';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ArrivalService {

    protected basePath = 'http://localhost:8000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
            if (firstBasePath != undefined) {
                basePath = firstBasePath;
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Retrieves the collection of Arrival resources.
     * Retrieves the collection of Arrival resources.
     * @param page The collection page number
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiArrivalsGetCollection(page?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<ApiArrivalsGetCollection200Response>;
    public apiArrivalsGetCollection(page?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<ApiArrivalsGetCollection200Response>>;
    public apiArrivalsGetCollection(page?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<ApiArrivalsGetCollection200Response>>;
    public apiArrivalsGetCollection(page?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>page, 'page');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/arrivals`;
        return this.httpClient.request<ApiArrivalsGetCollection200Response>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a Arrival resource.
     * Retrieves a Arrival resource.
     * @param id Arrival identifier
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiArrivalsIdGet(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>;
    public apiArrivalsIdGet(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>>;
    public apiArrivalsIdGet(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>>;
    public apiArrivalsIdGet(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiArrivalsIdGet.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/arrivals/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates the Arrival resource.
     * Updates the Arrival resource.
     * @param id Arrival identifier
     * @param arrivalArrivalCollectionPostStatusCollectionPost The updated Arrival resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiArrivalsIdPatch(id: string, arrivalArrivalCollectionPostStatusCollectionPost: ArrivalArrivalCollectionPostStatusCollectionPost, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>;
    public apiArrivalsIdPatch(id: string, arrivalArrivalCollectionPostStatusCollectionPost: ArrivalArrivalCollectionPostStatusCollectionPost, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>>;
    public apiArrivalsIdPatch(id: string, arrivalArrivalCollectionPostStatusCollectionPost: ArrivalArrivalCollectionPostStatusCollectionPost, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>>;
    public apiArrivalsIdPatch(id: string, arrivalArrivalCollectionPostStatusCollectionPost: ArrivalArrivalCollectionPostStatusCollectionPost, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiArrivalsIdPatch.');
        }
        if (arrivalArrivalCollectionPostStatusCollectionPost === null || arrivalArrivalCollectionPostStatusCollectionPost === undefined) {
            throw new Error('Required parameter arrivalArrivalCollectionPostStatusCollectionPost was null or undefined when calling apiArrivalsIdPatch.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/merge-patch+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/arrivals/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>('patch', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: arrivalArrivalCollectionPostStatusCollectionPost,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a Arrival resource.
     * Creates a Arrival resource.
     * @param arrivalJsonldArrivalCollectionPostStatusCollectionPost The new Arrival resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiArrivalsPost(arrivalJsonldArrivalCollectionPostStatusCollectionPost: ArrivalJsonldArrivalCollectionPostStatusCollectionPost, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>;
    public apiArrivalsPost(arrivalJsonldArrivalCollectionPostStatusCollectionPost: ArrivalJsonldArrivalCollectionPostStatusCollectionPost, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>>;
    public apiArrivalsPost(arrivalJsonldArrivalCollectionPostStatusCollectionPost: ArrivalJsonldArrivalCollectionPostStatusCollectionPost, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>>;
    public apiArrivalsPost(arrivalJsonldArrivalCollectionPostStatusCollectionPost: ArrivalJsonldArrivalCollectionPostStatusCollectionPost, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        if (arrivalJsonldArrivalCollectionPostStatusCollectionPost === null || arrivalJsonldArrivalCollectionPostStatusCollectionPost === undefined) {
            throw new Error('Required parameter arrivalJsonldArrivalCollectionPostStatusCollectionPost was null or undefined when calling apiArrivalsPost.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (JWT) required
        localVarCredential = this.configuration.lookupCredential('JWT');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/ld+json',
            'application/json',
            'text/html'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/arrivals`;
        return this.httpClient.request<ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPost>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: arrivalJsonldArrivalCollectionPostStatusCollectionPost,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
