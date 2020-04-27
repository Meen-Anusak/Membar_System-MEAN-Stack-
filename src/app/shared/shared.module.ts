import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [NavbarComponent, SidebarComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    RouterModule
  ]
})
export class SharedModule { }
