import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveClickDirective } from './remove-click.directive';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    RemoveClickDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    
  ],
  exports: [
    ToolbarComponent, 
  ]
})
export class SharedModule { }
