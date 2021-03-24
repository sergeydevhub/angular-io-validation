import * as t from 'io-ts';

export const UserEntity = t.type({
  name: t.string,
  nickname: t.string,
  age: t.number,
  email: t.string,
  gender: t.string
});

export type TUserEntity = t.TypeOf<typeof UserEntity>
