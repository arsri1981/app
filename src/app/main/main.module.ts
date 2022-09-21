import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';



@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    LeftNavComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ProductCatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
