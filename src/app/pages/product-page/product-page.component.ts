import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataInfosService } from '../../service/data-infos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  getParamValue: any;
  getProductData: any = [];
  filterProductData: any = [];
  getSubcategoryOption: any = [];

  constructor(
    private route: ActivatedRoute,
    private getData: DataInfosService
  ) {}
  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('name');

    this.getData.productInfos.filter((ele: any) => {
      if (ele.cat == this.getParamValue) {
        this.getProductData.push(ele);
        this.filterProductData.push(ele);
      }
    });

    this.getData.subCategoriesFilterData.filter((ele: any) => {
      if (ele.categories == this.getParamValue) {
        this.getSubcategoryOption.push(ele);
      }
    });
  }

  filterSelect(data: any) {
    this.filterProductData=[];
    var getFilterValue: any = data.target.value;
    console.log('Valeur sélectionnée', getFilterValue);

    if (getFilterValue != 'all') {
      this.getData.productInfos.filter((ele: any) => {
        if (ele.subCategories == getFilterValue && ele.cat == this.getParamValue) {
          this.filterProductData.push(ele);
        }
      });
    }else{
      this.filterProductData = this.getProductData;
    }
  }
}
