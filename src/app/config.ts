import { HttpHeaders } from "@angular/common/http";

export const API_BASE_URL = 'https://fixtout.commeduc.com/api/index.php/';
const API_KEY = 'i72v7EMmy9tYo0WMxgBk9FMSkS21Q7c7';
export function getHeaders():HttpHeaders {
    let headers = new HttpHeaders({ "content-Type": "application/json" }).set('DOLAPIKEY', API_KEY)
    return headers;
  }