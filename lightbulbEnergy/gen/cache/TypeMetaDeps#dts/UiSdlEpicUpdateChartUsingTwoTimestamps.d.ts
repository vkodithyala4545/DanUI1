// TypeScript definitions for the C3 type UiSdlEpicUpdateChartUsingTwoTimestamps

/**
 * @remarks this represents a value passed to a method that expects an instance of UiSdlEpicUpdateChartUsingTwoTimestamps
 */
declare class IUiSdlEpicUpdateChartUsingTwoTimestamps {
}

/**
 * @remarks this represents a made instance of UiSdlEpicUpdateChartUsingTwoTimestamps
 */
declare class UiSdlEpicUpdateChartUsingTwoTimestamps {

  static epic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): any | null;

  toJson(): any;

  toJson(include?: string, exclude?: string): any;

  toJson(include?: Include, exclude?: Exclude): any;

  toTypedJson(omitTopLevelType?: boolean, actionRequirement?: string): any;

  toTypedJson(include?: string, exclude?: string): any;

  toTypedJson(include?: Include, exclude?: Exclude): any;

  toJsonString(): string;

  toJsonString(pretty: boolean): string;

  toTypedJsonString(): string;

  toTypedJsonString(pretty?: boolean, omitTopLevelType?: boolean): string;

  toJsString(): string;

  toJsString(withType: boolean): string;

  toXmlString(): string;

  toXmlString(withType: boolean): string;

  serialize(contentType: string): string | null;

  static fromJson(json: any): UiSdlEpicUpdateChartUsingTwoTimestamps | null;

  static fromJsonString(json: string): UiSdlEpicUpdateChartUsingTwoTimestamps | null;

  static fromXmlString(xml: string): UiSdlEpicUpdateChartUsingTwoTimestamps | null;

  static deserialize(contentStr: string, contentType: string): UiSdlEpicUpdateChartUsingTwoTimestamps | null;

  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj>): number;

  retainedMemory(deep?: boolean, allMeasured?: SetBuilder<any>): number;

  type(): Type;

  replaceType(old: Type, new_: Type): UiSdlEpicUpdateChartUsingTwoTimestamps;

  super(mixin?: Type): any;

  instanceOf(typeName: string): boolean;

  instanceOf(type: Type): boolean;

  isEmptyObj(): boolean;

  isSame(other: Obj): boolean;

  fieldValue(field: string, defaultToEmpty?: boolean): T | null;

  fieldValue(field: FieldType, defaultToEmpty?: boolean): T | null;

  fieldValues(): Array_Type<FieldValue> | null;

  fieldValuesByOrdinal(skipTrailingEmpty?: boolean): Array_Type<any> | null;

  fieldValuesByFieldType(): Map_Type<FieldType, any> | null;

  fieldValuesByFieldName(): Map_Type<string, any> | null;

  fieldNames(): Array_Type<string> | null;

  at(ordinal: number): T | null;

  at(expr: string, failIfNotValid?: boolean): T | null;

  fieldValueAtPath(fieldPath: string, failIfNotFound?: boolean, context?: λSupplier<string | null>): T | null;

  fieldValuesAtPath(fieldPath: string, failIfNotFound?: boolean, context?: λSupplier<string | null>): Array_Type<T> | null;

  eachFieldValue(action: λBiConsumer<FieldType, any>): void;

  eachFieldValue(spec: ValueSpec, action: λBiConsumer<FieldType, any>): void;

  eachFieldValueWhile(spec: ValueSpec, action: λBiPredicate<FieldType, any>): boolean;

  eachRef(action: λBiConsumer<FieldType, Obj>): void;

  eachRef(includeEmpty: boolean, action: λBiConsumer<FieldType, Obj>): void;

  eachRefWhile(includeEmpty: boolean, action: λBiPredicate<FieldType, Obj>): boolean;

  eachRefRecursive(includeEmpty: boolean, action: λBiConsumer<FieldPath, Obj>): void;

  eachRefRecursiveWhile(includeEmpty: boolean, action: λBiPredicate<FieldPath, Obj>): boolean;

  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlEpicUpdateChartUsingTwoTimestamps>;

  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlEpicUpdateChartUsingTwoTimestamps>;

  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  foldFieldValues(folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  foldFieldValues(initial?: T, folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  foldFieldValues(initial?: T, spec: ValueSpec, folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  evalProjection(projection: string, resultType?: ValueType, bindings?: Map_Type<string, any>, options?: Expr.CompileOptions): any | null;

  evalProjection(projection: any, bindings?: Map_Type<string, any>, options?: Expr.CompileOptions): any | null;

  evalProjection(projection: any, resultType: Type, bindings?: Map_Type<string, any>, options?: Expr.CompileOptions): Obj | null;

  validateObj(): UiSdlEpicUpdateChartUsingTwoTimestamps;

  validateObj(spec: ValidateObjSpec): ValidateObjResult;

  withField(field: string, value: any, doNotConvert?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withoutField(field: string): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withoutField(field: FieldType): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withoutFields(fields: Array_Type<string>): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withoutFieldsByType(fields: Array_Type<FieldType>): UiSdlEpicUpdateChartUsingTwoTimestamps;

  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mergeObj(other: Obj): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mergeObj(other: Obj, otherFieldsFilter: Type): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mergeAndExpandObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): R | null;

  mergeJson(json: any): UiSdlEpicUpdateChartUsingTwoTimestamps;

  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): UiSdlEpicUpdateChartUsingTwoTimestamps;

  sumObj(other: Obj, deep?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  singletonArray(): Array_Type<UiSdlEpicUpdateChartUsingTwoTimestamps>;

  static array(...elements: Array_Type<any>[]): Array_Type<UiSdlEpicUpdateChartUsingTwoTimestamps> | null;

  static arrayBuilder(): ArrayBuilder<UiSdlEpicUpdateChartUsingTwoTimestamps> | null;

  singletonSet(): Set_Type<UiSdlEpicUpdateChartUsingTwoTimestamps>;

  static setBuilder(): SetBuilder<UiSdlEpicUpdateChartUsingTwoTimestamps> | null;

  static mapBuilder(): MapBuilder<string, UiSdlEpicUpdateChartUsingTwoTimestamps> | null;

  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlEpicUpdateChartUsingTwoTimestamps> | null;

  static myReferenceType(): ReferenceType;

  static myMapTypeOf(keyType: ValueType): MapType;

  static myMapType(): MapType;

  static myArrayType(): ArrayType;

  static mySetType(): SetType;

  static myStreamType(): StreamType;

  toBuilder(): ObjBuilder<UiSdlEpicUpdateChartUsingTwoTimestamps>;

  static builder(): ObjBuilder<UiSdlEpicUpdateChartUsingTwoTimestamps>;

  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  static make(withDefaults?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  static make(fields: any, withDefaults?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): UiSdlEpicUpdateChartUsingTwoTimestamps;

  remakeAs(type: Type): O;

  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  afterMake(): UiSdlEpicUpdateChartUsingTwoTimestamps;

  static cachedEmptyInst(): UiSdlEpicUpdateChartUsingTwoTimestamps;

  toData(): Data | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λPredicate<T> {
  (t: T): boolean
}
