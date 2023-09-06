import { DBCollectionExtension } from '../DBCollection';
import { BooleanField, StringField } from '../fields';

const fields = {
  email: StringField(),
  displayName: StringField(),
  emailVerified: BooleanField(),
};

const baseUserExtension = new DBCollectionExtension(fields);

export default baseUserExtension;
