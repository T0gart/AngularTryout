import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { BlogComponent } from './blog/blog.component';
import { AccountComponent } from './account/account.component';


const appRoutes : Routes = [
  { path: '', component: UserComponent},
  { path: 'blog', component : BlogComponent},
  { path: 'account', component : AccountComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    UserComponent,
    InfoComponent,
    BlogComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
