export type SoundItem = {
  title: string;
  description: string;
  category: string;
  source: string;
  format?: string;
  duration?: string;
};

// Future audio files can use any public HTTPS URL, including Oracle Object Storage.
// Keep this list empty until Kakuon has approved real material for publication.
export const sounds: SoundItem[] = [];