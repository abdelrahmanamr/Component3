import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { itemInfoRoutingModule } from './itemInfo-routing.module';

import { itemInfoComponent } from './itemInfo.component';

@NgModule({
    imports: [ThemeModule, itemInfoRoutingModule],
    declarations: [itemInfoComponent],
    entryComponents: [],
    providers: []
})
export class itemInfoModule {}