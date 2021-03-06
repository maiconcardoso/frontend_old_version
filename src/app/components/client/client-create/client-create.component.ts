import { ClientService } from './../client.service';
import { Client } from '../client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})

export class ClientCreateComponent implements OnInit {
  client: Client = {
    name: '',
    // @ts-ignore
    whatsapp: null,
    // @ts-ignore
    fone: null,
    // @ts-ignore
    cpf: null,
    email: '',
    city: '',
    address: '',
    // @ts-ignore
    cep: null
  };
  
  constructor(private router: Router, private clientservice: ClientService) { }

  ngOnInit(): void {
  }

  createClient(): void {
    if (this.client.name != '') {
      this.clientservice.create(this.client).subscribe(() => {
        this.clientservice.showMessage('Cliente salvo com sucesso!')
        this.router.navigate(['/client'])
      })  
    } else {
      this.clientservice.showMessage('Nome do cliente deve ser preenchido')
    }
  }
  
  cancel(): void {
    this.router.navigate(['/client'])
  }

}
