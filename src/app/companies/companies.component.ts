import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { Company } from '../classes/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];
  searchTerm: string;

  constructor(private rs: RestService) { }

  ngOnInit() {
    this.getCompaniesFromService()
  }

  getCompaniesFromService(): void {
    this.rs.getCompanies().subscribe(updatedCompanies => this.companies = updatedCompanies)
  }

  delete(companyId: number): void {
    this.rs.deleteCompanyById(companyId).subscribe(_ => {
      this.companies = this.companies.filter(deleteCompany => deleteCompany.id !== companyId)
    })
  }

}
