export {};

//既存の型をsairiyou

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;

//関数型以外
type NunfunctionType = Exclude<SomeTypes, DebugType>;
//関数型以外
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

type FunctionTypeExtrctingFunction = Extract<SomeTypes, Function>;
type NullableTypes = string | number | null | undefined;
type NoNullableTypes = NonNullable<NullableTypes>;
