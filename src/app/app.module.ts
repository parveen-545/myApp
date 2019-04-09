import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Module to import */
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*Component */

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { from } from 'rxjs';
import { HometableComponent } from './hometable/hometable.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';
import { NewauthComponent } from './newauth/newauth.component';
import { CheckreqComponent } from './checkreq/checkreq.component';
import { MessagesComponent } from './messages/messages.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    HometableComponent,
    QuickSearchComponent,
    NewauthComponent,
    CheckreqComponent,
    MessagesComponent,
    ManageUsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }