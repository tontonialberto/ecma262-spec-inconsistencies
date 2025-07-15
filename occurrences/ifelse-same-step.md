# Pattern Analysis: `1\..*[iI]f .*, .*(; else if .*, .*)*; else .*`

## Summary
- **Sections with matches:** 34
- **Total matches:** 56

## Results

- [ValidateAndApplyPropertyDescriptor (
            _O_: an Object or *undefined*,
            _P_: a property key,
            _extensible_: a Boolean,
            _Desc_: a Property Descriptor,
            _current_: a Property Descriptor or *undefined*,
          ): a Boolean](https://tc39.es/ecma262/#sec-validateandapplypropertydescriptor)
  - `1. If _Desc_ has a [[Configurable]] field, let _configurable_ be _Desc_.[[Configurable]]; else let _configurable_ be _current_.[[Configurable]].`
  - `1. If _Desc_ has a [[Enumerable]] field, let _enumerable_ be _Desc_.[[Enumerable]]; else let _enumerable_ be _current_.[[Enumerable]].`
  - `1. If _Desc_ has a [[Configurable]] field, let _configurable_ be _Desc_.[[Configurable]]; else let _configurable_ be _current_.[[Configurable]].`
  - `1. If _Desc_ has a [[Enumerable]] field, let _enumerable_ be _Desc_.[[Enumerable]]; else let _enumerable_ be _current_.[[Enumerable]].`

- [[[Delete]] (
            _P_: a property key,
          ): a normal completion containing a Boolean](https://tc39.es/ecma262/#sec-typedarray-delete)
  - `1. If IsValidIntegerIndex(_O_, _numericIndex_) is *false*, return *true*; else return *false*.`

- [Static Semantics: IsStrict (
            _node_: a Parse Node,
          ): a Boolean](https://tc39.es/ecma262/#sec-isstrict)
  - `1. If the source text matched by _node_ is strict mode code, return *true*; else return *false*.`

- [Static Semantics: IsValidRegularExpressionLiteral (
            _literal_: a |RegularExpressionLiteral| Parse Node,
          ): a Boolean](https://tc39.es/ecma262/#sec-isvalidregularexpressionliteral)
  - `1. If _flags_ contains `u`, let _u_ be *true*; else let _u_ be *false*.`
  - `1. If _flags_ contains `v`, let _v_ be *true*; else let _v_ be *false*.`
  - `1. If _parseResult_ is a Parse Node, return *true*; else return *false*.`

- [Boolean.prototype.toString ( )](https://tc39.es/ecma262/#sec-boolean.prototype.tostring)
  - `1. If _b_ is *true*, return *"true"*; else return *"false"*.`

- [Error ( _message_ [ , _options_ ] )](https://tc39.es/ecma262/#sec-error-message)
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`

- [_NativeError_ ( _message_ [ , _options_ ] )](https://tc39.es/ecma262/#sec-nativeerror)
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`

- [AggregateError ( _errors_, _message_ [ , _options_ ] )](https://tc39.es/ecma262/#sec-aggregate-error)
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`

- [InLeapYear (
            _t_: a finite time value,
          ): *+0*𝔽 or *1*𝔽](https://tc39.es/ecma262/#sec-inleapyear)
  - `1. If DaysInYear(YearFromTime(_t_)) is *366*𝔽, return *1*𝔽; else return *+0*𝔽.`

- [Date ( ..._values_ )](https://tc39.es/ecma262/#sec-date)
  - `1. If _numberOfArgs_ > 2, let _dt_ be ? ToNumber(_values_[2]); else let _dt_ be *1*𝔽.`
  - `1. If _numberOfArgs_ > 3, let _h_ be ? ToNumber(_values_[3]); else let _h_ be *+0*𝔽.`
  - `1. If _numberOfArgs_ > 4, let _min_ be ? ToNumber(_values_[4]); else let _min_ be *+0*𝔽.`
  - `1. If _numberOfArgs_ > 5, let _s_ be ? ToNumber(_values_[5]); else let _s_ be *+0*𝔽.`
  - `1. If _numberOfArgs_ > 6, let _milli_ be ? ToNumber(_values_[6]); else let _milli_ be *+0*𝔽.`

- [Date.UTC ( _year_ [ , _month_ [ , _date_ [ , _hours_ [ , _minutes_ [ , _seconds_ [ , _ms_ ] ] ] ] ] ] )](https://tc39.es/ecma262/#sec-date.utc)
  - `1. If _month_ is present, let _m_ be ? ToNumber(_month_); else let _m_ be *+0*𝔽.`
  - `1. If _date_ is present, let _dt_ be ? ToNumber(_date_); else let _dt_ be *1*𝔽.`
  - `1. If _hours_ is present, let _h_ be ? ToNumber(_hours_); else let _h_ be *+0*𝔽.`
  - `1. If _minutes_ is present, let _min_ be ? ToNumber(_minutes_); else let _min_ be *+0*𝔽.`
  - `1. If _seconds_ is present, let _s_ be ? ToNumber(_seconds_); else let _s_ be *+0*𝔽.`
  - `1. If _ms_ is present, let _milli_ be ? ToNumber(_ms_); else let _milli_ be *+0*𝔽.`

- [String.prototype.endsWith ( _searchString_ [ , _endPosition_ ] )](https://tc39.es/ecma262/#sec-string.prototype.endswith)
  - `1. If _endPosition_ is *undefined*, let _pos_ be _len_; else let _pos_ be ? ToIntegerOrInfinity(_endPosition_).`

- [String.prototype.slice ( _start_, _end_ )](https://tc39.es/ecma262/#sec-string.prototype.slice)
  - `1. If _end_ is *undefined*, let _intEnd_ be _len_; else let _intEnd_ be ? ToIntegerOrInfinity(_end_).`

- [String.prototype.split ( _separator_, _limit_ )](https://tc39.es/ecma262/#sec-string.prototype.split)
  - `1. If _limit_ is *undefined*, let _lim_ be 232 - 1; else let _lim_ be ℝ(? ToUint32(_limit_)).`

- [String.prototype.startsWith ( _searchString_ [ , _position_ ] )](https://tc39.es/ecma262/#sec-string.prototype.startswith)
  - `1. If _position_ is *undefined*, let _pos_ be 0; else let _pos_ be ? ToIntegerOrInfinity(_position_).`

- [String.prototype.substring ( _start_, _end_ )](https://tc39.es/ecma262/#sec-string.prototype.substring)
  - `1. If _end_ is *undefined*, let _intEnd_ be _len_; else let _intEnd_ be ? ToIntegerOrInfinity(_end_).`

- [RegExpInitialize (
            _obj_: an Object,
            _pattern_: an ECMAScript language value,
            _flags_: an ECMAScript language value,
          ): either a normal completion containing an Object or a throw completion](https://tc39.es/ecma262/#sec-regexpinitialize)
  - `1. If _F_ contains *"i"*, let _i_ be *true*; else let _i_ be *false*.`
  - `1. If _F_ contains *"m"*, let _m_ be *true*; else let _m_ be *false*.`
  - `1. If _F_ contains *"s"*, let _s_ be *true*; else let _s_ be *false*.`
  - `1. If _F_ contains *"u"*, let _u_ be *true*; else let _u_ be *false*.`
  - `1. If _F_ contains *"v"*, let _v_ be *true*; else let _v_ be *false*.`

- [RegExp.prototype [ %Symbol.split% ] ( _string_, _limit_ )](https://tc39.es/ecma262/#sec-regexp.prototype-%symbol.split%)
  - `1. If _limit_ is *undefined*, let _lim_ be 232 - 1; else let _lim_ be ℝ(? ToUint32(_limit_)).`

- [RegExp.prototype.test ( _S_ )](https://tc39.es/ecma262/#sec-regexp.prototype.test)
  - `1. If _match_ is not *null*, return *true*; else return *false*.`

- [RegExpBuiltinExec (
            _R_: an initialized RegExp instance,
            _S_: a String,
          ): either a normal completion containing either an Array exotic object or *null*, or a throw completion](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
  - `1. If _flags_ contains *"g"*, let _global_ be *true*; else let _global_ be *false*.`
  - `1. If _flags_ contains *"y"*, let _sticky_ be *true*; else let _sticky_ be *false*.`
  - `1. If _flags_ contains *"d"*, let _hasIndices_ be *true*; else let _hasIndices_ be *false*.`
  - `1. If _flags_ contains *"u"* or _flags_ contains *"v"*, let _fullUnicode_ be *true*; else let _fullUnicode_ be *false*.`

- [Array ( ..._values_ )](https://tc39.es/ecma262/#sec-array)
  - `1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.`

- [Array.prototype.copyWithin ( _target_, _start_ [ , _end_ ] )](https://tc39.es/ecma262/#sec-array.prototype.copywithin)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [Array.prototype.fill ( _value_ [ , _start_ [ , _end_ ] ] )](https://tc39.es/ecma262/#sec-array.prototype.fill)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [Array.prototype.lastIndexOf ( _searchElement_ [ , _fromIndex_ ] )](https://tc39.es/ecma262/#sec-array.prototype.lastindexof)
  - `1. If _fromIndex_ is present, let _n_ be ? ToIntegerOrInfinity(_fromIndex_); else let _n_ be _len_ - 1.`

- [Array.prototype.slice ( _start_, _end_ )](https://tc39.es/ecma262/#sec-array.prototype.slice)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [%TypedArray%.prototype.copyWithin ( _target_, _start_ [ , _end_ ] )](https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [%TypedArray%.prototype.fill ( _value_ [ , _start_ [ , _end_ ] ] )](https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [%TypedArray%.prototype.lastIndexOf ( _searchElement_ [ , _fromIndex_ ] )](https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof)
  - `1. If _fromIndex_ is present, let _n_ be ? ToIntegerOrInfinity(_fromIndex_); else let _n_ be _len_ - 1.`

- [%TypedArray%.prototype.slice ( _start_, _end_ )](https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _srcArrayLength_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [%TypedArray%.prototype.subarray ( _start_, _end_ )](https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _srcLength_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [_TypedArray_ ( ..._args_ )](https://tc39.es/ecma262/#sec-typedarray)
  - `1. If _numberOfArgs_ > 1, let _byteOffset_ be _args_[1]; else let _byteOffset_ be *undefined*.`
  - `1. If _numberOfArgs_ > 2, let _length_ be _args_[2]; else let _length_ be *undefined*.`

- [ArrayBuffer.prototype.slice ( _start_, _end_ )](https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [SharedArrayBuffer.prototype.slice ( _start_, _end_ )](https://tc39.es/ecma262/#sec-sharedarraybuffer.prototype.slice)
  - `1. If _end_ is *undefined*, let _relativeEnd_ be _len_; else let _relativeEnd_ be ? ToIntegerOrInfinity(_end_).`

- [DoWait (
            _mode_: ~sync~ or ~async~,
            _typedArray_: an ECMAScript language value,
            _index_: an ECMAScript language value,
            _value_: an ECMAScript language value,
            _timeout_: an ECMAScript language value,
          ): either a normal completion containing either an Object, *"not-equal"*, *"timed-out"*, or *"ok"*, or a throw completion](https://tc39.es/ecma262/#sec-dowait)
  - `1. If _q_ is either *NaN* or *+∞*𝔽, let _t_ be +∞; else if _q_ is *-∞*𝔽, let _t_ be 0; else let _t_ be max(ℝ(_q_), 0).`

