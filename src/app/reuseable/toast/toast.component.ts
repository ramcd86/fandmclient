import {
  IMessage,
  MessageService,
} from './../../services/message/message.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'fnm-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  private readonly messageService: MessageService = inject(MessageService);
  public message: IMessage | undefined;
  public showMessages: boolean = false;

  constructor() {
    this.messageService.message.subscribe((message) => {
      if (message) {
        this.showToast(message);
      }
    });
  }

  private showToast(message: IMessage): void {
    this.message = message;
    this.showMessages = true;
    setTimeout(() => {
      this.showMessages = false;
    }, 3000);
  }
}
