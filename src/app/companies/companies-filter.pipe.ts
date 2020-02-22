import { PipeTransform, Pipe } from '@angular/core';
import { Company } from '../classes/company';

@Pipe({
    name:'companyFilter'
})

export class CompanyFilterPipe implements PipeTransform {
    transform(companies: Company [], searchTerm: string): Company[] {
        if (! companies || !searchTerm) {
            return companies;
        }

        return companies.filter(company =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
}