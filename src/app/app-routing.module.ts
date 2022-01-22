import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'shop/:id', component: ShopComponent},
  { path: 'detail/hero/:id', component: HeroDetailComponent},
  { path: 'detail/item/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }