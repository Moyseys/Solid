export interface CustumerProtocol {
  getName(): string;
  getIdentification(): string;
}

export interface IndividualCustomerProtocol {
  name: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  nameFantasy: string;
  cnpj: string;
}
