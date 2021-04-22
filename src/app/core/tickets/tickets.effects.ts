import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { TicketsHttpService } from './tickets-http.service';
import { loadTicketsAction, loadTicketsFailureAction, loadTicketsSuccessAction } from './tickets.actions';

@Injectable()
export class TicketsEffects {
  readonly loadTickets = createEffect(() =>
    this.actions.pipe(
      ofType(loadTicketsAction),
      exhaustMap((action) =>
        this.ticketsHttp.list(action.date, action.time).pipe(
          map((tickets) => loadTicketsSuccessAction({tickets})),
          catchError((httpError) =>
            of(loadTicketsFailureAction({httpError}))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions: Actions,
    private readonly ticketsHttp: TicketsHttpService,
  ) {
  }
}
