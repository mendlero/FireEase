import { FieldProps, RelationalFieldProps } from './fields';
import { GenericFieldsInput } from './genericFields';

export interface DBCollection extends DBCollectionFields {
  extends?: DBCollectionFields | DBCollectionFields[];
  collectionLocation: string;
  autoId: boolean;
}

export interface DBCollectionFields {
  fields: GenericFieldsInput<FieldProps>;
  relationalField?: GenericFieldsInput<RelationalFieldProps>;
}
