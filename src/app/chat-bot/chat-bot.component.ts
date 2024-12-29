import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  userMessage: string = '';
  messages: Array<{ from: string, text: string }> = [];
  userFirstName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.messages.push({
      from: 'bot',
      text: 'Hello! How can I assist you today?'
    });
  }


  // Logout function
  logout() {
    this.router.navigate(['/logout']);
  }
}
