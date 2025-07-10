import type { Schema, Struct } from '@strapi/strapi';

export interface DatiGenitoreDatiGenitore extends Struct.ComponentSchema {
  collectionName: 'components_dati_genitore_dati_genitores';
  info: {
    displayName: 'dati_genitore';
  };
  attributes: {
    cap: Schema.Attribute.String & Schema.Attribute.Required;
    cittaRilascio: Schema.Attribute.String & Schema.Attribute.Required;
    cognome: Schema.Attribute.String & Schema.Attribute.Required;
    comuneResidenza: Schema.Attribute.String & Schema.Attribute.Required;
    dataNascita: Schema.Attribute.Date & Schema.Attribute.Required;
    dataRilascioDocumento: Schema.Attribute.Date & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    luogoNascita: Schema.Attribute.String & Schema.Attribute.Required;
    nome: Schema.Attribute.String & Schema.Attribute.Required;
    numeroCivico: Schema.Attribute.String & Schema.Attribute.Required;
    numeroDocumento: Schema.Attribute.String & Schema.Attribute.Required;
    tipoDocumento: Schema.Attribute.Enumeration<['cartaIdentita', 'patente']> &
      Schema.Attribute.Required;
    viaResidenza: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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
      'dati-genitore.dati-genitore': DatiGenitoreDatiGenitore;
      'log-firma.log-firmatario': LogFirmaLogFirmatario;
    }
  }
}
