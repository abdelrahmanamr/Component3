import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';

const routes: Routes = [
    { path: '',
        component: ItemComponent,
        children:[
            {
                path:'item',
                loadChildren:'./itemInfo/itemInfo.module#ItemInfoModule'
            },
            {
                path:'',
                redirectTo:'itemInfo',
                pathMatch:'full'
            }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemRoutingModule {}