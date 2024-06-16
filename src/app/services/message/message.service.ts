import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum MessageType {
  HTTP_SUCCESS = 'http_success',
  HTTP_ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export interface IMessage {
  type: MessageType;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public readonly message: BehaviorSubject<IMessage | undefined> =
    new BehaviorSubject<IMessage | undefined>(undefined);

  constructor() {}

  public setMessage(message: IMessage): void {
    this.message.next(message);
  }
}
