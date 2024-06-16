import { HttpBaseService } from './services/http-base/http-base.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './reuseable/toast/toast.component';

@Component({
  selector: 'fnm-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fandm-client';

  private readonly httpBaseService: HttpBaseService = inject(HttpBaseService);

  constructor() {
    // this.httpBaseService
    //   .insertRelationship({
    //     reporter_id: '11ads___a',
    //     reporter_actor: 'lemon_juice',
    //     reporter_condition: 'loss_of_libido',
    //     reporter_treatment: 'vomvin_10',
    //   })
    //   .subscribe();
    // console.log('AppComponent');
  }
}
