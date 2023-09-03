import { FieldsInput, RelationalFieldsInput } from './fields';

class DBCollection {
  collectionLocation: string = '';

  fields: FieldsInput = {};
  relationalField: RelationalFieldsInput = {};
}
