import {Pipe, PipeTransform} from '@angular/core';
import {Status, TODO} from '../../todo/models/todo.model';

@Pipe({
  name: 'statusFilter',
  pure: true
})
export class StatusPipe implements PipeTransform {
  transform(lista: TODO[], status: Status): any {
    return lista.filter(item => item.status === status);
  }
}
