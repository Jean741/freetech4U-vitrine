import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PdfGeneratorComponent} from "./pdf-manager/pdfgenerator/pdf-generator.component";
import {CommonModule} from "@angular/common";
import {PdfViewerModule} from "ng2-pdf-viewer";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, PdfViewerModule],
    declarations: [
        PdfGeneratorComponent
    ],
    exports: [RouterModule, PdfGeneratorComponent]
})
export class AppRoutingModule { }
