import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService} from './color.service';

@Component({
  templateUrl: './color-list.component.html'
})

export class ColorListComponent implements OnInit  {

  title = 'NewEngnTest';
  colors: any ;
  _listcolors: string;
  filtercolors: any;
  page: number = 1;
  pageSize: number = 10;


  constructor(private router: Router,
    private colorService: ColorService){ }


    get listcolors():string{
      return this._listcolors;
    }
    set listcolors(value:string){
      this._listcolors=value;
      this.filtercolors=this.listcolors ? this.performeFilter(this.listcolors) : this.colors;
    }
  
    performeFilter(filterBy:string ) :any[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.colors.filter((color:any)=>
      color.hexString.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
  
  ngOnInit(): void {
   this.colorService.getData().subscribe(
    colors => {
      this.colors = colors;
      this.filtercolors = this.colors; 
    });

  }
 
}


