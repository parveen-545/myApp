import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';
import { NewauthComponent } from './newauth/newauth.component';
import { CheckreqComponent } from './checkreq/checkreq.component';
import { MessagesComponent } from './messages/messages.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'quick-search',
    component: QuickSearchComponent
  },
  {
    path: 'newauth',
    component: NewauthComponent
  },
  {
    path: 'checkreq',
    component: CheckreqComponent
  },  
  {
    path: 'messages',
    component: MessagesComponent
  },{
    path: 'manage-users',
    component: ManageUsersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent,
    pathMatch: "full"  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }