function replaceTemplateVariables(template, defaultValue) {
  if (template.match(/^#\{.+\}#$/)) {
    return defaultValue;
  }

  return template;
}

window.__APP_CONFIG__ = {
  CMS_ENDPOINT: replaceTemplateVariables(
    "#{CMS_ENDPOINT}#",
    "http://localhost:1337",
  ),
  MS_CLARITY_ID: replaceTemplateVariables("#{MS_CLARITY_ID}#", ""),
  G_ANALYTICS_ID: replaceTemplateVariables("#{G_ANALYTICS_ID}#", ""),
};
