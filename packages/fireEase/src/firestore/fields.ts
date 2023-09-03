export enum FieldTypes {
  string = 1,
  number = 2,
  boolean = 3,
  map = 4,
  array = 5,
  null = 6,
  timestamp = 7,
  geopoint = 8,
  refrence = 9,
}

export enum RelationalFieldTypes {
  oneToOne = 1,
  oneToMany = 2,
  manyToMany = 3,
}

export type FieldProps = {
  type: FieldTypes;
};

export type Field = FieldProps & {
  name: string;
};

export type RelationalFieldProps = {
  type: RelationalFieldTypes;
};

export type RelationalField = RelationalFieldProps & {
  name: string;
};

export type FieldsInput = Field[] | { [k: string]: FieldProps };
export type RelationalFieldsInput =
  | RelationalField[]
  | { [k: string]: RelationalFieldProps };

function FieldFunctionByType(type: FieldTypes): (name: string) => Field {
  return (name: string) => {
    return { type: type, name: name };
  };
}

export const NullField = FieldFunctionByType(FieldTypes.null);
export const StringField = FieldFunctionByType(FieldTypes.string);
export const NumberField = FieldFunctionByType(FieldTypes.number);
export const BooleanField = FieldFunctionByType(FieldTypes.boolean);
