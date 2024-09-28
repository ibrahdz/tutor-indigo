import React from 'react';

import Footer from '@edly-io/indigo-frontend-component-footer';
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

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
              <div class="wrapper wrapper-footer">
                <span>prueba de footer</span>
              </div>            
            ),
          },
        },
      ]
    }
  },
};

export default config;
