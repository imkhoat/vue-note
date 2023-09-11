<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { ref, type PropType, computed } from 'vue';
import { BSelectSize } from '@/core/components/bases/b-select/types';
import IDown from '@/core/components/icons/i-down.vue';
const props = defineProps({
  items: {
    type: Object as PropType<{ label: string; value: string | number }[]>,
    default: () => {
      return [];
    },
  },
  size: {
    type: String as PropType<`${BSelectSize}`>,
    default: BSelectSize.base,
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  wrapperClassName: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();

const state = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    console.log('update:modelValue', newVal);
    emit('update:modelValue', newVal);
  },
});
const chevronRotated = ref(false);

const clickHandler = () => (chevronRotated.value = true);
const blurHandler = () => (chevronRotated.value = false);
const keydownHandler = () => (chevronRotated.value = true);
</script>

<template>
  <label :class="$attrs.class">
    <span class="pb-1 text-sm font-medium text-neutral-900 font-body"> {{ label }} </span>
    <span
      :class="[
        'relative flex flex-col rounded-md focus-within:outline focus-within:outline-offset ring-inset focus:ring-primary-700 focus:ring-2 ring-1 ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:ring-disabled-200',
        wrapperClassName,
        { '!ring-negative-700 ring-2': invalid && !disabled },
      ]"
      data-testid="select"
    >
      <select
        v-bind="$attrs"
        v-model="state"
        :required="required"
        :disabled="disabled"
        :class="[
          'appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900  outline-none bg-transparent rounded-md disabled:bg-disabled-100 disabled:text-disabled-900 ',
          {
            'py-1.5': size === BSelectSize.sm,
            'py-2': size === BSelectSize.base,
            'py-3 text-base': size === BSelectSize.lg,
          },
        ]"
        data-testid="select-input"
        @blur="blurHandler"
        @click="clickHandler"
        @keydown.space="keydownHandler"
      >
        <option
          v-if="placeholder"
          disabled
          selected
          hidden
          class="text-sm bg-neutral-300"
          value=""
          :class="[
            'bg-neutral-300 text-sm',
            {
              'text-base': size === BSelectSize.lg,
            },
          ]"
          data-testid="select-placeholder"
        >
          {{ placeholder }}
        </option>
        <option v-for="{ value, label } in items" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
      <slot name="chevron">
        <i-down
          :class="[
            'absolute w-[14px] h-[14px] -translate-y-1 pointer-events-none top-1/2 right-4 transition easy-in-out duration-0.5',
            disabled ? 'text-disabled-500' : 'text-neutral-500',
            chevronRotated ? 'rotate-180' : '',
          ]"
        />
      </slot>
    </span>
  </label>
</template>
