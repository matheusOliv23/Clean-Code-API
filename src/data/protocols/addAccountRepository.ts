import { AccountModel } from "../../domain/models/Account";
import { AddAccountModel } from "../../domain/usecase/add-accounts";

export interface AddAccountRepository {
  add(accountData: AddAccountModel): Promise<AccountModel>;
}
