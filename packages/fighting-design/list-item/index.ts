import ListItem from './src/list-item.vue'

import { install } from '../_utils'

export const FListItem = install(ListItem)

export type FListItemInstance = InstanceType<typeof ListItem>

declare module 'vue' {
  export interface GlobalComponents {
    FListItem: typeof FListItem
  }
}
