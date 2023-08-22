import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customers';

export class IndividualCustomer implements IndividualCustomerProtocol {
  constructor(
    public name: string,
    public lastName: string,
    public cpf: string,
  ) {}
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string = '';
  nameFantasy: string = '';
  cnpj: string = '';
  constructor(name: string, nameFantasy: string, cnpj: string) {
    this.name = name;
    this.nameFantasy = nameFantasy;
    this.cnpj = cnpj;
  }
}
