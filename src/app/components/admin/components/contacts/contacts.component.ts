import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, map, mapTo, merge, Observable, Observer } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  // private showLoader!: Observable<boolean>
  // private nideLoader!: Observable<boolean>
  // isLoading!: Observable<boolean>

  personalList!: Observable<User[]>

  constructor(private adminServises: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  //  this.personalList = this.adminServises.getPersonalList()
    this.personalList = this.activatedRoute.data.pipe(map((data) => data?.['users']))

    // this.nideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false))

    // this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true))

    // this.isLoading = merge(this.showLoader, this.nideLoader)
  }
}
