import Vue from 'vue';
import compositionAPI from '@vue/composition-api';
import { createApp, provide, inject, getCurrentInstance } from '@vue/composition-api';
Vue.use(compositionAPI);
const StoreSymbol = Symbol()

export function provideStore(store) {
  provide(StoreSymbol, store)
}

export function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    // throw error, no store provided
  } else {
    return store
  }
}