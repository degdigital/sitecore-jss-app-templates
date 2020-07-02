// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the MenuFolder component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'MenuFolder',
    displayName: 'Menu Folder',
    icon: 'Apps/32x32/Folder.png',
    fields: [
      { name: 'navigationText', type: CommonFieldTypes.SingleLineText },
      { name: 'showInPrimaryNavigation', type: CommonFieldTypes.Checkbox },
      { name: 'showInInteriorNavigation', type: CommonFieldTypes.Checkbox },
      { name: 'showInBreadcrumbs', type: CommonFieldTypes.Checkbox }
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}