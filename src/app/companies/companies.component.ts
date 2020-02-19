import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { Company } from '../classes/company';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company [];
  searchTerm: string;

  constructor(private rs: RestService) { }

  ngOnInit(): void {
    this.rs.getCompanies().subscribe((data: any [])=>{
      this.companies = data;
    })
  }

  // delete(companyId) {
  //   this.rs.deleteCompanyById(companyId).subscribe( _ => {
  //     this.companies = this.companies.filter(cegek => cegek.id !== companyId)
  //   })
  // }

}
