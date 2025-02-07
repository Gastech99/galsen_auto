import { Component, OnInit } from '@angular/core';
import { DataInfosService } from '../../service/data-infos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
data: any;
  constructor( private route: ActivatedRoute, private getData: DataInfosService){}

  getParamValue:any;
  getProductDetails:any;

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id')

    this.getData.productInfos.filter((ele:any) => {
      if(ele.id == this.getParamValue){
        this.getProductDetails = ele;
      }
    });
  }
  
  bookNow(){
    
  }
}
