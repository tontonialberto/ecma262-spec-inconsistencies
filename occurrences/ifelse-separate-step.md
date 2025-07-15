# Pattern Analysis: `1\..*If .*, .*\n\s+1\..*Else, .*`

## Summary
- **Sections with matches:** 45
- **Total matches:** 62

## Results

- [ReturnIfAbrupt](https://tc39.es/ecma262/#sec-returnifabrupt)
  - `1. If _argument_ is an abrupt completion, return Completion(_argument_).
          1. Else, set _argument_ to _argument_.[[Value]].`

- [ReturnIfAbrupt](https://tc39.es/ecma262/#sec-returnifabrupt)
  - `1. If _hygienicTemp_ is an abrupt completion, return Completion(_hygienicTemp_).
          1. Else, set _hygienicTemp_ to _hygienicTemp_.[[Value]].`

- [ReturnIfAbrupt](https://tc39.es/ecma262/#sec-returnifabrupt)
  - `1. If _argument_ is an abrupt completion, return Completion(_argument_).
          1. Else, set _argument_ to _argument_.[[Value]].`

- [Number::multiply (
              _x_: a Number,
              _y_: a Number,
            ): a Number](https://tc39.es/ecma262/#sec-numeric-types-number-multiply)
  - `1. If _y_ is *-0*𝔽 or _y_ < *-0*𝔽, return *+0*𝔽.
              1. Else, return *-0*𝔽.`
  - `1. If _x_ < *-0*𝔽, return *+0*𝔽.
              1. Else, return *-0*𝔽.`

- [BinaryAnd (
              _x_: 0 or 1,
              _y_: 0 or 1,
            ): 0 or 1](https://tc39.es/ecma262/#sec-binaryand)
  - `1. If _x_ = 1 and _y_ = 1, return 1.
            1. Else, return 0.`

- [BinaryOr (
              _x_: 0 or 1,
              _y_: 0 or 1,
            ): 0 or 1](https://tc39.es/ecma262/#sec-binaryor)
  - `1. If _x_ = 1 or _y_ = 1, return 1.
            1. Else, return 0.`

- [IfAbruptCloseIterator ( _value_, _iteratorRecord_ )](https://tc39.es/ecma262/#sec-ifabruptcloseiterator)
  - `1. If _value_ is an abrupt completion, return ? IteratorClose(_iteratorRecord_, _value_).
        1. Else, set _value_ to ! _value_.`

- [Static Semantics: LexicallyDeclaredNames ( ): a List of Strings](https://tc39.es/ecma262/#sec-static-semantics-lexicallydeclarednames)
  - `1. If the first |CaseClauses| is present, let _names1_ be the LexicallyDeclaredNames of the first |CaseClauses|.
        1. Else, let _names1_ be a new empty List.`
  - `1. If the second |CaseClauses| is present, let _names3_ be the LexicallyDeclaredNames of the second |CaseClauses|.
        1. Else, let _names3_ be a new empty List.`

- [Static Semantics: LexicallyScopedDeclarations ( ): a List of Parse Nodes](https://tc39.es/ecma262/#sec-static-semantics-lexicallyscopeddeclarations)
  - `1. If the first |CaseClauses| is present, let _declarations1_ be the LexicallyScopedDeclarations of the first |CaseClauses|.
        1. Else, let _declarations1_ be a new empty List.`
  - `1. If the second |CaseClauses| is present, let _declarations3_ be the LexicallyScopedDeclarations of the second |CaseClauses|.
        1. Else, let _declarations3_ be a new empty List.`

- [Static Semantics: VarDeclaredNames ( ): a List of Strings](https://tc39.es/ecma262/#sec-static-semantics-vardeclarednames)
  - `1. If the first |CaseClauses| is present, let _names1_ be the VarDeclaredNames of the first |CaseClauses|.
        1. Else, let _names1_ be a new empty List.`
  - `1. If the second |CaseClauses| is present, let _names3_ be the VarDeclaredNames of the second |CaseClauses|.
        1. Else, let _names3_ be a new empty List.`

- [Static Semantics: VarScopedDeclarations ( ): a List of Parse Nodes](https://tc39.es/ecma262/#sec-static-semantics-varscopeddeclarations)
  - `1. If the first |CaseClauses| is present, let _declarations1_ be the VarScopedDeclarations of the first |CaseClauses|.
        1. Else, let _declarations1_ be a new empty List.`
  - `1. If the second |CaseClauses| is present, let _declarations3_ be the VarScopedDeclarations of the second |CaseClauses|.
        1. Else, let _declarations3_ be a new empty List.`

- [NewFunctionEnvironment (
            _F_: an ECMAScript function object,
            _newTarget_: an Object or *undefined*,
          ): a Function Environment Record](https://tc39.es/ecma262/#sec-newfunctionenvironment)
  - `1. If _F_.[[ThisMode]] is ~lexical~, set _env_.[[ThisBindingStatus]] to ~lexical~.
          1. Else, set _env_.[[ThisBindingStatus]] to ~uninitialized~.`

- [OrdinarySetPrototypeOf (
            _O_: an Object,
            _V_: an Object or *null*,
          ): a Boolean](https://tc39.es/ecma262/#sec-ordinarysetprototypeof)
  - `1. If _p_.[[GetPrototypeOf]] is not the ordinary object internal method defined in , set _done_ to *true*.
              1. Else, set _p_ to _p_.[[Prototype]].`

- [OrdinaryCreateFromConstructor (
          _constructor_: a function object,
          _intrinsicDefaultProto_: a String,
          optional _internalSlotsList_: a List of names of internal slots,
        ): either a normal completion containing an Object or a throw completion](https://tc39.es/ecma262/#sec-ordinarycreatefromconstructor)
  - `1. If _internalSlotsList_ is present, let _slotsList_ be _internalSlotsList_.
        1. Else, let _slotsList_ be a new empty List.`

- [SetFunctionName (
          _F_: a function object,
          _name_: a property key or Private Name,
          optional _prefix_: a String,
        ): ~unused~](https://tc39.es/ecma262/#sec-setfunctionname)
  - `1. If _description_ is *undefined*, set _name_ to the empty String.
          1. Else, set _name_ to the string-concatenation of *"["*, _description_, and *"]"*.`

- [ForIn/OfHeadEvaluation (
            _uninitializedBoundNames_: a List of Strings,
            _expr_: an |Expression| Parse Node or an |AssignmentExpression| Parse Node,
            _iterationKind_: ~enumerate~, ~iterate~, or ~async-iterate~,
          ): either a normal completion containing an Iterator Record or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-forinofheadevaluation)
  - `1. If _iterationKind_ is ~async-iterate~, let _iteratorKind_ be ~async~.
            1. Else, let _iteratorKind_ be ~sync~.`

- [Runtime Semantics: LabelledEvaluation (
          _labelSet_: a List of Strings,
        ): either a normal completion containing either an ECMAScript language value or ~empty~, or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-labelledevaluation)
  - `1. If _stmtResult_.[[Value]] is ~empty~, set _stmtResult_ to NormalCompletion(*undefined*).
            1. Else, set _stmtResult_ to NormalCompletion(_stmtResult_.[[Value]]).`

- [Runtime Semantics: LabelledEvaluation (
          _labelSet_: a List of Strings,
        ): either a normal completion containing either an ECMAScript language value or ~empty~, or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-labelledevaluation)
  - `1. If _stmtResult_.[[Value]] is ~empty~, set _stmtResult_ to NormalCompletion(*undefined*).
            1. Else, set _stmtResult_ to NormalCompletion(_stmtResult_.[[Value]]).`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-try-statement-runtime-semantics-evaluation)
  - `1. If _B_ is a throw completion, let _C_ be Completion(CatchClauseEvaluation of |Catch| with argument _B_.[[Value]]).
        1. Else, let _C_ be _B_.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-try-statement-runtime-semantics-evaluation)
  - `1. If _B_ is a throw completion, let _C_ be Completion(CatchClauseEvaluation of |Catch| with argument _B_.[[Value]]).
        1. Else, let _C_ be _B_.`

- [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-generator-function-definitions-runtime-semantics-evaluation)
  - `1. If _generatorKind_ is ~async~, set _received_ to Completion(AsyncGeneratorYield(? IteratorValue(_innerResult_))).
            1. Else, set _received_ to Completion(GeneratorYield(_innerResult_)).`
  - `1. If _generatorKind_ is ~async~, set _received_ to Completion(AsyncGeneratorYield(? IteratorValue(_innerResult_))).
              1. Else, set _received_ to Completion(GeneratorYield(_innerResult_)).`
  - `1. If _generatorKind_ is ~async~, perform ? AsyncIteratorClose(_iteratorRecord_, _closeCompletion_).
              1. Else, perform ? IteratorClose(_iteratorRecord_, _closeCompletion_).`
  - `1. If _generatorKind_ is ~async~, set _received_ to Completion(AsyncGeneratorYield(? IteratorValue(_innerReturnResult_))).
            1. Else, set _received_ to Completion(GeneratorYield(_innerReturnResult_)).`

- [Runtime Semantics: ClassDefinitionEvaluation (
          _classBinding_: a String or *undefined*,
          _className_: a property key or a Private Name,
        ): either a normal completion containing a function object or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-classdefinitionevaluation)
  - `1. If |ClassBody| is not present, let _constructor_ be ~empty~.
        1. Else, let _constructor_ be the ConstructorMethod of |ClassBody|.`
  - `1. If |ClassBody| is not present, let _elements_ be a new empty List.
        1. Else, let _elements_ be the NonConstructorElements of |ClassBody|.`
  - `1. If IsStatic of _e_ is *false*, let _container_ be _instancePrivateMethods_.
            1. Else, let _container_ be _staticPrivateMethods_.`
  - `1. If IsStatic of _e_ is *false*, append _element_ to _instanceFields_.
            1. Else, append _element_ to _staticElements_.`

- [PerformEval (
            _x_: an ECMAScript language value,
            _strictCaller_: a Boolean,
            _direct_: a Boolean,
          ): either a normal completion containing an ECMAScript language value or a throw completion](https://tc39.es/ecma262/#sec-performeval)
  - `1. If _strictCaller_ is *true*, let _strictEval_ be *true*.
          1. Else, let _strictEval_ be ScriptIsStrict of _script_.`

- [Symbol ( [ _description_ ] )](https://tc39.es/ecma262/#sec-symbol-description)
  - `1. If _description_ is *undefined*, let _descString_ be *undefined*.
          1. Else, let _descString_ be ? ToString(_description_).`

- [Number.prototype.toString ( [ _radix_ ] )](https://tc39.es/ecma262/#sec-number.prototype.tostring)
  - `1. If _radix_ is *undefined*, let _radixMV_ be 10.
          1. Else, let _radixMV_ be ? ToIntegerOrInfinity(_radix_).`

- [BigInt.prototype.toString ( [ _radix_ ] )](https://tc39.es/ecma262/#sec-bigint.prototype.tostring)
  - `1. If _radix_ is *undefined*, let _radixMV_ be 10.
          1. Else, let _radixMV_ be ? ToIntegerOrInfinity(_radix_).`

- [Math.atan2 ( _y_, _x_ )](https://tc39.es/ecma262/#sec-math.atan2)
  - `1. If _ny_ > *+0*𝔽, set _r_ to π - _r_.
            1. Else, set _r_ to -π + _r_.`

- [String.prototype.normalize ( [ _form_ ] )](https://tc39.es/ecma262/#sec-string.prototype.normalize)
  - `1. If _form_ is *undefined*, let _f_ be *"NFC"*.
          1. Else, let _f_ be ? ToString(_form_).`

- [StringPaddingBuiltinsImpl (
              _O_: an ECMAScript language value,
              _maxLength_: an ECMAScript language value,
              _fillString_: an ECMAScript language value,
              _placement_: ~start~ or ~end~,
            ): either a normal completion containing a String or a throw completion](https://tc39.es/ecma262/#sec-stringpaddingbuiltinsimpl)
  - `1. If _fillString_ is *undefined*, set _fillString_ to the String value consisting solely of the code unit 0x0020 (SPACE).
            1. Else, set _fillString_ to ? ToString(_fillString_).`

- [StringPad (
              _S_: a String,
              _maxLength_: a non-negative integer,
              _fillString_: a String,
              _placement_: ~start~ or ~end~,
            ): a String](https://tc39.es/ecma262/#sec-stringpad)
  - `1. If _placement_ is ~start~, return the string-concatenation of _truncatedStringFiller_ and _S_.
            1. Else, return the string-concatenation of _S_ and _truncatedStringFiller_.`

- [CharacterSetMatcher (
              _rer_: a RegExp Record,
              _A_: a CharSet,
              _invert_: a Boolean,
              _direction_: ~forward~ or ~backward~,
            ): a Matcher](https://tc39.es/ecma262/#sec-runtime-semantics-charactersetmatcher-abstract-operation)
  - `1. If _direction_ is ~forward~, let _f_ be _e_ + 1.
              1. Else, let _f_ be _e_ - 1.`

- [BackreferenceMatcher (
              _rer_: a RegExp Record,
              _ns_: a List of positive integers,
              _direction_: ~forward~ or ~backward~,
            ): a Matcher](https://tc39.es/ecma262/#sec-backreference-matcher)
  - `1. If _direction_ is ~forward~, let _f_ be _e_ + _len_.
              1. Else, let _f_ be _e_ - _len_.`

- [RegExpInitialize (
            _obj_: an Object,
            _pattern_: an ECMAScript language value,
            _flags_: an ECMAScript language value,
          ): either a normal completion containing an Object or a throw completion](https://tc39.es/ecma262/#sec-regexpinitialize)
  - `1. If _pattern_ is *undefined*, let _P_ be the empty String.
          1. Else, let _P_ be ? ToString(_pattern_).`
  - `1. If _flags_ is *undefined*, let _F_ be the empty String.
          1. Else, let _F_ be ? ToString(_flags_).`

- [RegExp ( _pattern_, _flags_ )](https://tc39.es/ecma262/#sec-regexp-pattern-flags)
  - `1. If _flags_ is *undefined*, let _F_ be _pattern_.[[OriginalFlags]].
            1. Else, let _F_ be _flags_.`

- [RegExp.prototype [ %Symbol.matchAll% ] ( _string_ )](https://tc39.es/ecma262/#sec-regexp-prototype-%symbol.matchall%)
  - `1. If _flags_ contains *"g"*, let _global_ be *true*.
          1. Else, let _global_ be *false*.`
  - `1. If _flags_ contains *"u"* or _flags_ contains *"v"*, let _fullUnicode_ be *true*.
          1. Else, let _fullUnicode_ be *false*.`

- [RegExp.prototype [ %Symbol.split% ] ( _string_, _limit_ )](https://tc39.es/ecma262/#sec-regexp.prototype-%symbol.split%)
  - `1. If _flags_ contains *"u"* or _flags_ contains *"v"*, let _unicodeMatching_ be *true*.
          1. Else, let _unicodeMatching_ be *false*.`
  - `1. If _flags_ contains *"y"*, let _newFlags_ be _flags_.
          1. Else, let _newFlags_ be the string-concatenation of _flags_ and *"y"*.`

- [FlattenIntoArray (
              _target_: an Object,
              _source_: an Object,
              _sourceLen_: a non-negative integer,
              _start_: a non-negative integer,
              _depth_: a non-negative integer or +∞,
              optional _mapperFunction_: a function object,
              optional _thisArg_: an ECMAScript language value,
            ): either a normal completion containing a non-negative integer or a throw completion](https://tc39.es/ecma262/#sec-flattenintoarray)
  - `1. If _depth_ = +∞, let _newDepth_ be +∞.
                  1. Else, let _newDepth_ be _depth_ - 1.`

- [Array.prototype.join ( _separator_ )](https://tc39.es/ecma262/#sec-array.prototype.join)
  - `1. If _separator_ is *undefined*, let _sep_ be *","*.
          1. Else, let _sep_ be ? ToString(_separator_).`

- [Array.prototype.with ( _index_, _value_ )](https://tc39.es/ecma262/#sec-array.prototype.with)
  - `1. If _relativeIndex_ ≥ 0, let _actualIndex_ be _relativeIndex_.
          1. Else, let _actualIndex_ be _len_ + _relativeIndex_.`
  - `1. If _k_ = _actualIndex_, let _fromValue_ be _value_.
            1. Else, let _fromValue_ be ? Get(_O_, _Pk_).`

- [%TypedArray%.prototype.join ( _separator_ )](https://tc39.es/ecma262/#sec-%typedarray%.prototype.join)
  - `1. If _separator_ is *undefined*, let _sep_ be *","*.
          1. Else, let _sep_ be ? ToString(_separator_).`

- [%TypedArray%.prototype.with ( _index_, _value_ )](https://tc39.es/ecma262/#sec-%typedarray%.prototype.with)
  - `1. If _relativeIndex_ ≥ 0, let _actualIndex_ be _relativeIndex_.
          1. Else, let _actualIndex_ be _len_ + _relativeIndex_.`
  - `1. If _O_.[[ContentType]] is ~bigint~, let _numericValue_ be ? ToBigInt(_value_).
          1. Else, let _numericValue_ be ? ToNumber(_value_).`
  - `1. If _k_ = _actualIndex_, let _fromValue_ be _numericValue_.
            1. Else, let _fromValue_ be ! Get(_O_, _Pk_).`

- [DoWait (
            _mode_: ~sync~ or ~async~,
            _typedArray_: an ECMAScript language value,
            _index_: an ECMAScript language value,
            _value_: an ECMAScript language value,
            _timeout_: an ECMAScript language value,
          ): either a normal completion containing either an Object, *"not-equal"*, *"timed-out"*, or *"ok"*, or a throw completion](https://tc39.es/ecma262/#sec-dowait)
  - `1. If _arrayTypeName_ is *"BigInt64Array"*, let _v_ be ? ToBigInt64(_value_).
          1. Else, let _v_ be ? ToInt32(_value_).`

- [NewPromiseReactionJob (
            _reaction_: a PromiseReaction Record,
            _argument_: an ECMAScript language value,
          ): a Record with fields [[Job]] (a Job Abstract Closure) and [[Realm]] (a Realm Record or *null*)](https://tc39.es/ecma262/#sec-newpromisereactionjob)
  - `1. If _getHandlerRealmResult_ is a normal completion, set _handlerRealm_ to _getHandlerRealmResult_.[[Value]].
            1. Else, set _handlerRealm_ to the current Realm Record.`

- [NewPromiseResolveThenableJob (
            _promiseToResolve_: a Promise,
            _thenable_: an Object,
            _then_: a JobCallback Record,
          ): a Record with fields [[Job]] (a Job Abstract Closure) and [[Realm]] (a Realm Record)](https://tc39.es/ecma262/#sec-newpromiseresolvethenablejob)
  - `1. If _getThenRealmResult_ is a normal completion, let _thenRealm_ be _getThenRealmResult_.[[Value]].
          1. Else, let _thenRealm_ be the current Realm Record.`

- [GetGeneratorKind ( ): ~non-generator~, ~sync~, or ~async~](https://tc39.es/ecma262/#sec-getgeneratorkind)
  - `1. If _generator_ has an [[AsyncGeneratorState]] internal slot, return ~async~.
          1. Else, return ~sync~.`

