import { FieldsInput, RelationalFieldsInput } from './fields';

class DBCollectionFields {
  constructor(
    public fields: FieldsInput = {},
    extend?: DBCollectionFields | DBCollectionFields[],
    public relationalField: RelationalFieldsInput = {}
  ) {
    if (extend) {
      if (Array.isArray(extend)) {
        extend.forEach((CollectionFields) => {
          this.extendWith(CollectionFields);
        });
      } else {
        this.extendWith(extend);
      }
    }
  }

  extendWith(extend: DBCollectionFields) {
    if (extend.fields) {
      this.addFields(extend.fields);
    }

    if (extend.relationalField) {
      this.addRelationalFields(extend.relationalField);
    }
  }

  addFields(fields: FieldsInput) {
    const exsistingFields = Object.keys(this.fields);
    Object.entries(fields).forEach(([k, v]) => {
      if (!(k in exsistingFields)) {
        this.fields[k] = v;
      }
    });
  }

  addRelationalFields(fields: RelationalFieldsInput) {
    const exsistingRelationalFields = Object.keys(this.relationalField);
    Object.entries(fields).forEach(([k, v]) => {
      if (!(k in exsistingRelationalFields)) {
        this.relationalField[k] = v;
      }
    });
  }
}

export class DBCollection extends DBCollectionFields {
  constructor(
    public collectionLocation: string,
    public autoId: boolean = false,
    fields: FieldsInput = {},
    extend?: DBCollectionFields | DBCollectionFields[],
    relationalField: RelationalFieldsInput = {}
  ) {
    super(fields, extend, relationalField);
  }
}

export class DBCollectionExtension extends DBCollectionFields {}
