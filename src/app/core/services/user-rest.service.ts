import { RestService } from "./rest.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserValidator } from "@core/validation";

@Injectable({
  providedIn: 'root'
})
export class UserRestService extends RestService<typeof UserValidator> {
  constructor(protected client: HttpClient) {
    super('users', UserValidator, client);
  }
}
