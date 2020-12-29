import { assert, IsExact } from "conditional-type-checks"
import { CamelCaseRecordDeepK } from "../main/index"

assert<IsExact<
  CamelCaseRecordDeepK<{
    "foo-bar": 1
    "one two": 1
    "hello_world": 1
    "foobar": 1
  }>,
  {
    "fooBar": 1
    "oneTwo": 1
    "helloWorld": 1
    "foobar": 1
  }
>>(true)

assert<IsExact<
  CamelCaseRecordDeepK<{
    "foo-bar": 1
    "one two": 1
    "hello_world": 1
    "nested": {
      "foo-bar": 1
      "nested": {
        "foo bar": 1
      }
    }
  }>,
  {
    "fooBar": 1
    "oneTwo": 1
    "helloWorld": 1
    "nested": {
      "fooBar": 1
      "nested": {
        "fooBar": 1
      }
    }
  }
>>(true)

