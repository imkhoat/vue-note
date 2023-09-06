// b-card.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/vue3-vite';

import BCard from './b-card.vue';

const meta: Meta<typeof BCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Design System/Bases/BCard',
  component: BCard,
};

export default meta;