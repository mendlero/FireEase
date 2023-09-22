import { FieldsInput } from './fields';

class DBCollectionFields {
  constructor(
    public fields: FieldsInput = {},
    extend?: DBCollectionFields | DBCollectionFields[]
  ) {
    if (extend) {
      if (Array.isArray(extend)) {
        extend.forEach(CollectionFields => {
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
  }

  addFields(fields: FieldsInput) {
    const exsistingFields = Object.keys(this.fields);
    Object.entries(fields).forEach(([k, v]) => {
      if (!(k in exsistingFields)) {
        this.fields[k] = v;
      }
    });
  }
}

export class DBCollection extends DBCollectionFields {
  constructor(
    public collectionLocation: string,
    public autoId: boolean = false,
    fields: FieldsInput = {},
    extend?: DBCollectionFields | DBCollectionFields[]
  ) {
    super(fields, extend);
  }
}

export class DBCollectionExtension extends DBCollectionFields {}
