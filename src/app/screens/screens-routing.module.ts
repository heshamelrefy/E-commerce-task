import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { AppRoutes } from '../routes';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoutes.porductsList,
        pathMatch: 'full',
      },
      {
        path: AppRoutes.porductsList,
        loadChildren: () =>
          import('./product-list/product-list.module').then((m) => m.ProductListModule),
          canActivate:[AuthGuard]
      },
      {
        path: AppRoutes.login,
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),

      },
      {
        path: AppRoutes.shoppingCart,
        loadChildren: () =>
          import('./shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
          canActivate:[AuthGuard]
      },
      {
        path: AppRoutes.checkout,
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
          canActivate:[AuthGuard]
      },
      {
        path: AppRoutes.success,
        loadChildren: () =>
          import('./success/success.module').then((m) => m.SuccessModule),
          canActivate:[AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
