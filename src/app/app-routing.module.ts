import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {PdfViewerModule} from "ng2-pdf-viewer";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, PdfViewerModule],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
