// Input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import BInput from '@/core/components/bases/b-input/b-input.vue';

const meta: Meta<typeof BInput> = {
  title: 'Bases/BInput',
  component: BInput,
};

export default meta;

type Story = StoryObj<typeof BInput>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { BInput },
    template: '<BInput label="Username"/>',
  }),
};
