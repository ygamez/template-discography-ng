import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { ForsalesComponent } from './modules/admin/forsales/forsales.component';
import { ProductsComponent } from './modules/admin/products/products.component';
import { ArtistsComponent } from './modules/admin/artists/artists.component';
import { MessageComponent } from './modules/admin/message/message.component';
import { UserProfileComponent } from './modules/admin/user-profile/user-profile.component';
import { NewsComponent } from './modules/admin/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ForsalesComponent,
    ProductsComponent,
    ArtistsComponent,
    MessageComponent,
    UserProfileComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
