import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private showLoader!: Observable <boolean>;
  private nideLoader!: Observable<boolean>;
  isLoading!: Observable<boolean>;

  constructor(private authService: AuthService, private adminServises: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.nideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false))

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true))

    this.isLoading = merge(this.showLoader, this.nideLoader)
  }

  logout() {
     this.authService.logout();
  }

}
