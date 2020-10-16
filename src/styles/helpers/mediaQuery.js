const breakpoints = {
  mobileLandscape: 501,
  tablet: 768,
  desktop: 1025, // targeting devices that are larger than the iPad (which is 1024px in landscape mode)
}

export const up = {
  mobileLandscape: `
    @media (min-width: ${breakpoints.mobileLandscape}px)
  `,
  tablet: `
    @media (min-width: ${breakpoints.tablet}px)
  `,
  desktop: `
    @media (min-width: ${breakpoints.desktop}px)
  `,
}
