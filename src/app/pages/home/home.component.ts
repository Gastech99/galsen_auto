import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DataInfosService } from '../../service/data-infos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  bannerImg = [
    {
      id: 1,
      img: "assets/img/bmw-x3-front-view.jpg"
    },
    {
      id: 2,
      img: "assets/img/hyundai-motor-group-FvK8d346m_s-unsplash.jpg"
    },
    {
      id: 3,
      img: "assets/img/hyundai-tucson-suv-65f9a6539ca73.webp"
    }
  ]

  getCategorie: any;
  getApplianceProduct: any=[];
i: any;

  constructor(private getData: DataInfosService){}

  ngOnInit(): void {
    this.getCategorie = this.getData.categoriesData;
  
    this.getData.productInfos.filter((ele: any) => {
      if (ele.cat == "appliance") {
        this.getApplianceProduct.push(ele);
      }
    });
  
    console.log(this.getApplianceProduct); // Pour déboguer
  }

}
