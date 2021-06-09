import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'news-detail/:id',
    loadChildren: () => import('./pages/news-detail/news-detail.module').then(m => m.NewsDetailPageModule)
  }, {
    path: 'send-mail',
    loadChildren: () => import('./pages/send-mail/send-mail.module').then(m => m.SendMailPageModule)
  },
  {
    path: 'list-mail',
    loadChildren: () => import('./pages/list-mail/list-mail.module').then(m => m.ListMailPageModule)
  },
  {
    path: 'mail-detail/:id',
    loadChildren: () => import('./pages/mail-detail/mail-detail.module').then(m => m.MailDetailPageModule)
  },  {
    path: 'user-view',
    loadChildren: () => import('./pages/user-view/user-view.module').then( m => m.UserViewPageModule)
  },
  {
    path: 'user-inci',
    loadChildren: () => import('./pages/user-inci/user-inci.module').then( m => m.UserInciPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
