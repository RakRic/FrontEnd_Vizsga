import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../Services/authentication.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css']
})
export class RootNavComponent {
  currentUser: User;
  isLoggedIn$: Observable<boolean>;
  isLoggedIn:boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authenticationService: AuthenticationService,
              private router: Router) {
                this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
                this.isLoggedIn = localStorage.getItem('currentUser') !== null;
              }

  logout() {
    this.authenticationService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
