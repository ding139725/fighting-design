import type {
  VNode,
  ExtractPropTypes,
  PropType,
  ComponentInternalInstance
} from 'vue'

export const messageTypes = [
  'default',
  'primary',
  'success',
  'danger',
  'warning'
] as const
export type messageType = typeof messageTypes[number]

const messagePlacement = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right'
] as const
export type messagePlacementType = typeof messagePlacement[number]

export const Props = {
  id: {
    type: String,
    default: (): string => ''
  },
  message: {
    type: [String, Object] as PropType<VNode | String>,
    default: (): string => '',
    require: true
  },
  type: {
    type: String as PropType<messageType>,
    default: (): messageType => 'default',
    validator: (val: messageType): boolean => {
      return messageTypes.includes(val)
    }
  },
  close: {
    type: Boolean,
    default: (): boolean => false
  },
  duration: {
    type: Number,
    default: (): number => 3000
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: [String, Object] as PropType<VNode | String>,
    default: (): string => ''
  },
  color: {
    type: String,
    default: (): string => ''
  },
  background: {
    type: String,
    default: (): string => ''
  },
  offset: {
    type: Number,
    default: (): Number => 20
  },
  placement: {
    type: String as PropType<messagePlacementType>,
    default: (): messagePlacementType => 'top',
    validator: (val: messagePlacementType): boolean => {
      return messagePlacement.includes(val)
    }
  },
  zIndex: {
    type: Number,
    default: (): number => 1000
  },
  closeBtn: {
    type: [String, Object] as PropType<VNode | String>,
    default: ''
  },
  closeEnd: {
    type: Function
  }
} as const

export const Emits = ['destroy']

type Mutable<T> = { -readonly [P in keyof T]: T[P] }
// 导出为可选、可写
export type MessageProps = Partial<Mutable<ExtractPropTypes<typeof Props>>>

export type MessageOptions = MessageProps & {
  onDestroy?: () => void
}

export interface FMessageInstance {
  id: string
  vm: ComponentInternalInstance
  close: () => void
}