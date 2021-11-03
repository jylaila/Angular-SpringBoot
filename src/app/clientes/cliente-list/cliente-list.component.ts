import { ClienteService } from './../shared/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  title = 'Relação de Clientes';
  clientes: Cliente[];

  constructor(private clienteservice: ClienteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll()
  {
    this.clienteservice.getAll().subscribe(resp=> {
      this.clientes = resp;
    });
  }

  delete(cliente: Cliente){
    this.clienteservice.delete(cliente.id).subscribe(()=>{
      this.clientes = this.clientes.filter(x => x!== cliente);
        });

  }

  }


