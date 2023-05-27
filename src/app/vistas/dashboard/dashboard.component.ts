import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {ListafacturasI} from '../../modelos/listafacturas.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  // @ts-ignore
  facturas:ListafacturasI[];
  constructor(private api:ApiService, private router:Router) {
  }

  formatNumber(value: bigint): string {

    const numberString = value.toString();

    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return formattedNumber;
  }

  ngOnInit() {
    this.api.getAllFacturas().subscribe(data =>{

      this.facturas = data;
    });

  }
}
