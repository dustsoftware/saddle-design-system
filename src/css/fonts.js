import { css } from "@emotion/react"

export const NoeDisplay = css`
  @font-face {
    font-family: "Noe Display";
    src: url("fonts/noe-display/NoeDisplay-Medium.eot"); /* IE9 Compat Modes */
    src: url("fonts/noe-display/NoeDisplay-Medium.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("fonts/noe-display/NoeDisplay-Medium.otf")
        format("opentype"),
      /* Open Type Font */
        url("fonts/noe-display/NoeDisplay-Medium.svg") format("svg"),
      /* Legacy iOS */ url("fonts/noe-display/NoeDisplay-Medium.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("fonts/noe-display/NoeDisplay-Medium.woff") format("woff"),
      /* Modern Browsers */
        url("fonts/noe-display/NoeDisplay-Medium.woff2") format("woff2"); /* Modern Browsers */
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Noe Display";
    src: url("fonts/noe-display/noe-display-bold.eot"); /* IE9 Compat Modes */
    src: url("fonts/noe-display/noe-display-bold.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("fonts/noe-display/noe-display-bold.otf")
        format("opentype"),
      /* Open Type Font */ url("fonts/noe-display/noe-display-bold.svg")
        format("svg"),
      /* Legacy iOS */ url("fonts/noe-display/noe-display-bold.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("fonts/noe-display/noe-display-bold.woff") format("woff"),
      /* Modern Browsers */
        url("fonts/noe-display/noe-display-bold.woff2") format("woff2"); /* Modern Browsers */
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Noe Display";
    src: url("fonts/noe-display/noe-display-bold-italic.eot"); /* IE9 Compat Modes */
    src: url("fonts/noe-display/noe-display-bold-italic.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("fonts/noe-display/noe-display-bold-italic.otf")
        format("opentype"),
      /* Open Type Font */
        url("fonts/noe-display/noe-display-bold-italic.svg")
        format("svg"),
      /* Legacy iOS */
        url("fonts/noe-display/noe-display-bold-italic.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("fonts/noe-display/noe-display-bold-italic.woff")
        format("woff"),
      /* Modern Browsers */
        url("fonts/noe-display/noe-display-bold-italic.woff2")
        format("woff2"); /* Modern Browsers */
    font-weight: 700;
    font-style: italic;
  }
`

export const SourceCodePro = css`
  /* cyrillic-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvZlMIFxGC8NAU.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvQlMIFxGC8NAU.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvXlMIFxGC8NAU.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvblMIFxGC8NAU.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvalMIFxGC8NAU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_QiYsKILxRpg3hIP6sJ7fM7PqlONvUlMIFxGC8.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMnt9cl5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMnt9cs5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMnt9cr5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMnt9cn5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMnt9cm5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONMnt9co5m2WDgzT.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNvsdcl5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNvsdcs5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNvsdcr5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNvsdcn5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNvsdcm5m2WDgzTnM8.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: italic;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_ViYsKILxRpg3hIP6sJ7fM7PqlONNvsdco5m2WDgzT.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMOvWnsUnxlC9.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_SiYsKILxRpg3hIP6sJ7fM7PqlOevWnsUnxlC9.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPuvWnsUnxlC9.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_SiYsKILxRpg3hIP6sJ7fM7PqlMuvWnsUnxlC9.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWnsUnxlC9.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevWnsUnxg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7PqtzsjDvucq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7PqtzsjDt-cq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7PqtzsjDsOcq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7PqtzsjDvOcq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7PqtzsjDvecq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7PqtzsjDs-cq7Gq0DA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7Pqths7Dvucq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7Pqths7Dt-cq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7Pqths7DsOcq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7Pqths7DvOcq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7Pqths7Dvecq7Gq0DDzS.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7Pqths7Ds-cq7Gq0DA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`