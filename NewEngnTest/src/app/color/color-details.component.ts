import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ColorService} from './color.service';

@Component({
  templateUrl: './color-details.component.html'
})
export class ColorDetailsComponent implements OnInit {

  pageTitle: string = 'Color Detail';
  errorMessage = '';
  color: any;
  colors: any;
  page: String;
  opacity: number =1;
  hsl = [
    0.5,
    0.6,
    0.7,
    0.8,
    0.9
  ];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private colorService: ColorService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
      if (param ) {
      const id = param;
      this.getData(id);
    }
  }

  getData(id:any){
    this.colorService.getElement(id).subscribe(
      color => this.color = color,
      error => this.errorMessage = <any>error);
  }

  myClickFunction(col:any){
    this.opacity = col;
  }

  onBack(): void {
    this.router.navigate(['/colors']);
  }

  colorD(id): void{
    this.getData(id);
  }

  }
