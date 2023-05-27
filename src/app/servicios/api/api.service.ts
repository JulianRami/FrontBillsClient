import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListafacturasI} from '../../modelos/listafacturas.interface';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllFacturas():Observable<ListafacturasI[]>{
    let direccion = "https://localhost:7015/api/Bills";
    return this.http.get<ListafacturasI[]>(direccion);
  }

}
