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
                <footer id="footer" class="tutor-container">
                <div class="footer-top">
                  <div class="powered-area">
                    <ul class="logo-list">
                      <li>Por:</li>
                      <li>
                        <a href="https://www.tdrobotica.co" rel="noopener" target="_blank">
                          <img src="${static.url('images/logo.png')}" alt="Por tdrobotica" width="79" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <span class="copyright-site">Copyrights ©${datetime.now().year}. Todos los derechos reservados.</span>                
                </footer>
              </div>            
            ),
          },
        },
      ]
    }
  },
};

export default config;
