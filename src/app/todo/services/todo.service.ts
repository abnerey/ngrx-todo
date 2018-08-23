import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {querySnapshotMapper} from '../../shared/util/afs-collection.util';

@Injectable()
export class TodoService {
  constructor(private readonly afs: AngularFirestore) {}

  getTodos(): Observable<any> {
    const querySnapshot = this.afs.collection('todo').ref.get();
    return from(
      querySnapshot
    ).pipe(
      map(querySnapshotMapper),
    );
  }

}
