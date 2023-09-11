// Input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import BContainer from '@/core/components/bases/b-container/b-container.vue';

const meta: Meta<typeof BContainer> = {
  title: 'Bases/BContainer',
  component: BContainer,
};

export default meta;

type Story = StoryObj<typeof BContainer>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => ({
    components: { BContainer },
    data() {
      return {
        dialogState: false,
      };
    },
    template: `
      <BContainer>
        Hello world
      </BContainer>
    `,
  }),
};
