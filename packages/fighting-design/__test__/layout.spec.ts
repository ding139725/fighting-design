import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import {
  FAside,
  FFooter,
  FHeader,
  FMain,
  FLayout
} from '../index'

describe('FAside', () => {
  test('class', () => {
    const wrapper = mount(FAside)
    expect(wrapper.classes()).toContain('f-aside')
  })

  test('width', () => {
    const wrapper = mount(FAside, {
      props: { width: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('200px')
  })
})

describe('FFooter', () => {
  test('class', () => {
    const wrapper = mount(FFooter)
    expect(wrapper.classes()).toContain('f-footer')
  })

  test('height', () => {
    const wrapper = mount(FFooter, {
      props: { height: '200px' }
    })
    expect(wrapper.attributes('style')).toContain('200px')
  })
})

describe('FHeader', () => {
  test('class', () => {
    const wrapper = mount(FHeader)
    expect(wrapper.classes()).toContain('f-header')
  })

  test('height', () => {
    const wrapper = mount(FHeader, {
      props: { height: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })
})

describe('FMain', () => {
  test('class', () => {
    const wrapper = mount(FMain)
    expect(wrapper.classes()).toContain('f-main')
  })

  test('padding', () => {
    const wrapper = mount(FMain, {
      props: { padding: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('20px')
  })
})

describe('FLayout', () => {
  test('class', () => {
    const wrapper = mount(FLayout)
    expect(wrapper.classes()).toContain('f-layout')
  })
})
