import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL = 'http://localhost:9090/cliente';

  constructor(private http: HttpClient) { }


  public getAll()
  {
    return this.http.get<Cliente[]>(this.URL);
  }

  public insert(cliente: Cliente)
  {
    return this.http.post<Cliente>(this.URL,cliente);

  }

  public getbyId(id:number){
    const newurl =`${this.URL}/${id}`;
    return this.http.get<Cliente>(newurl);
  }

  public update(cliente: Cliente){
    const newurl =`${this.URL}/${cliente.id}`;
    return this.http.put<Cliente>(newurl, cliente);

  }

  public delete (id:number) {
    const newurl =`${this.URL}/${id}`;
    return this.http.delete<Cliente>(newurl);
  }

}
