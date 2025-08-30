import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing-module';
import { CollectionsHome } from './collections-home/collections-home';

@NgModule({
  declarations: [CollectionsHome],
  imports: [CommonModule, CollectionsRoutingModule],
  exports: [CollectionsHome],
})
export class CollectionsModule {}
