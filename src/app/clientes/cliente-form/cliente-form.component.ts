import { ClienteService } from './../shared/cliente.service';
import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { toTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente;
  title = '';

  constructor(private route: ActivatedRoute, private router: Router, private clienteservice: ClienteService) { }

  ngOnInit() {
    this.title = 'Novo Cliente';
    this.cliente = new Cliente();

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.clienteservice.getbyId(parseInt(id)).subscribe(resp=> {
        this.cliente = resp;
        this.title = `Alterando o Cliente ${this.cliente.nome}`;
      });
    }
  }

  onSubmit() {

    let observable : Observable<Cliente>;

    if(this.cliente.id){
      this.clienteservice.update(this.cliente);
    }else{
      observable = this.clienteservice.insert(this.cliente);
    }

    observable.subscribe(()=> {
      this.router.navigate(['/clientes']);
    });
  }
}
