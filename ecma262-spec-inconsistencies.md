# Inconsistencies in the ECMA-262 specification syntax

## Introduction

We refer to the 2024 version of the specification.

! Add a link to each algorithm.

Different notations (syntax) used to specify the exact same semantics.

This document is structured as follows: each main section starts with an explanation of the issue and the proposed solution. Then, I provide a list of occurences in the specification as a quick reference.

## Object field references

### Description of the issue

Referencing a field of an object is specified using different notations:
1. `the value of _ref_.[[Property]]`
    - occurrences: 2
    - regex: `1\..*the value of _.*_\..*`
2. `the value of _ref_'s [[Property]] attribute`
    - occurrences: 6
    - regex: `1\..*the value of.*'s .* attribute.*`
3. `_ref_'s [[Property]] value`
    - occurrences: ???
    - regex: `1\..*'s [^\s]+ value.*`
4. `_ref_.[[Property]]` 
    - occurrences: 1775 
    - regex: `1\..*_.*_\.[^s]+.*`

As all notations imply the same semantics, I suggest to update the specification so that only notation 4 is used.

| Notation | Current                                                                 | To be                                 |
|----------|-------------------------------------------------------------------------|---------------------------------------|
| 1        | Let _methods_ be the value of _constructor_.[[PrivateMethods]].         | Let _methods_ be _constructor_.[[PrivateMethods]]. |
| 2        | Set _D_.[[Value]] to the value of _X_'s [[Value]] attribute.            | Set _D_.[[Value]] to _X_.[[Value]].   |
| 3        | Let _description_ be _name_'s [[Description]] value.                    | Let _description_ be _name_.[[Description]]. |


### Description of the issue




## If-then-else Steps with single if/else Step

### Description of the issue

Conditional steps including a non-empty else step, for which neither then nor else steps are blocks, are specified using different notations:
1. If, else in the same step ("else" keyword): 
    - If `cond`, `thenStep`; else `elseStep`
2. If, else in the same step ("otherwise" keyword):
    
    a. If `cond`, `thenStep`; otherwise `elseStep`

    b. If `cond`, `thenStep`; otherwise, `elseStep`
3. If, else in different steps:
    - If `cond`, `thenStep`
        
        a. Else, `elseStep`
        
        b. Else `elseStep`

Notice also that in notation 2 and 3 the Else and otherwise keywords are respectively and occasionally followed by a comma.

In the considered version of the spec, there are:
- 67 occurrencies of notation 1, 
- 66 occurrencies of notation 2 (of which 34 have comma, and 32 don't)
- difficult to estimate the number of occurrence of notation 3 since the spec also includes if/else _blocks_

I suggest the following updates to the spec:
- Enforce only one keyword between "else" and "otherwise".
- Enforce whether or not to use the comma after the "else" or the "otherwise" keyword.
- Enforce a style for specifying if-then-else steps that don't require then/else blocks (either notation 1/2, or notation 3).

### Occurrences to be updated

! No need to list all the occurrences, just provide the regex.

## ToObject specification

### Description of the issue

! RequireObjectCoercible same issue.

All other conversion in section `Type Conversions` are defined as `emu-alg` (ie. algorithm steps). `ToObject` is instead defined using a table.

I suggest to turn `ToObject` to an `emu-alg` specification.

! ESMeta doesn't parse this algorithm.

## CreateIntrinsics

### Description of the issue

It contains a step with a huge description. Maybe turn it to a note.

! Mention that ESMeta currently doesn't parse that step.

## Returning completion records vs unboxed values

### Description of the issue

According to the specification of "Ordinary Object Internal Methods and Internal Slots": 
- _"Each ordinary object internal method delegates to a similarly-named abstract operation."_

However:
- every internal method returns a normal completion
- some abstract operations only return values
- the internal method doesn't explicitly specify the wrapping in a completion record

For instance:
- The specification of [[GetPrototypeOf]]() states it must return "a normal completion containing either an Object or *null*" and delegates to OrdinaryGetPrototypeOf()
- The specification of OrdinaryGetPrototypeOf() states it must return "an Object or *null*"

! Whenever returning a normal completion is specified, enforce it by wrapping the value in `NormalCompletion()`.

---

? i can mention the regexes used to compute the statistics

---

### Occurrences to be updated

1. Let `var` be the value of ...
    - InitializeInstanceElements
        - Let _methods_ be the value of _constructor_.[[PrivateMethods]].
        - Let _fields_ be the value of _constructor_.[[Fields]].
    > The occurrences mentioned below are mentioned for completeness, even though their updating is unlikely to be feasible. 
    - ArrayBufferByteLength
        - Let _isLittleEndian_ be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
    - GetModifySetValueInBuffer
        - Let _isLittleEndian_ be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
    - HostGrowSharedArrayBuffer
        - Let _isLittleEndian_ be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record. If the abstract operation completes normally with ~handled~, a WriteSharedMemory or ReadModifyWriteSharedMemory event whose [[Order]] is ~seq-cst~, [[Payload]] is NumericToRawBytes(~biguint64~, _newByteLength_, _isLittleEndian_), [[Block]] is _buffer_.[[ArrayBufferByteLengthData]], [[ByteIndex]] is 0, and [[ElementSize]] is 8 is added to the surrounding agent's candidate execution such that racing calls to `SharedArrayBuffer.prototype.grow` are not "lost", i.e. silently do nothing.
    - SharedArrayBuffer.prototype.grow
        - Let _isLittleEndian_ be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
    - Atomics.add
        - Let _isLittleEndian_ be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
    - Atomics.compareExchange
        - Let _isLittleEndian_ be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
    - Atomics.sub
        - Let _isLittleEndian_ be the value of the [[LittleEndian]] field of the surrounding agent's Agent Record.
    - GeneratorYield
        - Let _generator_ be the value of the Generator component of _genContext_.
    - AsyncGeneratorYield
        - Let _generator_ be the value of the Generator component of _genContext_.

2. Let `var` be `ref`'s `field` value
    - SetFunctionName
        - Let _description_ be _name_'s [[Description]] value.
    - SymbolDescriptiveString
        - Let _desc_ be _sym_'s [[Description]] value.
--- regex: `1\..*_.*_'s .* value.*`

-- BELOW STEPS NEED NOT TO BE UPDATED.

3. Let `var` be `ref`.`field`
    > The list is incomplete due to the high number of occurrences in the spec.
    - GetValue
        - Let _base_ be _V_.[[Base]].
    - PutValue
        - Let _base_ be _V_.[[Base]].
    - IsArray
        - Let _proxyTarget_ be _argument_.[[ProxyTarget]].
    - Set
        - Let _success_ be ? <emu-meta effects="user-code">_O_.[[Set]]</emu-meta>(_P_, _V_, _O_).
    - DefinePropertyOrThrow
        - Let _success_ be ? <emu-meta effects="user-code">_O_.[[DefineOwnProperty]]</emu-meta>(_P_, _desc_).
    - DeletePropertyOrThrow
        - Let _success_ be ? <emu-meta effects="user-code">_O_.[[Delete]]</emu-meta>(_P_).
    - HasOwnProperty
        - Let _desc_ be ? <emu-meta effects="user-code">_O_.[[GetOwnProperty]]</emu-meta>(_P_).
    - SetIntegrityLevel
        - Let _status_ be ? _O_.[[PreventExtensions]]().
        - Let _keys_ be ? _O_.[[OwnPropertyKeys]]().
        - Let _currentDesc_ be ? <emu-meta effects="user-code">_O_.[[GetOwnProperty]]</emu-meta>(_k_).
    - TestIntegrityLevel
        - Let _keys_ be ? _O_.[[OwnPropertyKeys]]().
        - Let _currentDesc_ be ? <emu-meta effects="user-code">_O_.[[GetOwnProperty]]</emu-meta>(_k_).
    - OrdinaryHasInstance
        - Let _BC_ be _C_.[[BoundTargetFunction]].
    - EnumerableOwnProperties
        - Let _ownKeys_ be ? <emu-meta effects="user-code">_O_.[[OwnPropertyKeys]]</emu-meta>().
        - Let _desc_ be ? <emu-meta effects="user-code">_O_.[[GetOwnProperty]]</emu-meta>(_key_).
    - GetFunctionRealm
        - Let _boundTargetFunction_ be _obj_.[[BoundTargetFunction]].
        - Let _proxyTarget_ be _obj_.[[ProxyTarget]].
    - CopyDataProperties
        - Let _keys_ be ? <emu-meta effects="user-code">_from_.[[OwnPropertyKeys]]</emu-meta>().
        - Let _desc_ be ? <emu-meta effects="user-code">_from_.[[GetOwnProperty]]</emu-meta>(_nextKey_).
    - PrivateMethodOrAccessorAdd
        - Let _entry_ be PrivateElementFind(_O_, _method_.[[Key]]).
    - PrivateGet
        - Let _getter_ be _entry_.[[Get]].
    - PrivateSet
        - Let _setter_ be _entry_.[[Set]].
    - DefineField
        - Let _fieldName_ be _fieldRecord_.[[Name]].
        - Let _initializer_ be _fieldRecord_.[[Initializer]].
    - InitializeInstanceElements
        - Let _methods_ be the value of _constructor_.[[PrivateMethods]].
        - Let _fields_ be the value of _constructor_.[[Fields]].

1. Set `ref` to **the value of** ...
    - OrdinaryGetOwnProperty
    - ValidateAndApplyPropertyDescriptor
    - GetValueFromBuffer
    - SetValueInBuffer