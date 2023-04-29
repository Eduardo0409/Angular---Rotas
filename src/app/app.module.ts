import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MultiTableDetailsComponent } from './multi-table-details/multi-table-details.component';
import { MultiTableComponent } from './multi-table/multi-table.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [
    RootComponent,
    NavbarComponent,
    MultiTableDetailsComponent,
    MultiTableComponent,
    HomeComponent,
    AboutComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule { }