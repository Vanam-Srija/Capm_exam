namespace ust.srija.vanam.db;
 
using { cuid, managed, temporal, Currency, Country } from '@sap/cds/common';
using { ust.srija.vanam.reuse } from './common';

context master1 {

   entity employees: cuid {
        nameFirst: String(40);
        nameMiddle: String(40);
        nameLast: String(40);
        nameInitials: String(40);
        sex: reuse.Gender;
        language: String(1);
        phoneNumber: reuse.PhoneNumber;
        email: reuse.Email;
        loginName: String(12);
        Currency: Currency;
        salaryAmount: reuse.AmountT;
        accountNumber: String(16);
        bankId: String(40);
        bankName: String(64);
    }
   
}
 
 