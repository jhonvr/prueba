import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderComponent,
    NavBarComponent
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
