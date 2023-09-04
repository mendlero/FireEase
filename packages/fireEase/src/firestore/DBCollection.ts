import { FieldProps, RelationalFieldProps } from './fields';
import { GenericFieldInput } from './genericFields';

class DBCollection {
  collectionLocation: string = '';
  autoId: boolean = false;

  fields: GenericFieldInput<FieldProps> = {};
  relationalField: GenericFieldInput<RelationalFieldProps> = {};
}
