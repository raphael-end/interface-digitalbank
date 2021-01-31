import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadcliente',
    loadChildren: () => import('./cadcliente/cadcliente.module').then( m => m.CadclientePageModule)
  },
  {
    path: 'tranferir',
    loadChildren: () => import('./tranferir/tranferir.module').then( m => m.TranferirPageModule)
  },
  {
    path: 'transbtb',
    loadChildren: () => import('./transbtb/transbtb.module').then( m => m.TransbtbPageModule)
  },
  {
    path: 'transbtother',
    loadChildren: () => import('./transbtother/transbtother.module').then( m => m.TransbtotherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
