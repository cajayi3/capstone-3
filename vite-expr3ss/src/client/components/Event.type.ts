export interface Event {
    id: number; 
    country: string;
    team: string;
    league: string;
    date: Date;
  
    
}

export const dummyEventList : Event[] =  [
    {
        id: 0,
        country: "Miami, Florida",
        team: "Cardinals",
        league: "Wild West Stadium",
        date: new Date("2023-10-01T14:00:00Z"),
    },
];

export type PageEnum = 'LIST' | 'ADD'

export const PageEnum = {
    list: "LIST" as PageEnum, 
    add: "ADD" as PageEnum,
}