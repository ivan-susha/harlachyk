import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  pay(total: number) {
    return new Promise(resolve =>
      setTimeout(() => resolve(true), 2000)
    );
  }
}
