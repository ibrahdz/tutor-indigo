import React from 'react';

import Footer from '@edly-io/indigo-frontend-component-footer';
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const themePluginSlot = {
  keepDefault: false,
  plugins: [
    {
      op: PLUGIN_OPERATIONS.Insert,
      widget: {
        id: 'default_contents',
        type: DIRECT_PLUGIN,
        priority: 1,
        RenderWidget: <Footer />,
      },
    }
  ],
};

const config = {
  pluginSlots: {
    footer_slot: themePluginSlot,
  },
};

const config = {
  pluginSlots: {
    footer_slot: {
      plugins: [
        {
          // Hide the default footer
          op: PLUGIN_OPERATIONS.Hide,
          widgetId: 'default_contents',
        },
        {
          // Insert a custom footer
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_footer',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>Esta es una prueba de footer persoanlizado</h1>
            ),
          },
        },
      ]
    }
  },
};

export default config;
