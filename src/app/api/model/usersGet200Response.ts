/**
 * ReqRes API
 * Fake data CRUD API
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { User } from './user';


export interface UsersGet200Response { 
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data?: Array<User>;
}

