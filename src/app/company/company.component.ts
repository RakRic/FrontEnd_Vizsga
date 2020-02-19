import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../classes/company';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company : Company;
  constructor(private rs : RestService,
              private route: ActivatedRoute)
              { }

  ngOnInit() {
    this.rs.getCompanyById(this.route.snapshot.paramMap.get('id'))
           .subscribe(_company => this.company = _company);
  }

}
