import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlApi= 'http://localhost:8080/api/products';
  constructor(private http: HttpClient ) {

  }
  public getAllProducts(): Observable<any>{
    return this.http.get(this.urlApi );
  }
  public getProduct(id: Number): Observable<any>{
    return this.http.get(`${this.urlApi}/${id}`);
  }
  public postProduct(body: any){
    return this.http.post(this.urlApi, body );
  }
  public putProduct(productId: number, body: any){
    return this.http.put(`${this.urlApi}/${productId}`, body);
  }
  public deleteProduct(productId: number){
    return this.http.delete(`${this.urlApi}/${productId}`);
  }
}
