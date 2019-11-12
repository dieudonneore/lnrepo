import { NgModule } from '@angular/core';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule
} from '@angular/material';


const materialcomponent = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({

  imports: [materialcomponent],
  exports: [materialcomponent],
})
export class MaterialModule { }
