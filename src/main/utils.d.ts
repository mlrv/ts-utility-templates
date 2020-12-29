/**
 * Joins an array of strings and an optional
 * separator into a single string
 * 
 * @example
 * JoinWith<["abc", "def", "ghi"]> == "abcdefghi"
 * JoinWith<["abc", "def", "ghi"], "-"> == "abc-def-ghi"
 * 
 */
export type JoinWith<S extends string[], J extends string = ""> =
  S extends [infer H, ...infer T]
    ? H extends string
      ? T extends string[]
        ? `${H}${J}${JoinWith<T, J>}`
        : never
      : never
    : ""

/**
 * Splits a string on the given separator
 * 
 * @example
 * SplitOnSeparator<"abc-def-ghi", "-"> == ["abc", "def", "ghi"]
 * SplitOnSeparator<"abc-def-ghi", ";"> == ["abcdefghi"]
 */
export type SplitOnSeparator<S extends  string, T extends string> =
  S extends ""
    ? []
    : S extends `${infer A}${T}${infer B}`
      ? [A, ...SplitOnSeparator<B, T>]
      : [S]

type SplitOnSpace<S extends string> = SplitOnSeparator<S, " ">
type SplitOnDash<S extends string> = SplitOnSeparator<S, "-">
type SplitOnUnderscore<S extends string> = SplitOnSeparator<S, "_">

/**
 * Splits a string on " ", "-", or "_"
 * 
 * @example
 * SplitOnAny<"abc-def-ghi"> == ["abc", "def", "ghi"]
 * SplitOnAny<"abc_def_ghi"> == ["abc", "def", "ghi"]
 * SplitOnAny<"abc def-ghi"> == ["abc", "def", "ghi"]
 * SplitOnAny<"abc def ghi"> == ["abc", "def", "ghi"]
 */
export type SplitOnAny<S extends string> = SplitOnSeparator<S, " "|"-"|"_">

/**
 * Capitalizes every string in an array of strings
 * 
 * @example
 * CapitalizeAll<[]> == []
 * CapitalizeAll<["hello", "world"]> == ["Hello", "World"]
 * CapitalizeAll<["SHOUT"]> == ["SHOUT"]
 */
export type CapitalizeAll<S extends string[]> =
  S extends [infer H, ...infer T]
      ? H extends string
        ? T extends string[]
          ? [Capitalize<H>, ...CapitalizeAll<T>]
          : never
        : never
      : []

/**
 * Uncapitalizes the first entry of an array of strings
 * 
 * @example
 * UncapitalizeFirst<["Hello", "World"]> == ["hello", "World"]
 * UncapitalizeFirst<["hello", "world"]> == ["hello", "world"]
 */
export type UncapitalizeFirst<S extends string[]> =
  S extends [infer H, ...infer T]
    ? H extends string  
      ? T extends string[]
        ? [Uncapitalize<H>, ...CapitalizeAll<T>]
        : never
      : never
    : []