import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { productComponent } from './product.component';

const routes: Routes = [
    { path: '', component: productComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class productRoutingModule {}