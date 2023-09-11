// Input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import BSelect from '@/core/components/bases/b-select/b-select.vue';

const meta: Meta<typeof BSelect> = {
  title: 'Bases/BSelect',
  component: BSelect,
};

export default meta;

type Story = StoryObj<typeof BSelect>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { BSelect },
    data() {
      return {
        items: [
          { label: 'By date', value: 'DATE' },
          { label: 'By name', value: 'NAME' },
        ],
      };
    },
    template: '<BSelect :items="items" label="Username"/>',
  }),
};
