import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DelayedLoadingService {
  simulateDelay<T>(data: T, delayMs: number) {
    return of(data).pipe(delay(delayMs));
  }
}
