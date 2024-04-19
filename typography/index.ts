import {fonts} from './fonts';
export const typography = {
  bodyRegular14: {
    ...fonts.regular,
    fontSize: 14,
    fontWeight: '400',
  },
  bodyRegular16: {
    ...fonts.regular,
    fontSize: 16,
    fontWeight: '400',
  },
  bodyRegular18: {
    ...fonts.regular,
    fontSize: 18,
    fontWeight: '400',
  },
  bodyMedium14: {
    ...fonts.medium,
    fontSize: 14,
    fontWeight: '500',
  },
  bodyMedium16: {
    ...fonts.medium,
    fontSize: 16,
    fontWeight: '500',
  },
  bodyMedium18: {
    ...fonts.semiBold,
    fontSize: 18,
    fontWeight: '500',
  },
  captionRegular12: {
    ...fonts.regular,
    fontSize: 12,
    fontWeight: '400',
  },
  headlineSemibold14: {
    ...fonts.semiBold,
    fontSize: 14,
    fontWeight: '600',
  },
  headlineSemibold18: {
    ...fonts.semiBold,
    fontSize: 18,
    fontWeight: '600',
  },
  titleSemibold32: {
    ...fonts.semiBold,
    fontSize: 32,
    fontWeight: '500',
  },
  titleOutfit32: {
    ...fonts.semiBold,
    fontSize: 32,
    fontWeight: '400',
  },
} as const;
