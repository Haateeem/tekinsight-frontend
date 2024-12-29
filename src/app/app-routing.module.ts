import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { SecurityRolesComponent } from './security-roles/security-roles.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'chatbot', component: ChatBotComponent},
  { path: 'knowledge-base', component: KnowledgeBaseComponent},
  { path: 'security-roles', component: SecurityRolesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
