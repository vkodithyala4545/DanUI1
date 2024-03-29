#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Promise import Promise
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.MapBuilder import MapBuilder
from c3.uiInfrastructure.UiSdlActionsObservable import UiSdlActionsObservable
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SetType import SetType
from c3.uiInfrastructure.UiSdlStatesObservable import UiSdlStatesObservable
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type UiSdlEpicUpdateChartUsingTwoTimestamps


class UiSdlEpicUpdateChartUsingTwoTimestamps(UiSdlEpic):
    """
    @remarks this represents a made instance of UiSdlEpicUpdateChartUsingTwoTimestamps
    """
    def __init__(self) -> None: ...

    @classmethod
    def epic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[Any]:
        ...
    @overload
    def toJson(self) -> any:
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
        ...
    def serialize(self, contentType: str) -> Union[str]:
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        ...
    def type(self) -> Type:
        ...
    def replaceType(self, old: Type, new: Type) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def super(self, mixin: Type=None) -> Any:
        ...
    @overload
    def instanceOf(self, typeName: str) -> bool:
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
        ...
    def isEmptyObj(self) -> bool:
        ...
    def isSame(self, other: Obj) -> bool:
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        ...
    def fieldNames(self) -> Union[Array[str]]:
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        ...
    @overload
    def validateObj(self) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def withoutField(self, field: str) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def withoutField(self, field: FieldType) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def withoutFields(self, fields: Array[str]) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mergeObj(self, other: Obj) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        ...
    def mergeJson(self, json: any) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def singletonArray(self) -> Array[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[UiSdlEpicUpdateChartUsingTwoTimestamps]]:
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[UiSdlEpicUpdateChartUsingTwoTimestamps]]:
        ...
    def singletonSet(self) -> Set[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[UiSdlEpicUpdateChartUsingTwoTimestamps]]:
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, UiSdlEpicUpdateChartUsingTwoTimestamps]]:
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, UiSdlEpicUpdateChartUsingTwoTimestamps]]:
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[UiSdlEpicUpdateChartUsingTwoTimestamps]:
        ...
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def remakeAs(self, type: Type) -> O:
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        ...
    def afterMake(self) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    @classmethod
    def cachedEmptyInst(cls) -> UiSdlEpicUpdateChartUsingTwoTimestamps:
        ...
    def toData(self) -> Union[Data]:
        ...

