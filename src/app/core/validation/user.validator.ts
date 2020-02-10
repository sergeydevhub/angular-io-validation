import { UserSchema } from "./user.schema";
import * as t from "io-ts";
import {validateSync, ValidationError} from "class-validator";

export const UserValidator = new t.Type<UserSchema, UserSchema, never>(
  UserSchema.name,
  (entry: unknown): entry is UserSchema => entry instanceof UserSchema,
  (entry, context) => {
    const validateErrors: Array<ValidationError> = validateSync(entry);
    if(validateErrors.length) {
      return t.success(entry);
    }

    return t.failure(entry, context)
  },
  t.identity
);
