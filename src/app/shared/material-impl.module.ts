import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialImplModule {
}
