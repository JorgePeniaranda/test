import { isEmpty } from './isEmpty'

describe('function should be exist', () => {
  it('function should be exist', () => {
    expect(isEmpty).toBeDefined()
  })

  it('should be return a boolean', () => {
    expect(typeof isEmpty("")).toBe("boolean")
  })

  it('should be return true if pass null', () => {
    expect(isEmpty(null)).toBeTruthy()
  })

  it('should be return true if pass undefined', () => {
    expect(isEmpty(undefined)).toBeTruthy()
  })

  it('should be return true if pass a empty string', () => {
    expect(isEmpty("")).toBeTruthy()
  })

  it('should be return true if pass a string with space', () => {
    expect(isEmpty("                 ")).toBeTruthy()
    expect(isEmpty("    ")).toBeTruthy()
    expect(isEmpty(" ")).toBeTruthy()
    expect(isEmpty("            ")).toBeTruthy()
    expect(isEmpty("  ")).toBeTruthy()
  })

  it('should be return true if pass a empty array', () => {
    expect(isEmpty([])).toBeTruthy()
  })

  it('should be return true if pass a empty object', () => {
    expect(isEmpty({})).toBeTruthy()
  })

  it('should be return true if pass a empty map', () => {
    expect(isEmpty(new Set())).toBeTruthy()
  })

  it('should be return true if pass a empty set', () => {
    expect(isEmpty(new Map())).toBeTruthy()
  })

  it('should be return true if pass NaN', () => {
    expect(isEmpty(NaN)).toBeTruthy()
  })

  it('should be return false if pass a number', () => {
    expect(isEmpty(0)).toBeFalsy()
  })

  it('should be return false if pass a boolean', () => {
    expect(isEmpty(false)).toBeFalsy()
    expect(isEmpty(true)).toBeFalsy()
  })

  it('should be return false if pass a function', () => {
    expect(isEmpty(isEmpty)).toBeFalsy()
  })

  it('should be return false if pass a symbol', () => {
    expect(isEmpty(Symbol())).toBeFalsy()
  })

  it('should be return false if pass a bigint', () => {
    expect(isEmpty(BigInt(0))).toBeFalsy()
  })

  it('should be return false if pass a number', () => {
    expect(isEmpty(1)).toBeFalsy()
  })

  it('should be return false if pass a no empty string', () => {
    expect(isEmpty("test")).toBeFalsy()
  })

  it('should be return false if pass a no empty string', () => {
    expect(isEmpty("test")).toBeFalsy()
  })

  it('should be return true if pass a no empty array', () => {
    expect(isEmpty(["test"])).toBeFalsy()
  })

  it('should be return true if pass a no empty object', () => {
    expect(isEmpty({
      "this": "is a test"
    })).toBeFalsy()
  })

  it('should be return true if pass a no empty map', () => {
    expect(isEmpty(new Set(["test"]))).toBeFalsy()
  })

  it('should be return true if pass a no empty set', () => {
    const map = new Map()
    map.set("this", "is a test")

    expect(isEmpty(map)).toBeFalsy()
  })
})
