# Pattern Analysis: `1\..*If .*, .*; otherwise,.*`

## Summary
- **Sections with matches:** 18
- **Total matches:** 26

## Results

- [SameValueNonNumber (
          _x_: an ECMAScript language value, but not a Number,
          _y_: an ECMAScript language value, but not a Number,
        ): a Boolean](https://tc39.es/ecma262/#sec-samevaluenonnumber)
  - `1. If _x_ and _y_ have the same length and the same code units in the same positions, return *true*; otherwise, return *false*.`
  - `1. If _x_ and _y_ are both *true* or both *false*, return *true*; otherwise, return *false*.`
  - `1. If _x_ is _y_, return *true*; otherwise, return *false*.`

- [HasThisBinding ( ): a Boolean](https://tc39.es/ecma262/#sec-function-environment-records-hasthisbinding)
  - `1. If _envRec_.[[ThisBindingStatus]] is ~lexical~, return *false*; otherwise, return *true*.`

- [HasSuperBinding ( ): a Boolean](https://tc39.es/ecma262/#sec-function-environment-records-hassuperbinding)
  - `1. If _envRec_.[[FunctionObject]].[[HomeObject]] is *undefined*, return *false*; otherwise, return *true*.`

- [BuiltinCallOrConstruct (
          _F_: a built-in function object,
          _thisArgument_: an ECMAScript language value or ~uninitialized~,
          _argumentsList_: a List of ECMAScript language values,
          _newTarget_: a constructor or *undefined*,
        ): either a normal completion containing an ECMAScript language value or a throw completion](https://tc39.es/ecma262/#sec-builtincallorconstruct)
  - `1. [id="step-call-builtin-function-result"] Let _result_ be the Completion Record that is the result of evaluating _F_ in a manner that conforms to the specification of _F_. If _thisArgument_ is ~uninitialized~, the *this* value is uninitialized; otherwise, _thisArgument_ provides the *this* value. _argumentsList_ provides the named parameters. _newTarget_ provides the NewTarget value.`

- [Runtime Semantics: ForLoopEvaluation (
            _labelSet_: a List of Strings,
          ): either a normal completion containing an ECMAScript language value or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-forloopevaluation)
  - `1. If the second |Expression| is present, let _test_ be the second |Expression|; otherwise, let _test_ be ~empty~.`
  - `1. If the third |Expression| is present, let _increment_ be the third |Expression|; otherwise, let _increment_ be ~empty~.`

- [Runtime Semantics: ForLoopEvaluation (
            _labelSet_: a List of Strings,
          ): either a normal completion containing an ECMAScript language value or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-forloopevaluation)
  - `1. If the first |Expression| is present, let _test_ be the first |Expression|; otherwise, let _test_ be ~empty~.`
  - `1. If the second |Expression| is present, let _increment_ be the second |Expression|; otherwise, let _increment_ be ~empty~.`

- [Runtime Semantics: ForLoopEvaluation (
            _labelSet_: a List of Strings,
          ): either a normal completion containing an ECMAScript language value or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-forloopevaluation)
  - `1. If the first |Expression| is present, let _test_ be the first |Expression|; otherwise, let _test_ be ~empty~.`
  - `1. If the second |Expression| is present, let _increment_ be the second |Expression|; otherwise, let _increment_ be ~empty~.`

- [Static Semantics: FunctionBodyContainsUseStrict ( ): a Boolean](https://tc39.es/ecma262/#sec-static-semantics-functionbodycontainsusestrict)
  - `1. If the Directive Prologue of |FunctionBody| contains a Use Strict Directive, return *true*; otherwise, return *false*.`

- [Static Semantics: ScriptIsStrict ( ): a Boolean](https://tc39.es/ecma262/#sec-scriptisstrict)
  - `1. If |ScriptBody| is present and the Directive Prologue of |ScriptBody| contains a Use Strict Directive, return *true*; otherwise, return *false*.`

- [parseInt ( _string_, _radix_ )](https://tc39.es/ecma262/#sec-parseint-string-radix)
  - `1. If _S_ contains a code unit that is not a radix-_R_ digit, let _end_ be the index within _S_ of the first such code unit; otherwise, let _end_ be the length of _S_.`

- [BigInt.asIntN ( _bits_, _bigint_ )](https://tc39.es/ecma262/#sec-bigint.asintn)
  - `1. If _mod_ ≥ 2_bits_ - 1, return ℤ(_mod_ - 2_bits_); otherwise, return ℤ(_mod_).`

- [Date.prototype.setFullYear ( _year_ [ , _month_ [ , _date_ ] ] )](https://tc39.es/ecma262/#sec-date.prototype.setfullyear)
  - `1. If _t_ is *NaN*, set _t_ to *+0*𝔽; otherwise, set _t_ to LocalTime(_t_).`
  - `1. If _month_ is not present, let _m_ be MonthFromTime(_t_); otherwise, let _m_ be ? ToNumber(_month_).`
  - `1. If _date_ is not present, let _dt_ be DateFromTime(_t_); otherwise, let _dt_ be ? ToNumber(_date_).`

- [Date.prototype.setUTCFullYear ( _year_ [ , _month_ [ , _date_ ] ] )](https://tc39.es/ecma262/#sec-date.prototype.setutcfullyear)
  - `1. If _month_ is not present, let _m_ be MonthFromTime(_t_); otherwise, let _m_ be ? ToNumber(_month_).`
  - `1. If _date_ is not present, let _dt_ be DateFromTime(_t_); otherwise, let _dt_ be ? ToNumber(_date_).`

- [DateString (
              _tv_: a Number, but not *NaN*,
            ): a String](https://tc39.es/ecma262/#sec-datestring)
  - `1. If _yv_ is *+0*𝔽 or _yv_ > *+0*𝔽, let _yearSign_ be the empty String; otherwise, let _yearSign_ be *"-"*.`

- [Date.prototype.toUTCString ( )](https://tc39.es/ecma262/#sec-date.prototype.toutcstring)
  - `1. If _yv_ is *+0*𝔽 or _yv_ > *+0*𝔽, let _yearSign_ be the empty String; otherwise, let _yearSign_ be *"-"*.`

- [String.prototype.lastIndexOf ( _searchString_ [ , _position_ ] )](https://tc39.es/ecma262/#sec-string.prototype.lastindexof)
  - `1. If _numPos_ is *NaN*, let _pos_ be +∞; otherwise, let _pos_ be ! ToIntegerOrInfinity(_numPos_).`

- [SetTypedArrayFromTypedArray (
              _target_: a TypedArray,
              _targetOffset_: a non-negative integer or +∞,
              _source_: a TypedArray,
            ): either a normal completion containing ~unused~ or a throw completion](https://tc39.es/ecma262/#sec-settypedarrayfromtypedarray)
  - `1. If IsSharedArrayBuffer(_srcBuffer_) is *true*, IsSharedArrayBuffer(_targetBuffer_) is *true*, and _srcBuffer_.[[ArrayBufferData]] is _targetBuffer_.[[ArrayBufferData]], let _sameSharedArrayBuffer_ be *true*; otherwise, let _sameSharedArrayBuffer_ be *false*.`

- [Date.prototype.setYear ( _year_ )](https://tc39.es/ecma262/#sec-date.prototype.setyear)
  - `1. If _t_ is *NaN*, set _t_ to *+0*𝔽; otherwise, set _t_ to LocalTime(_t_).`

