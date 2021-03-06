import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withSitecoreProps } from '@degjs/storybook-decorator-sitecoreprops';
import { withTaffy } from '@degjs/storybook-addon-taffy';
import '../src/css/styleguide/styleguide.css';
import '../src/css/app.css';

const cssReq = require.context('!!raw-loader!../src/css/variables', true, /.\.css$/);
const cssTokenFiles = cssReq.keys().map(filename => ({ filename, content: cssReq(filename).default }));

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles
    }
  },
  options: {
    showRoots: true,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ?
        0 :
        a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
});

addDecorator(withSitecoreProps);
addDecorator(withA11y);
addDecorator(withTaffy);