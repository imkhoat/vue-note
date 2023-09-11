// Input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import BDialog from '@/core/components/bases/b-dialog/b-dialog.vue';
import BButton from '@/core/components/bases/b-button/b-button.vue';
import BCard from '@/core/components/bases/b-card/b-card.vue';

const meta: Meta<typeof BDialog> = {
  title: 'Bases/BDialog',
  component: BDialog,
};

export default meta;

type Story = StoryObj<typeof BDialog>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => ({
    components: { BDialog, BCard, BButton },
    data() {
      return {
        dialogState: false,
      };
    },
    template: `<BButton @click="dialogState = true">Open</BButton>
    <BDialog v-model="dialogState">
      <BCard>
        Hello world
      </BCard>
    </BDialog>
    `,
  }),
};
