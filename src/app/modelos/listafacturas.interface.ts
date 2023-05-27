export interface ListafacturasI{
  id:string;
  CodigoFactura:string;
  cliente:string;
  ciudad:string;
  nit:string;
  totalInvoice:bigint;
  subTotal:bigint;
  iva:bigint;
  retencion:bigint;
  creationDate:string;
  estado:string;
  pagada:boolean;
  paymentDate:string;
  correo:string;
}
