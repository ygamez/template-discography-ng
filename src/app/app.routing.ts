import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { ProductsComponent } from './modules/admin/products/products.component';
import { ForsalesComponent } from './modules/admin/forsales/forsales.component';
import { ArtistsComponent } from './modules/admin/artists/artists.component';
import { UserProfileComponent } from './modules/admin/user-profile/user-profile.component';
import { NewsComponent } from './modules/admin/news/news.component';
import { AddNewsComponent } from './modules/admin/news/components/add-news/add-news.component';
import { AddArtistComponent } from './modules/admin/artists/addArtist/add-artist/add-artist.component';
import { AddProductsComponent } from './modules/admin/products/add-products/add-products.component';

const routes: Routes =[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'admin',             component: ComponentsComponent },
    { path: 'artist-profile',     component: ProfileComponent },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'products',      component: ProductsComponent },
    { path: 'detalle',      component: ProductsComponent },
    { path: 'artists',      component: ArtistsComponent },
    { path: 'addartists',      component: AddArtistComponent },
    { path: 'forsales',      component: ForsalesComponent},
    { path: 'news',      component: NewsComponent},
    { path: 'addnews',      component: AddNewsComponent},
    { path: 'addproducts',      component: AddProductsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
