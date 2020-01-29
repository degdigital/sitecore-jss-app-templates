// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import { placeholders } from '../../../src/config/index.json';

/**
 * Adds the UtilityNav component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'UtilityNav',
    icon: SitecoreIcon.DocumentTag,
    params: [
      'itemClassname',
      'linkClassname'
    ],
    placeholders: [
      placeholders.utilitynav
    ]
  });
}