export {};

//既存の型をsairiyou

type MyExclude = never | never | DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NoNullableTypes = NonNullable<NullableTypes>;
