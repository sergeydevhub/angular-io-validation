import { UserEntity, TUserEntity } from "../entities";
import * as t from "io-ts";
import { isRight } from 'fp-ts/lib/Either';

export const UserValidator = new t.Type<TUserEntity, TUserEntity, never>(
  UserEntity.name,
  (entry: unknown): entry is TUserEntity => entry.constructor.name === UserEntity.name,
  (entry, context) => {
    const decoded = UserEntity.decode(entry);
    if(isRight(decoded)) {
      return t.success(entry);
    }

    return t.failure(entry, context)
  },
  t.identity
);
