<script lang="ts">
export default {
  inheritAttrs: false,
};
const getSizeClasses = {
  [BInputSize.sm]: ' h-[32px]',
  [BInputSize.base]: 'h-[40px]',
  [BInputSize.lg]: 'h-[48px]',
};
</script>

<script lang="ts" setup>
import type { PropType, ConcreteComponent } from 'vue';
import { computed, onMounted, ref, toRefs } from 'vue';
import { useFocus } from '@vueuse/core';
import { BInputSize } from '@/core/components/bases/b-input/types';

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  wrapperTag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: 'span',
  },
  size: {
    type: String as PropType<`${BInputSize}`>,
    default: BInputSize.base,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: [String, Object],
    default: '',
  },
  characterLimit: {
    type: Number,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: null,
  },
  errorText: {
    type: String,
    default: null,
  },
  helpText: {
    type: String,
    default: null,
  },
  requiredText: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  focus: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits<{
  (event: 'update:modelValue', value: string | number): void;
  (event: 'keyup.enter'): void;
}>();
const { modelValue, invalid } = toRefs(props);
const targetEl = ref();
const { focused } = useFocus(targetEl);

const internalState = ref<string | number>();
const inputValue = computed({
  get: () => modelValue.value ?? internalState.value,
  set: (value) => {
    emits('update:modelValue', value);
    internalState.value = value;
  },
});

const isAboveLimit = computed(() => inputValue.value.length > props.characterLimit);
const charsCount = computed(() => props.characterLimit - inputValue.value.length);

onMounted(() => {
  if (props.focus) {
    focused.value = true;
  }
});
</script>

<template>
  <label :class="$attrs.class">
    <span :class="['text-sm font-medium', { 'cursor-not-allowed text-disabled-400': disabled }]">
      {{ label }}
    </span>
    <component
      :is="wrapperTag"
      :class="[
        'flex justify-start items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-400 hover:ring-primary-600 focus-within:caret-primary-600 active:caret-primary-600 active:ring-primary-600 active:ring-2 focus-within:ring-primary-600 focus-within:ring-2',
        {
          'ring-2 ring-negative-600': invalid,
          'ring-1 ring-neutral-300': !invalid,
        },
        getSizeClasses[size],
        wrapperClass,
      ]"
      data-testid="input"
    >
      <slot name="prefix" />
      <input
        v-model="inputValue"
        v-bind="$attrs"
        class="w-full flex-grow text-base outline-none appearance-none text-neutral-800 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent"
        :size="1"
        ref="targetEl"
        data-testid="input-field"
        @keyup.enter="emits('keyup.enter')"
      />
      <slot name="suffix" />
    </component>
  </label>
  <div class="flex justify-between">
    <div>
      <p v-if="invalid && !disabled" class="text-sm text-negative-600 font-medium mt-0.5">
        {{ errorText }}
      </p>
      <p
        v-if="helpText"
        :class="['text-xs mt-0.5', disabled ? 'text-disabled-400' : 'text-neutral-400']"
      >
        {{ helpText }}
      </p>
      <p
        v-if="requiredText && required"
        class="mt-1 text-sm font-normal text-neutral-400 before:content-['*']"
      >
        {{ requiredText }}
      </p>
    </div>
    <p
      v-if="characterLimit && !readonly"
      :class="[
        'text-xs mt-0.5',
        disabled
          ? 'text-disabled-400'
          : isAboveLimit
          ? 'text-negative-600 font-medium'
          : 'text-neutral-400',
      ]"
    >
      {{ charsCount }}
    </p>
  </div>
</template>
