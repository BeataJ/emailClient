import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email>{

  constructor() { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;

    return {
      id: 'wwwwwww',
      subject: 'aamdmkdmmv',
      to: 'sjjnjhghgih',
      from: 'ffgjgjgajoa',
      text: 'mbjgdrhdrh'
    }
  }
}
