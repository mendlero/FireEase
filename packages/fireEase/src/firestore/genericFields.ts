export type GenericField<T> = T & { name: string };

export type GenericFieldInput<T> = GenericField<T>[] | { [k: string]: T };
