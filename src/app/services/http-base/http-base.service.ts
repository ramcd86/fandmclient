import {
  IMessage,
  MessageService,
  MessageType,
} from './../message/message.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../utils/environment';
import { IUserDefinedRelationship } from './http-base.interface';
import { catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  // private readonly http: HttpClient = inject(HttpClient);

  private readonly messageService: MessageService = inject(MessageService);

  constructor(private readonly _httpClient: HttpClient) {}

  public insertRelationship(relationship: IUserDefinedRelationship) {
    const headers = { 'Content-Type': 'application/json' };

    return this._httpClient
      .post(
        `${environment.PROTOCOL}${environment.HOST}${environment.PORT}/relationship`,
        relationship,
        { headers }
      )
      .pipe(
        catchError((error) => {
          this.messageService.setMessage({
            type: MessageType.HTTP_ERROR,
            message: error.message,
          });
          return throwError(() => new Error(error.message));
        })
      );
  }
}
