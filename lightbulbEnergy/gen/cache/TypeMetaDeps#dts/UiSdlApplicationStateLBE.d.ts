// TypeScript definitions for the C3 type UiSdlApplicationStateLBE

/**
 * @remarks this represents a value passed to a method that expects an instance of UiSdlApplicationStateLBE
 */
declare class IUiSdlApplicationStateLBE {

  /**
   * The id of this instance.
   */
  id?: string;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  REDUX_NAMESPACE?: string;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  effectTriggers?: Array_Type<UiSdlEffectTrigger> | Array<IUiSdlEffectTrigger>;
}

/**
 * @remarks this represents a made instance of UiSdlApplicationStateLBE
 */
declare class UiSdlApplicationStateLBE {

  /**
   * The id of this instance.
   */
  readonly id?: string;
  withId(id: string | null): UiSdlApplicationStateLBE;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): UiSdlApplicationStateLBE;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: Array_Type<UiSdlEffectTrigger>;
  withEffectTriggers(effectTriggers: Array_Type<UiSdlEffectTrigger> | Array<IUiSdlEffectTrigger> | null): UiSdlApplicationStateLBE;

  static getStateNamespace(): string | null;

  static getInitialStateNamespace(): string | null;

  static getConfigStatePath(id?: string): Array_Type<string> | null;

  static getInitialConfigStatePath(id?: string): Array_Type<string> | null;

  static getConfigFromState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlImmutableJS<any> | null;

  static setConfigInState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>, value?: any): UiSdlImmutableJS<any> | null;

  static getInitialConfigFromState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlImmutableJS<any> | null;

  static setInitialConfigInState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>, value?: any): UiSdlImmutableJS<any> | null;

  static isLimitEffectOnState(): boolean;

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

  static fromJson(json: any): UiSdlApplicationStateLBE | null;

  static fromJsonString(json: string): UiSdlApplicationStateLBE | null;

  static fromXmlString(xml: string): UiSdlApplicationStateLBE | null;

  static deserialize(contentStr: string, contentType: string): UiSdlApplicationStateLBE | null;

  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj>): number;

  retainedMemory(deep?: boolean, allMeasured?: SetBuilder<any>): number;

  type(): Type;

  replaceType(old: Type, new_: Type): UiSdlApplicationStateLBE;

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

  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlApplicationStateLBE;

  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlApplicationStateLBE;

  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlApplicationStateLBE>;

  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlApplicationStateLBE>;

  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): UiSdlApplicationStateLBE;

  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlApplicationStateLBE;

  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlApplicationStateLBE;

  foldFieldValues(folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  foldFieldValues(initial?: T, folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  foldFieldValues(initial?: T, spec: ValueSpec, folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  evalProjection(projection: string, resultType?: ValueType, bindings?: Map_Type<string, any>, options?: Expr.CompileOptions): any | null;

  evalProjection(projection: any, bindings?: Map_Type<string, any>, options?: Expr.CompileOptions): any | null;

  evalProjection(projection: any, resultType: Type, bindings?: Map_Type<string, any>, options?: Expr.CompileOptions): Obj | null;

  validateObj(): UiSdlApplicationStateLBE;

  validateObj(spec: ValidateObjSpec): ValidateObjResult;

  withField(field: string, value: any, doNotConvert?: boolean): UiSdlApplicationStateLBE;

  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlApplicationStateLBE;

  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): UiSdlApplicationStateLBE;

  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlApplicationStateLBE;

  withoutField(field: string): UiSdlApplicationStateLBE;

  withoutField(field: FieldType): UiSdlApplicationStateLBE;

  withoutFields(fields: Array_Type<string>): UiSdlApplicationStateLBE;

  withoutFieldsByType(fields: Array_Type<FieldType>): UiSdlApplicationStateLBE;

  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): UiSdlApplicationStateLBE;

  mergeObj(other: Obj): UiSdlApplicationStateLBE;

  mergeObj(other: Obj, otherFieldsFilter: Type): UiSdlApplicationStateLBE;

  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): UiSdlApplicationStateLBE;

  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): UiSdlApplicationStateLBE;

  mergeAndExpandObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): R | null;

  mergeJson(json: any): UiSdlApplicationStateLBE;

  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): UiSdlApplicationStateLBE;

  sumObj(other: Obj, deep?: boolean): UiSdlApplicationStateLBE;

  singletonArray(): Array_Type<UiSdlApplicationStateLBE>;

  static array(...elements: Array_Type<any>[]): Array_Type<UiSdlApplicationStateLBE> | null;

  static arrayBuilder(): ArrayBuilder<UiSdlApplicationStateLBE> | null;

  singletonSet(): Set_Type<UiSdlApplicationStateLBE>;

  static setBuilder(): SetBuilder<UiSdlApplicationStateLBE> | null;

  static mapBuilder(): MapBuilder<string, UiSdlApplicationStateLBE> | null;

  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlApplicationStateLBE> | null;

  static myReferenceType(): ReferenceType;

  static myMapTypeOf(keyType: ValueType): MapType;

  static myMapType(): MapType;

  static myArrayType(): ArrayType;

  static mySetType(): SetType;

  static myStreamType(): StreamType;

  toBuilder(): ObjBuilder<UiSdlApplicationStateLBE>;

  static builder(): ObjBuilder<UiSdlApplicationStateLBE>;

  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): UiSdlApplicationStateLBE;

  static make(withDefaults?: boolean): UiSdlApplicationStateLBE;

  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): UiSdlApplicationStateLBE;

  static make(fields: any, withDefaults?: boolean): UiSdlApplicationStateLBE;

  static make(s: string): UiSdlApplicationStateLBE | null;

  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): UiSdlApplicationStateLBE;

  remakeAs(type: Type): O;

  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  afterMake(): UiSdlApplicationStateLBE;

  static cachedEmptyInst(): UiSdlApplicationStateLBE;

  toData(): Data | null;

  static keyFieldType(): FieldType;

  keyFieldValue(): string | null;

  singletonMap(): Map_Type<string, WithKey>;

  toString(): string | null;

  static fromString(s: string): UiSdlApplicationStateLBE | null;

  static getConfigFromApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlReduxState;

  static setConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>, value: any): UiSdlReduxState;

  static removeConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlReduxState;

  static initializeApplicationStateAction(stateId: string): UiSdlApplicationStateInitializeAction;

  static applicationStateDeleteDataAction(stateId: string, ids?: Array_Type<string>, dataPath?: string): UiSdlApplicationStateDataDeleteAction;

  static applicationStateAddDataAction(stateId: string, id?: string, dataPath?: string): UiSdlApplicationStateDataAddAction;

  static applicationStateModifyDataAction(stateId: string, id?: string, dataPath?: string, field?: string, newValue?: any): UiSdlApplicationStateDataModifyAction;

  static applicationStateDataDeleteEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataDeleteAction): UiSdlReduxState;

  static applicationStateDataAddEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataAddAction): UiSdlReduxState;

  static applicationStateDataModifyEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataModifyAction): UiSdlReduxState;

  static generateSelector(applicationId?: string): λFunction<UiSdlReduxState | null, UiSdlImmutableJS<UiSdlApplicationState> | null> | null;

  static rowRecordStoreReducer(state: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  static storeRowRecordAction(id?: string, obj?: any): UiSdlReduxAction<any> | null;

  static aptIdStoreReducer(state: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  static storeAptIdAction(id?: string, obj?: any): UiSdlReduxAction<any> | null;

  static bldIdStoreReducer(state: UiSdlReduxState, action?: UiSdlReduxAction<any>): UiSdlReduxState | null;

  static storeBldIdAction(id?: string, obj?: any): UiSdlReduxAction<any> | null;
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
