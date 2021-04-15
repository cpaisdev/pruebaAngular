import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './pages/tables/tables.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  { path: 'table-user', component: TablesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'todos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
