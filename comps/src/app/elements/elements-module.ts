import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing-module';
import { ElementsHome } from './elements-home/elements-home';

@NgModule({
  declarations: [ElementsHome],
  imports: [CommonModule, ElementsRoutingModule],
  exports: [ElementsHome],
})
export class ElementsModule {}
