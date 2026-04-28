type Committee = {
  name: string;
  description: string;
  agenda: string;
  backgroundGuideUrl: string | null;
  matrix: {
    portfolio: string;
    filled: boolean;
  }[];
  eb: {
    name: string;
    position: string;
    image: string;
  }[];
}

export const COMM_DATA: Record<
  'disec' | 'unhrc' | 'aippm' | 'ipc' | 'unsc' | 'icrc' | 'ccc',
  Committee
> = {
  disec: {
    name: 'DISEC',
    description: '',
    agenda: '',
    backgroundGuideUrl: null,
    matrix: [],
    eb: []
  },

  unhrc: {
    name: 'UNHRC',
    description: '',
    agenda: '',
    backgroundGuideUrl: null,
    matrix: [],
    eb: [],
  },

  aippm: {
    name: 'AIPPM',
    description: '',
    agenda: '',
    backgroundGuideUrl: null,
    matrix: [],
    eb: [],
  },

  ipc: {
    name: 'IPC',
    description: '',
    agenda: '',
    backgroundGuideUrl: null,
    matrix: [],
    eb: [],
  },

  unsc: {
    name: 'UNSC',
    description: '',
    agenda: '',
    backgroundGuideUrl: null,
    matrix: [],
    eb: [],
  },

  icrc: {
    name: 'ICRC',
    description: '',
    agenda: '',
    backgroundGuideUrl: null,
    matrix: [],
    eb: [],
  },

  ccc: {
    name: 'CCC',
    description: '',
    agenda: '',
    backgroundGuideUrl: null,
    matrix: [],
    eb: [],
  },
}
