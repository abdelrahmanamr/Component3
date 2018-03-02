import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { itemInfoComponent } from './itemInfo.component';

const routes: Routes = [
    {
        path: '',
        component: itemInfoComponent,
        children: [
            {
                path: 'product',
                loadChildren: './product/product.module#productModule'
            },
            {
                path: '',
                redirectTo: 'product',
                pathMatch: 'full'
            }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class itemInfoRoutingModule {}