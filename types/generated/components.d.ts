import type { Schema, Struct } from '@strapi/strapi';

export interface LogFirmaLogFirmatario extends Struct.ComponentSchema {
  collectionName: 'components_log_firma_log_firmatarios';
  info: {
    description: '';
    displayName: 'log_firmatario';
  };
  attributes: {
    ip_firmatario: Schema.Attribute.String & Schema.Attribute.Required;
    orario_firmatario: Schema.Attribute.DateTime & Schema.Attribute.Required;
    user_agent_firmatario: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'log-firma.log-firmatario': LogFirmaLogFirmatario;
    }
  }
}
