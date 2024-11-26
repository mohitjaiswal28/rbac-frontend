import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatuscolorPipe } from './pipes/statuscolor.pipe';
import { PropercasePipe } from './pipes/propercase.pipe';

@NgModule({
  declarations: [
    StatuscolorPipe,
    PropercasePipe
  ],

  imports: [
    CommonModule
  ],

  exports: [
    StatuscolorPipe,
    PropercasePipe
  ]
})

export class SharedModule { }
