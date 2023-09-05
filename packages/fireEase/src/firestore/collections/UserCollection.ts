import { DBCollectionFields } from '../DBCollection';
import { BooleanField, StringField } from '../fields';

export default class UserCollection implements DBCollectionFields {
  fields = {
    email: StringField(),
    displayName: StringField(),
    emailVerified: BooleanField(),
  };
}
