import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SubheaderComponent } from './subheader/subheader.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, SubheaderComponent],
  exports: [
    HeaderComponent,
    SubheaderComponent,
    // BasicHeaderComponent,
    // BasicSubheaderComponent
  ]
})
export class HeaderModule { }
