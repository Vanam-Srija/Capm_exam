using { ust.srija.vanam.db.master1 } from '../db/datamodel';
using {ust.srija.vanam.datamodel.master, ust.srija.vanam.datamodel.transaction } from '../db/datamodel2';


service EmployeeService @(path: 'EmployeeService') {
    entity EmployeeSet as projection on master1.employees;       
    entity ProductSet as projection on master.product;
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity BusinessAddressSet as projection on master.address;
    entity POs @(odata.draft.enabled: true) as projection on transaction.purchaseorder;
    entity POItems as projection on transaction.poitems;
}
 