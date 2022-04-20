import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string='Sneha Kusram'
  imgUrl:string='../../assets/image.jpg';

  num:number=2;
  constructor() { }

  ngOnInit() {
  }

}
