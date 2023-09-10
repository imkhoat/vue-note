<script setup lang="ts">
import { ref, toRefs, type PropType, type ConcreteComponent, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
// import { useTrapFocus } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: '',
  },
  disableClickAway: {
    type: Boolean,
    default: false,
  },
  disableEsc: {
    type: Boolean,
    default: false,
  },
});
const { disableClickAway, disableEsc, modelValue } = toRefs(props);
const emit = defineEmits<{
  (event: 'update:modelValue', isOpen: boolean): void;
}>();

const modalRef = ref<HTMLElement>();

const isOpen = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: boolean) {
    emit('update:modelValue', newVal);
  },
});

onClickOutside(modalRef, () => {
  if (disableClickAway.value) return;
  emit('update:modelValue', false);
});

const onEscKeyDown = () => {
  if (disableEsc.value) return;
  emit('update:modelValue', false);
};

// useTrapFocus(modalRef, {
//   trapTabs: true,
//   activeState: modelValue,
//   initialFocus: false,
//   initialFocusContainerFallback: true,
// });
</script>

<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-neutral-700 bg-opacity-50" />
  </transition>
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div>
      <component
        v-model="isOpen"
        :is="tag || 'div'"
        v-if="isOpen"
        ref="modalRef"
        aria-modal="true"
        data-testid="modal"
        tabindex="-1"
        class="fixed inset-0 w-fit h-fit m-auto border border-neutral-100 bg-white shadow-xl rounded-xl outline-none"
        @keydown.esc="onEscKeyDown"
      >
        <slot />
      </component>
    </div>
  </transition>
</template>
