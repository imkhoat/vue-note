// Input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import BCard from '@/core/components/bases/b-card/b-card.vue';

const meta: Meta<typeof BCard> = {
  title: 'Bases/BCard',
  component: BCard,
};

export default meta;

type Story = StoryObj<typeof BCard>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => ({
    components: { BCard },
    data() {
      return {
        dialogState: false,
      };
    },
    template: `
      <BCard>
        Hello world
      </BCard>
    `,
  }),
};
