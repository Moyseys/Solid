import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustumerProtocol,
} from './interfaces/customers';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustumerProtocol
{
  constructor(
    public name: string,
    public lastName: string,
    public cpf: string,
  ) {}

  getName(): string {
    return this.name + ' ' + this.lastName;
  }

  getIdentification(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustumerProtocol
{
  name: string = '';
  nameFantasy: string = '';
  cnpj: string = '';
  constructor(name: string, nameFantasy: string, cnpj: string) {
    this.name = name;
    this.nameFantasy = nameFantasy;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIdentification(): string {
    return this.cnpj;
  }
}
