export interface ISimpleSearchResult {
  name: string;
  description: string;
}

export interface IDetailedSearchResult {
  name: string;
  description: string;
  treatmentInteractions: { [key: string]: number };
  actorInteractions: { [key: string]: number };
  conditionInteractions: { [key: string]: number };
}

export interface IUserDefinedRelationship {
  reporter_id: string;
  reporter_actor: string;
  reporter_condition: string;
  reporter_treatment: string;
}
