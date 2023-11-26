import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import {MegaMenuModule} from "primeng/megamenu";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {HeaderComponent} from "./structure/header/header.component";
import {PdfGeneratorComponent} from "./pdf-manager/pdfgenerator/pdf-generator.component";
import {CardTestimonyComponent} from "./structure/card-testimony/card-testimony.component";
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, PdfGeneratorComponent, CardTestimonyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,PdfViewerModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
