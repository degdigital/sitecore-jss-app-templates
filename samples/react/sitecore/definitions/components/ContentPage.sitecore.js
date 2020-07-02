// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';


/**
 * Adds the InteriorContentPage component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: '_ContentPage',
    icon: "Applications/16x16/document_plain.png",
    inherits: ["Route"],
    fields: [
      { name: 'metaDescription', type: CommonFieldTypes.SingleLineText },
      { name: 'browserTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'canonicalUrl', type: CommonFieldTypes.SingleLineText },
      { name: 'blockSearchEngineIndexing', type: CommonFieldTypes.Checkbox },
      { name: 'blockSearchEngineLinkFollowing', type: CommonFieldTypes.Checkbox },
      { name: 'navigationText', type: CommonFieldTypes.SingleLineText },
      { name: 'showInPrimaryNavigation', type: CommonFieldTypes.Checkbox },
      { name: 'showInInteriorNavigation', type: CommonFieldTypes.Checkbox },
      { name: 'showInBreadcrumbs', type: CommonFieldTypes.Checkbox },
      { name: 'ogDescription', type: CommonFieldTypes.SingleLineText },
      { name: 'ogImage', type: CommonFieldTypes.Image },
      { name: 'ogSiteName', type: CommonFieldTypes.SingleLineText },
      { name: 'ogTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'ogType', type: CommonFieldTypes.SingleLineText },
      { name: 'pageHeadScript', type: CommonFieldTypes.MultiLineText },
      { name: 'pageBodyTopScript', type: CommonFieldTypes.MultiLineText },
      { name: 'pageFootScript', type: CommonFieldTypes.MultiLineText },
      { name: 'hideFromSearchResults', type: CommonFieldTypes.Checkbox },
      { name: 'hideFromSitemapXml', type: CommonFieldTypes.Checkbox },
      { name: 'sitemapXmlPriority', type: CommonFieldTypes.SingleLineText },
      { name: 'sitemapXmlChangeFrequency', type: CommonFieldTypes.SingleLineText },
      { name: 'twitterCardType', type: "Droplist", source: "{A2009357-AF8A-4D85-9E4A-4F600AB0E9A0}" },
      { name: 'twitterCardSite', type: CommonFieldTypes.SingleLineText },
      { name: 'twitterCardSiteId', type: CommonFieldTypes.SingleLineText },
      { name: 'twitterCardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'twitterCardDescription', type: CommonFieldTypes.SingleLineText },
      { name: 'twitterCardImage', type: CommonFieldTypes.Image },
      { name: 'twitterCardContentCreator', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}