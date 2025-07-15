# Pattern Analysis: `1\..*If .*, .*; otherwise .*`

## Summary
- **Sections with matches:** 27
- **Total matches:** 31

## Results

- [BigInt::lessThan (
              _x_: a BigInt,
              _y_: a BigInt,
            ): a Boolean](https://tc39.es/ecma262/#sec-numeric-types-bigint-lessThan)
  - `1. If ℝ(_x_) < ℝ(_y_), return *true*; otherwise return *false*.`

- [BigInt::equal (
              _x_: a BigInt,
              _y_: a BigInt,
            ): a Boolean](https://tc39.es/ecma262/#sec-numeric-types-bigint-equal)
  - `1. If ℝ(_x_) = ℝ(_y_), return *true*; otherwise return *false*.`

- [IsPropertyReference (
            _V_: a Reference Record,
          ): a Boolean](https://tc39.es/ecma262/#sec-ispropertyreference)
  - `1. If _V_.[[Base]] is an Environment Record, return *false*; otherwise return *true*.`

- [IsUnresolvableReference (
            _V_: a Reference Record,
          ): a Boolean](https://tc39.es/ecma262/#sec-isunresolvablereference)
  - `1. If _V_.[[Base]] is ~unresolvable~, return *true*; otherwise return *false*.`

- [IsSuperReference (
            _V_: a Reference Record,
          ): a Boolean](https://tc39.es/ecma262/#sec-issuperreference)
  - `1. If _V_.[[ThisValue]] is not ~empty~, return *true*; otherwise return *false*.`

- [IsPrivateReference (
            _V_: a Reference Record,
          ): a Boolean](https://tc39.es/ecma262/#sec-isprivatereference)
  - `1. If _V_.[[ReferencedName]] is a Private Name, return *true*; otherwise return *false*.`

- [GetThisValue (
            _V_: a Reference Record,
          ): an ECMAScript language value](https://tc39.es/ecma262/#sec-getthisvalue)
  - `1. If IsSuperReference(_V_) is *true*, return _V_.[[ThisValue]]; otherwise return _V_.[[Base]].`

- [ToInt32 (
          _argument_: an ECMAScript language value,
        ): either a normal completion containing an integral Number or a throw completion](https://tc39.es/ecma262/#sec-toint32)
  - `1. If _int32bit_ ≥ 231, return 𝔽(_int32bit_ - 232); otherwise return 𝔽(_int32bit_).`

- [ToInt16 (
          _argument_: an ECMAScript language value,
        ): either a normal completion containing an integral Number or a throw completion](https://tc39.es/ecma262/#sec-toint16)
  - `1. If _int16bit_ ≥ 215, return 𝔽(_int16bit_ - 216); otherwise return 𝔽(_int16bit_).`

- [ToInt8 (
          _argument_: an ECMAScript language value,
        ): either a normal completion containing an integral Number or a throw completion](https://tc39.es/ecma262/#sec-toint8)
  - `1. If _int8bit_ ≥ 27, return 𝔽(_int8bit_ - 28); otherwise return 𝔽(_int8bit_).`

- [ToBigInt64 (
          _argument_: an ECMAScript language value,
        ): either a normal completion containing a BigInt or a throw completion](https://tc39.es/ecma262/#sec-tobigint64)
  - `1. If _int64bit_ ≥ 263, return ℤ(_int64bit_ - 264); otherwise return ℤ(_int64bit_).`

- [IsLessThan (
          _x_: an ECMAScript language value,
          _y_: an ECMAScript language value,
          _LeftFirst_: a Boolean,
        ): either a normal completion containing either a Boolean or *undefined*, or a throw completion](https://tc39.es/ecma262/#sec-islessthan)
  - `1. If ℝ(_nx_) < ℝ(_ny_), return *true*; otherwise return *false*.`

- [IsLooselyEqual (
          _x_: an ECMAScript language value,
          _y_: an ECMAScript language value,
        ): either a normal completion containing a Boolean or a throw completion](https://tc39.es/ecma262/#sec-islooselyequal)
  - `1. If ℝ(_x_) = ℝ(_y_), return *true*; otherwise return *false*.`

- [Static Semantics: Contains (
          _symbol_: a grammar symbol,
        ): a Boolean](https://tc39.es/ecma262/#sec-static-semantics-contains)
  - `1. If |ClassHeritage| is present, return *true*; otherwise return *false*.`

- [GetBindingValue (
              _N_: a String,
              _S_: a Boolean,
            ): either a normal completion containing an ECMAScript language value or a throw completion](https://tc39.es/ecma262/#sec-object-environment-records-getbindingvalue-n-s)
  - `1. If _S_ is *false*, return *undefined*; otherwise throw a *ReferenceError* exception.`

- [Runtime Semantics: ForLoopEvaluation (
            _labelSet_: a List of Strings,
          ): either a normal completion containing an ECMAScript language value or an abrupt completion](https://tc39.es/ecma262/#sec-runtime-semantics-forloopevaluation)
  - `1. If _isConst_ is *false*, let _perIterationLets_ be _boundNames_; otherwise let _perIterationLets_ be a new empty List.`

- [Error.prototype.toString ( )](https://tc39.es/ecma262/#sec-error.prototype.tostring)
  - `1. If _name_ is *undefined*, set _name_ to *"Error"*; otherwise set _name_ to ? ToString(_name_).`
  - `1. If _msg_ is *undefined*, set _msg_ to the empty String; otherwise set _msg_ to ? ToString(_msg_).`

- [Math.imul ( _x_, _y_ )](https://tc39.es/ecma262/#sec-math.imul)
  - `1. If _product_ ≥ 231, return 𝔽(_product_ - 232); otherwise return 𝔽(_product_).`

- [RepeatMatcher (
              _m_: a Matcher,
              _min_: a non-negative integer,
              _max_: a non-negative integer or +∞,
              _greedy_: a Boolean,
              _x_: a MatchState,
              _c_: a MatcherContinuation,
              _parenIndex_: a non-negative integer,
              _parenCount_: a non-negative integer,
            ): either a MatchState or ~failure~](https://tc39.es/ecma262/#sec-runtime-semantics-repeatmatcher-abstract-operation)
  - `1. If _min_ = 0, let _min2_ be 0; otherwise let _min2_ be _min_ - 1.`
  - `1. If _max_ = +∞, let _max2_ be +∞; otherwise let _max2_ be _max_ - 1.`

- [AllocateArrayBuffer (
            _constructor_: a constructor,
            _byteLength_: a non-negative integer,
            optional _maxByteLength_: a non-negative integer or ~empty~,
          ): either a normal completion containing an ArrayBuffer or a throw completion](https://tc39.es/ecma262/#sec-allocatearraybuffer)
  - `1. If _maxByteLength_ is present and _maxByteLength_ is not ~empty~, let _allocatingResizableBuffer_ be *true*; otherwise let _allocatingResizableBuffer_ be *false*.`

- [GetRawBytesFromSharedBlock (
            _block_: a Shared Data Block,
            _byteIndex_: a non-negative integer,
            _type_: a TypedArray element type,
            _isTypedArray_: a Boolean,
            _order_: ~seq-cst~ or ~unordered~,
          ): a List of byte values](https://tc39.es/ecma262/#sec-getrawbytesfromsharedblock)
  - `1. If _isTypedArray_ is *true* and IsNoTearConfiguration(_type_, _order_) is *true*, let _noTear_ be *true*; otherwise let _noTear_ be *false*.`

- [SetValueInBuffer (
            _arrayBuffer_: an ArrayBuffer or SharedArrayBuffer,
            _byteIndex_: a non-negative integer,
            _type_: a TypedArray element type,
            _value_: a Number or a BigInt,
            _isTypedArray_: a Boolean,
            _order_: ~seq-cst~, ~unordered~, or ~init~,
            optional _isLittleEndian_: a Boolean,
          ): ~unused~](https://tc39.es/ecma262/#sec-setvalueinbuffer)
  - `1. If _isTypedArray_ is *true* and IsNoTearConfiguration(_type_, _order_) is *true*, let _noTear_ be *true*; otherwise let _noTear_ be *false*.`

- [get ArrayBuffer.prototype.resizable](https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.resizable)
  - `1. If IsFixedLengthArrayBuffer(_O_) is *false*, return *true*; otherwise return *false*.`

- [AllocateSharedArrayBuffer (
            _constructor_: a constructor,
            _byteLength_: a non-negative integer,
            optional _maxByteLength_: a non-negative integer or ~empty~,
          ): either a normal completion containing a SharedArrayBuffer or a throw completion](https://tc39.es/ecma262/#sec-allocatesharedarraybuffer)
  - `1. If _maxByteLength_ is present and _maxByteLength_ is not ~empty~, let _allocatingGrowableBuffer_ be *true*; otherwise let _allocatingGrowableBuffer_ be *false*.`
  - `1. If _allocatingGrowableBuffer_ is *true*, let _allocLength_ be _maxByteLength_; otherwise let _allocLength_ be _byteLength_.`

- [get SharedArrayBuffer.prototype.growable](https://tc39.es/ecma262/#sec-get-sharedarraybuffer.prototype.growable)
  - `1. If IsFixedLengthArrayBuffer(_O_) is *false*, return *true*; otherwise return *false*.`

- [JSON.stringify ( _value_ [ , _replacer_ [ , _space_ ] ] )](https://tc39.es/ecma262/#sec-json.stringify)
  - `1. If _spaceMV_ < 1, let _gap_ be the empty String; otherwise let _gap_ be the String value containing _spaceMV_ occurrences of the code unit 0x0020 (SPACE).`
  - `1. If the length of _space_ ≤ 10, let _gap_ be _space_; otherwise let _gap_ be the substring of _space_ from 0 to 10.`

- [String.prototype.substr ( _start_, _length_ )](https://tc39.es/ecma262/#sec-string.prototype.substr)
  - `1. If _length_ is *undefined*, let _intLength_ be _size_; otherwise let _intLength_ be ? ToIntegerOrInfinity(_length_).`

