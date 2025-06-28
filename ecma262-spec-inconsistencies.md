# Inconsistencies in the ECMA-262 specification syntax

## Introduction

The aim of this document is to highlight parts of the ECMA-262 specification which use different notations (ie. syntaxes) to specify the exact same semantics. In addition, I suggest solutions to address those issues, so as to improve the overall quality of the ECMA-262 specification in terms of consistency.

We refer to the specification available at https://tc39.es/ecma262, as of 28th June 2025.

The rest of this document is structured into sections, each one describing a list of notations used to express the same semantics. For each notation, I provide the number of occurrences in the corpus, the regular expression used to find those occurrences, and some examples of the occurrence in the specification. Lastly, I suggest a suitable solution to address the issue.

## Object field references

### Description of the issue

Referencing a field of an object is specified using different notations:
1. `the value of _ref_.[[Property]]`
    - occurrences: 3
    - regex: `1\..*the value of _.*_\..*`
    - references:
        - InitializeInstanceElements ([link](https://tc39.es/ecma262/#sec-initializeinstanceelements))
            - `Let _methods_ be the value of _constructor_.[[PrivateMethods]].`
            - `Let _fields_ be the value of _constructor_.[[Fields]].`
        - Function.prototype.toString ([link](https://tc39.es/ecma262/#sec-function.prototype.tostring))
            - `If _func_ is a <emu-xref href="#sec-built-in-function-objects">built-in function object</emu-xref>, return an implementation-defined String source code representation of _func_. The representation must have the syntax of a |NativeFunction|. Additionally, if _func_ has an [[InitialName]] internal slot and _func_.[[InitialName]] is a String, the portion of the returned String that would be matched by |NativeFunctionAccessor?| |PropertyName| must be the value of _func_.[[InitialName]].`
2. `the value of _ref_'s [[Property]] attribute`
    - occurrences: 6
    - regex: `1\..*the value of.*'s .* attribute.*`
    - references:
        - OrdinaryGetOwnProperty ([link](https://tc39.es/ecma262/#sec-ordinarygetownproperty))
            - `Set _D_.[[Value]] to the value of _X_'s [[Value]] attribute.`
            - `Set _D_.[[Writable]] to the value of _X_'s [[Writable]] attribute.`
            - `Set _D_.[[Get]] to the value of _X_'s [[Get]] attribute.`
            - `Set _D_.[[Set]] to the value of _X_'s [[Set]] attribute.`
            - `Set _D_.[[Enumerable]] to the value of _X_'s [[Enumerable]] attribute.`
            - `Set _D_.[[Configurable]] to the value of _X_'s [[Configurable]] attribute.`
3. `_ref_'s [[Property]] value`
    - occurrences: 2
    - regex: `1\..*'s [^\s]+ value.*`
    - references:
        - SetFunctionName ([link](https://tc39.es/ecma262/#sec-setfunctionname))
            - `Let _description_ be _name_'s [[Description]] value.`
        - SymbolDescriptiveString ([link](https://tc39.es/ecma262/#sec-symboldescriptivestring))
            - `Let _desc_ be _sym_'s [[Description]] value.`
4. `_ref_.[[Property]]` 
    - occurrences: 1775 
    - regex: `1\..*_.*_\.[^s]+.*`
    - references (examples, non-exhaustive list):
        - SetFunctionName ([link](https://tc39.es/ecma262/#sec-setfunctionname))
            - `Set _name_ to _name_.[[Description]].`
            - `Set _F_.[[InitialName]] to _name_.`
            - `Optionally, set _F_.[[InitialName]] to _name_.`

As all notations imply the same semantics, I suggest to update the specification so that only notation 4 is used.

| Notation | Current                                                                 | To be                                 |
|----------|-------------------------------------------------------------------------|---------------------------------------|
| 1        | Let _methods_ be the value of _constructor_.[[PrivateMethods]].         | Let _methods_ be _constructor_.[[PrivateMethods]]. |
| 2        | Set _D_.[[Value]] to the value of _X_'s [[Value]] attribute.            | Set _D_.[[Value]] to _X_.[[Value]].   |
| 3        | Let _description_ be _name_'s [[Description]] value.                    | Let _description_ be _name_.[[Description]]. |

## If-then-else Steps with single if/else Step

### Description of the issue

Conditional steps including a non-empty else step, for which neither then nor else steps are blocks, are specified using different notations. Notice also that in notation 2 the `otherwise` keyword is occasionally followed by a comma:

1. If, else in the same step ("else" keyword), with optional else-if: 
    - `If cond, thenStep[; else if otherCond, otherThenStep]*; else elseStep`
        - occurrences: 67
        - regex: `1\..*[iI]f .*, .*(; else if .*, .*)*; else .*`
        - references (examples, non-exhaustive list):
            - ValidateAndApplyPropertyDescriptor ([link](https://tc39.es/ecma262/#sec-validateandapplypropertydescriptor))
                - `If _Desc_ has a [[Configurable]] field, let _configurable_ be _Desc_.[[Configurable]]; else let _configurable_ be _current_.[[Configurable]].`
2. If, else in the same step ("otherwise" keyword):
    
    a. `If cond, thenStep; otherwise elseStep`
    - occurrences: 31
    - regex: `1\..*If .*, .*; otherwise .*`
    - references (examples, non-exhaustive list):
        - IsPropertyReference ([link](https://tc39.es/ecma262/#sec-ispropertyreference))
            - `If _V_.[[Base]] is an Environment Record, return *false*; otherwise return *true*.`
    b. `If cond, thenStep; otherwise, elseStep`
    - occurrences: 28
    - regex: `1\..*If .*, .*; otherwise,.*`
    - references (examples, non-exhaustive list):
        - SameValueNonNumber ([link](https://tc39.es/ecma262/#sec-samevaluenonnumber))
            - `If _x_ and _y_ have the same length and the same code units in the same positions, return *true*; otherwise, return *false*.`
3. If, else in different steps:
    ```markdown
        If cond, thenStep
        Else, elseStep
    ``` 
    - occurrences: 62
    - regex: `1\..*If .*, .*\n\s+1\..*Else, .*`
    - references (examples, non-exhaustive list):
        - ReturnIfAbrupt ([link](https://tc39.es/ecma262/#sec-returnifabrupt))
            ```
            1. If _argument_ is an abrupt completion, return Completion(_argument_).
            1. Else, set _argument_ to _argument_.[[Value]].
            ```

I suggest the following updates to the spec:
- Enforce only one keyword between `else` and `otherwise` - ie. choose only one notation between 1 and 2.
- Enforce whether or not to use the comma after the `otherwise` keyword (notation 1 and 2).
- Enforce a style for specifying if-then-else steps that don't require then/else blocks (either notation 1/2, or notation 3).

## Algorithms represented as tables

### Description of the issue

Some algorithms in the specification are defined in terms of tables surrounded by an `emu-table` tag. This is problematic as ESMeta doesn't currently parse algorithms specified by using tables.

I suggest to turn those occurrences into algorithms defined in terms of steps surrounded by an `emu-alg` tag.

### Occurrences to be updated

- ToObject ([link](https://tc39.es/ecma262/#sec-toobject))
- RequireObjectCoercible ([link](https://tc39.es/ecma262/#sec-requireobjectcoercible))

## CreateIntrinsics

### Description of the issue

The following step in the CreateIntrinsics ([link](https://tc39.es/ecma262/#sec-createintrinsics)) abstract operation is remarkably large:

```markdown
Set fields of realmRec.[[Intrinsics]] with the values listed in Table 6. The field names are the names listed in column one of the table. The value of each field is a new object value fully and recursively populated with property values as defined by the specification of each object in clauses 19 through 28. All object property values are newly created object values. All values that are built-in function objects are created by performing CreateBuiltinFunction(steps, length, name, slots, realmRec, prototype) where steps is the definition of that function provided by this specification, name is the initial value of the function's "name" property, length is the initial value of the function's "length" property, slots is a list of the names, if any, of the function's specified internal slots, and prototype is the specified value of the function's [[Prototype]] internal slot. The creation of the intrinsics and their properties must be ordered to avoid any dependencies upon objects that have not yet been created.
```

As a consequence, it's not parsed by ESMeta.