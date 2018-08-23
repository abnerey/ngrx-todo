import {QuerySnapshot} from 'angularfire2/firestore';

export function querySnapshotMapper(snap: QuerySnapshot<any>) {
  const values= [];
  snap.forEach(doc => {
    values.push(doc.data());
  });
  return values;
}

export const log = text => value => {
  console.log(text, value);
  return value;
};
