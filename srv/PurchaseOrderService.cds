using {ust.srija.vanam.datamodel.master, ust.srija.vanam.datamodel.transaction } from '../db/datamodel2';


service PurchaseOrderService @(path: 'PurchaseOrderService') {
    entity ProductSet as projection on master.product;
    entity BusinessPartnerSet as projection on master.businesspartner;
    entity BusinessAddressSet as projection on master.address;
    entity POs @(odata.draft.enabled: true) as projection on transaction.purchaseorder;
    entity POItems as projection on transaction.poitems;
}
 