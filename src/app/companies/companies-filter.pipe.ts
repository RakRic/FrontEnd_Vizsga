import { PipeTransform, Pipe } from '@angular/core';
import { Company } from '../classes/company';

@Pipe({
    name:'companyFilter'
})

export class CompanyFilterPipe implements PipeTransform {
    transform(companies: Company [], searchTerm: string): Company[] {
        console.log(companies);
        if (! companies || !searchTerm) {
            return companies;
        }

        return companies.filter(company =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
}