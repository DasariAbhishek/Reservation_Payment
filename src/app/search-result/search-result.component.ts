import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result.model';
import { SearchResultService } from '../search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(public _service:SearchResultService) { }
  searchResult: SearchResult[] = [new SearchResult(1001,"DemoExp","Demo1","Demo2",new Date('2021-11-10'),new Date('2021-11-11'),50,45,5,200)]
  ngOnInit(): void {
  }

}
