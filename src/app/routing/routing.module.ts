import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const routes: Routes =  [
  /*{path: '', redirectTo: 'todo', pathMatch: 'full'},*/
  {path: 'todo', loadChildren: '../todo/todo.module#TodoModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class RoutingModule {}
