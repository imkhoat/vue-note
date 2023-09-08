// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import BButton from '@/core/components/bases/b-button/b-button.vue';

const meta: Meta<typeof BButton> = {
  title: 'Bases/BButton',
  component: BButton,
};

export default meta;

type Story = StoryObj<typeof BButton>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { BButton },
    template: '<BButton primary>Hello world</BButton>',
  }),
};
