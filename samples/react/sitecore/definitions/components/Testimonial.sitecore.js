// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Testimonial component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'Testimonial',
    icon: SitecoreIcon.EditUser,
    fields: [
      { name: 'headline', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.MultiLineText },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'name', type: CommonFieldTypes.SingleLineText },
      { name: 'quote', type: CommonFieldTypes.MultiLineText },
      { name: 'jobTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'company', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}