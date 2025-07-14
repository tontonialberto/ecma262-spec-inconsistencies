# Regex Search Results in EMU-ALG Tags

**Search Pattern:** `1\..*[iI]f .*, .*(; else if .*, .*)*; else .*`
**Source File:** `spec.html`
**Generated:** Mon Jul 14 2025 19:03:04 GMT+0200 (Ora legale dell’Europa centrale)

## Summary

- **Total sections with matches:** 34
- **Total matches found:** 56

## Results

- %TypedArray%.prototype.copyWithin
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- %TypedArray%.prototype.fill
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- %TypedArray%.prototype.lastIndexOf
  - `1. If _fromIndex_ is present, let _n_ be ? ToIntegerOrInfinity(_fromIndex_); else let _n_ be _len_ - 1.`

- %TypedArray%.prototype.slice
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _srcArrayLength_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- %TypedArray%.prototype.subarray
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _srcLength_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- AggregateError
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`

- Array.prototype.copyWithin
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- Array.prototype.fill
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- Array.prototype.lastIndexOf
  - `1. If _fromIndex_ is present, let _n_ be ? ToIntegerOrInfinity(_fromIndex_); else let _n_ be _len_ - 1.`

- Array.prototype.slice
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- ArrayBuffer.prototype.slice
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- Boolean.prototype.toString
  - `1. If _b_ is *true*, return *"true"*; else return *"false"*.`

- Date.UTC
  - `1. If _month_ is present, let _m_ be ? ToNumber(_month_); else let _m_ be *+0*𝔽.`
  - `1. If _date_ is present, let _dt_ be ? ToNumber(_date_); else let _dt_ be *1*𝔽.`
  - `1. If _hours_ is present, let _h_ be ? ToNumber(_hours_); else let _h_ be *+0*𝔽.`
  - `1. If _minutes_ is present, let _min_ be ? ToNumber(_minutes_); else let _min_ be *+0*𝔽.`
  - `1. If _seconds_ is present, let _s_ be ? ToNumber(_seconds_); else let _s_ be *+0*𝔽.`
  - `1. If _ms_ is present, let _milli_ be ? ToNumber(_ms_); else let _milli_ be *+0*𝔽.`

- DoWait
  - `1. If _q_ is either *NaN* or *+∞*𝔽, let _t_ be +∞; else if _q_ is *-∞*𝔽, let _t_ be 0; else let _t_ be max(ℝ(_q_), 0).`

- Error
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`

- InLeapYear
  - `1. If DaysInYear(YearFromTime(_t_)) is *366*𝔽, return *1*𝔽; else return *+0*𝔽.`

- Array
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`

- RegExp.prototype [ %Symbol.split% ]
  - `1. If _limit_ is *undefined*, let _lim_ be 232 - 1; else let _lim_ be ℝ(? ToUint32(_limit_)).`

- RegExp.prototype.test
  - `1. If _match_ is not *null*, return *true*; else return *false*.`

- RegExpBuiltinExec
  - `1. If _flags_ contains *"g"*, let _global_ be *true*; else let _global_ be *false*.`
  - `1. If _flags_ contains *"y"*, let _sticky_ be *true*; else let _sticky_ be *false*.`
  - `1. If _flags_ contains *"d"*, let _hasIndices_ be *true*; else let _hasIndices_ be *false*.`
  - `1. If _flags_ contains *"u"* or _flags_ contains *"v"*, let _fullUnicode_ be *true*; else let _fullUnicode_ be *false*.`

- RegExpInitialize
  - `1. If _F_ contains *"i"*, let _i_ be *true*; else let _i_ be *false*.`
  - `1. If _F_ contains *"m"*, let _m_ be *true*; else let _m_ be *false*.`
  - `1. If _F_ contains *"s"*, let _s_ be *true*; else let _s_ be *false*.`
  - `1. If _F_ contains *"u"*, let _u_ be *true*; else let _u_ be *false*.`
  - `1. If _F_ contains *"v"*, let _v_ be *true*; else let _v_ be *false*.`

- SharedArrayBuffer.prototype.slice
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- Static Semantics: IsValidRegularExpressionLiteral
  - `1. If _flags_ contains `u`, let _u_ be *true*; else let _u_ be *false*.`
  - `1. If _flags_ contains `v`, let _v_ be *true*; else let _v_ be *false*.`
  - `1. If _parseResult_ is a Parse Node, return *true*; else return *false*.`

- Static Semantics: IsStrict
  - `1. If the source text matched by _node_ is strict mode code, return *true*; else return *false*.`

- String.prototype.endsWith
  - `1. If _endPosition_ is *undefined*, let _pos_ be _len_; else let _pos_ be ? ToIntegerOrInfinity(_endPosition_).`

- String.prototype.slice
  - `1. If _end_ is *undefined*, let _intEnd_ be _len_; else let _intEnd_ be ? ToIntegerOrInfinity(_end_).`

- String.prototype.split
  - `1. If _limit_ is *undefined*, let _lim_ be 232 - 1; else let _lim_ be ℝ(? ToUint32(_limit_)).`

- String.prototype.startsWith
  - `1. If _position_ is *undefined*, let _pos_ be 0; else let _pos_ be ? ToIntegerOrInfinity(_position_).`

- String.prototype.substring
  - `1. If _end_ is *undefined*, let _intEnd_ be _len_; else let _intEnd_ be ? ToIntegerOrInfinity(_end_).`

- Date
  - `1. If _numberOfArgs_ > 2, let _dt_ be ? ToNumber(_values_[2]); else let _dt_ be *1*𝔽.`
  - `1. If _numberOfArgs_ > 3, let _h_ be ? ToNumber(_values_[3]); else let _h_ be *+0*𝔽.`
  - `1. If _numberOfArgs_ > 4, let _min_ be ? ToNumber(_values_[4]); else let _min_ be *+0*𝔽.`
  - `1. If _numberOfArgs_ > 5, let _s_ be ? ToNumber(_values_[5]); else let _s_ be *+0*𝔽.`
  - `1. If _numberOfArgs_ > 6, let _milli_ be ? ToNumber(_values_[6]); else let _milli_ be *+0*𝔽.`

- _TypedArray_
  - `1. If _numberOfArgs_ > 1, let _byteOffset_ be _args_[1]; else let _byteOffset_ be *undefined*.`
  - `1. If _numberOfArgs_ > 2, let _length_ be _args_[2]; else let _length_ be *undefined*.`

- ValidateAndApplyPropertyDescriptor
  - `1. If _Desc_ has a [[Configurable]] field, let _configurable_ be _Desc_.[[Configurable]]; else let _configurable_ be _current_.[[Configurable]].`
  - `1. If _Desc_ has a [[Enumerable]] field, let _enumerable_ be _Desc_.[[Enumerable]]; else let _enumerable_ be _current_.[[Enumerable]].`
  - `1. If _Desc_ has a [[Configurable]] field, let _configurable_ be _Desc_.[[Configurable]]; else let _configurable_ be _current_.[[Configurable]].`
  - `1. If _Desc_ has a [[Enumerable]] field, let _enumerable_ be _Desc_.[[Enumerable]]; else let _enumerable_ be _current_.[[Enumerable]].`

- [[Delete]]
  - `1. If IsValidIntegerIndex(_O_, _numericIndex_) is *false*, return *true*; else return *false*.`

- _NativeError_
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`
