export interface TableTopic {
  id: number;
  topic: string;
  backgroundColor: string;
  textColor: string;
}

export interface TarotCard {
  id: number;
  name: string;
  meaning: string;
  message: string;
  affirmation: string;
  actionStep: string;
  image: string;
}
export interface TarotDeck {
  tarotDeck: TarotCard[];
}
