import { expect, test, vi } from 'vitest'
import { classNames, log } from '../src'

test('log', () => {
  const spy = vi.fn(log)

  expect(spy.mock.calls.length).toBe(0)
  spy('Hello', 'World')
  expect(spy.mock.calls.length).toBe(1)
  expect(spy.mock.calls[0][0]).toBe('Hello')
  expect(spy.mock.calls[0][1]).toBe('World')
})

test('classNames', () => {
  expect(classNames('a', 'b')).toBe('a b')
})
