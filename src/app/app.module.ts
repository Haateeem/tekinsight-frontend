import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { SecurityRolesComponent } from './security-roles/security-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenuComponent,
    ChatBotComponent,
    KnowledgeBaseComponent,
    SecurityRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
