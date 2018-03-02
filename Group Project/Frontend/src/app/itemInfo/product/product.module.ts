import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { productRoutingModule } from './product-routing.module';

import { productComponent } from './product.component';

@NgModule({
    imports: [ThemeModule, productRoutingModule],
    declarations: [productComponent],
    providers: []
})
export class ItemsModule {}