import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResult } from './search-result.model';
@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http:HttpClient) { }

  //res = new SearchResult()
}
