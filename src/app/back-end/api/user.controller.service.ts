import { HttpClient, HttpContext, HttpEvent, HttpHeaders, HttpParameterCodec, HttpParams, HttpResponse } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_PATH, Configuration, UserReadUser } from "src/app/rest";
import { CustomHttpParameterCodec } from "src/app/rest/encoder";
import { User } from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  protected basePath = 'http://localhost:8000';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string | string[], @Optional() configuration: Configuration) {
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
        (value as any[]).forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(
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
       * Retrieves a User resource.
       * Retrieves a User resource.
       * @param id User identifier
       * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
       * @param reportProgress flag to report request and response progress.
       */
  public getAllUser(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<User>;
  public getAllUser(id: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<User>>;
  public getAllUser(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<User>>;
  public getAllUser(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getAllUser.');
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
        'application/json'
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

    let localVarPath = `/api/users/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined })}`;
    return this.httpClient.request<User>('get', `${this.configuration.basePath}${localVarPath}`,
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
       * Retrieves the collection of User resources.
       * Retrieves the collection of User resources.
       * @param page The collection page number
       * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
       * @param reportProgress flag to report request and response progress.
       */
  public getUserConnected(page?: number, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<User>;
  public getUserConnected(page?: number, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<User>>;
  public getUserConnected(page?: number, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<User>>;
  public getUserConnected(page?: number, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
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
        'application/json'
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

    let localVarPath = `/api/me`;
    return this.httpClient.request<User>('get', `${this.configuration.basePath}${localVarPath}`,
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
       * Retrieves the collection of User resources.
       * Retrieves the collection of User resources.
       * @param page The collection page number
       * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
       * @param reportProgress flag to report request and response progress.
       */
  public getOneUser(page?: number, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<User>;
  public getOneUser(page?: number, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<User>>;
  public getOneUser(page?: number, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<User>>;
  public getOneUser(page?: number, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
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
        'application/json'
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

    let localVarPath = `/api/users`;
    return this.httpClient.request<User>('get', `${this.configuration.basePath}${localVarPath}`,
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

}
