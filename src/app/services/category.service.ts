import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/config'


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * /categories, type 'actioncomm' for agendaevents
   * @param pageNumber 
   * @param categoryType 
   * @param sqlFilters 
   * @returns An observable to a list of categories
   */
  getCategories(pageNumber: number, categoryType: string, sqlFilters: string): Observable<any> {
    let params = new HttpParams()
      .set('sortfield', 't.rowid')
      .set('query', '')
      .set('sortorder', 'ASC')
      .set('limit', '100')
      .set('page', pageNumber.toString())
      .set('type', categoryType)
      .set('sqlfilters', sqlFilters);

    return this.http.get(API_BASE_URL + '/categories', { params });
  }

  /**
   * /categories/{id}
   * @param categoryId 
   * @returns a category
   */
  getCategoryById(categoryId: string): Observable<any> {
    const url = `${API_BASE_URL}/categories/${categoryId}`;
    return this.http.get(url);
  }
}
