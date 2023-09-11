// Input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import BPagination from '@/core/components/bases/b-pagination/b-pagination.vue';

const meta: Meta<typeof BPagination> = {
  title: 'Bases/BPagination',
  component: BPagination,
};

export default meta;

type Story = StoryObj<typeof BPagination>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => ({
    components: { BPagination },
    data() {
      return {
        currentPage: 1,
      };
    },
    template: `
      <BPagination :total="10" v-model="currentPage" :pageSize="2">
      </BPagination>
    `,
  }),
};
