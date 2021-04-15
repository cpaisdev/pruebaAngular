import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  users: IUser[] = []
  usersFemale: IUser[] = []
  usersMale: IUser[] = []

  

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(
      (usersRespond) => {
      console.log(usersRespond);

      for (var i = 0, max = usersRespond.length; i < max; i += 1) {
        let u = <IUser>{};
        u.age = usersRespond[i].age;
        u.company = usersRespond[i].company;
        u.email = usersRespond[i].email;
        u.gender = usersRespond[i].gender;
        u.id = usersRespond[i].id;
        u.isWorkNow = usersRespond[i].isWorkNow;
        u.name = usersRespond[i].name.firstName + ' ' + usersRespond[i].name.lastName;
        u.username = usersRespond[i].username;

        this.users.push(u);

        if(u.gender.match('F') !== null ){
          this.usersFemale.push(u);
        } else {
          this.usersMale.push(u);
        }
     
      }
      
      console.log(this.users);
      
    }, (err) => {
      console.log('hubo un error');
    });
  }

  ngOnInit(): void {
  }

  

}
// ENDPOINT Y URLBASE ubicados en archivo environments.ts
// Está prohibido alterar el componente table-test
// Mostrar como máximo 10 registros en cada tabla
// TODO 1 Consumir Servicio por método get para obtener data y llenar la primera tabla users
// TODO 1.1 En el nombre concatenar firstName y lastName con un espacio entre ellos 
// TODO 2 Llenar la 2da tabla de usersFemale únicamente con registros donde gender sea correspondiente a 'F'
// TODO 2.1 Llenar la 3ra tabla de usersMale únicamente con registros donde gender sea correspondiente a 'M'
