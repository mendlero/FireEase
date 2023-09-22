export enum FieldTypes {
  string,
  number,
  boolean,
  map,
  array,
  null,
  timestamp,
  geopoint,
  refrence,
}

export type FieldProps = {
  type: FieldTypes;
};

export type FieldsInput = Record<string, FieldProps>;

function FieldFunctionByType(type: FieldTypes): () => FieldProps {
  return () => {
    return { type: type };
  };
}

export const NullField = FieldFunctionByType(FieldTypes.null);
export const StringField = FieldFunctionByType(FieldTypes.string);
export const NumberField = FieldFunctionByType(FieldTypes.number);
export const BooleanField = FieldFunctionByType(FieldTypes.boolean);
