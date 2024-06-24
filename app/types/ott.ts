interface ott {
    name: string;
    logoSrc: string;
    code: ottCode;
}

// Datatype for ott codes
type ottCode = 'snyliv' | 'etvwin' | 'hotstar' | 'zee5' | 'amazonprime' | 'netflix';

type PricingDuration = '1m' | '3m' | '6m' | '1y';
