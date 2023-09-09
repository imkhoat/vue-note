<script lang="ts">
export const variantClasses = {
  [BButtonVariant.primary]:
    'text-white shadow hover:shadow-md active:shadow bg-primary-600 hover:bg-primary-700 active:bg-primary-800 disabled:bg-disabled-300',
  [BButtonVariant.secondary]:
    'text-primary-600 hover:bg-primary-100 hover:text-primary-700 active:bg-primary-200 active:text-primary-800 ring-1 ring-inset ring-primary-600 shadow hover:shadow-md active:shadow hover:ring-primary-700 active:ring-primary-800 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50',
  [BButtonVariant.tertiary]:
    'text-primary-600 hover:bg-primary-100 hover:text-primary-700 active:bg-primary-200 active:text-primary-800 disabled:bg-transparent',
};
</script>

<script lang="ts" setup>
import { type PropType, type ConcreteComponent, computed, toRefs } from 'vue';
import { BButtonSize, BButtonVariant } from '@/core/components/bases/b-button/types';

const props = defineProps({
  size: {
    type: String as PropType<`${BButtonSize}`>,
    default: BButtonSize.base,
  },
  variant: {
    type: String as PropType<`${BButtonVariant}`>,
    default: BButtonVariant.primary,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: undefined,
  },
});

const { size, tag, square } = toRefs(props);

const sizeClasses = computed(() => {
  switch (size.value) {
    case BButtonSize.sm:
      return [square.value ? 'p-1.5' : 'leading-5 text-sm py-1.5 px-3', 'gap-1.5'];
    case BButtonSize.lg:
      return [square.value ? 'p-4' : 'py-3 leading-6 px-6', 'gap-3'];
    default:
      return [square.value ? 'p-2' : 'py-2 leading-6 px-4', 'gap-2'];
  }
});
const tagWithDefaults = computed(() => tag?.value || 'button');
</script>
<template>
  <component
    :is="tagWithDefaults"
    v-bind="$attrs"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed',
      sizeClasses,
      variantClasses[variant],
    ]"
    data-testid="button"
  >
    <slot v-if="$slots.prefix" name="prefix" />
    <slot />
    <slot v-if="$slots.suffix" name="suffix" />
  </component>
</template>
