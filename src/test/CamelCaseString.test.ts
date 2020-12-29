import { assert, IsExact } from "conditional-type-checks"
import { CamelCaseString } from "../main/index"

assert<IsExact<CamelCaseString<"abc">, "abc">>(true)

assert<IsExact<CamelCaseString<"abc-def">, "abcDef">>(true)
assert<IsExact<CamelCaseString<"abc-def-ghi">, "abcDefGhi">>(true)

assert<IsExact<CamelCaseString<"abc_def">, "abcDef">>(true)
assert<IsExact<CamelCaseString<"abc_def_ghi">, "abcDefGhi">>(true)

assert<IsExact<CamelCaseString<"abc def">, "abcDef">>(true)
assert<IsExact<CamelCaseString<"abc def ghi">, "abcDefGhi">>(true)

assert<IsExact<CamelCaseString<"AbcDef">, "abcDef">>(true)
assert<IsExact<CamelCaseString<"ABCDEF">, "aBCDEF">>(true)
assert<IsExact<CamelCaseString<"abcDef">, "abcDef">>(true)
