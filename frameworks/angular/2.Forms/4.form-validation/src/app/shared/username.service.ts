import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const USERNAME = ['admin', 'saitama', 'tatsumaki', 'genos', 'fubuki', 'goku'];

@Injectable({ providedIn: 'root' })
export class UsernameService {
  isExistUsername(username: string): Observable<boolean> {
    const isExist = USERNAME.includes(username.trim().toLowerCase());

    return of (isExist).pipe(delay(500));
  }
}
