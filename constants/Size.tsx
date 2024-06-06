export type Size = 'extraLarge'
    | 'large'
    | 'medium'
    | 'semiMedium'
    | 'small';

type SizeDict = {
    [key in Size]: number;
};

export const Sizes: SizeDict = {
    'extraLarge': 22,
    'large': 20,
    'medium': 15,
    'semiMedium': 12,
    'small': 10
}