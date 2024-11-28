export const hexToRGBA = (hex: string, opacity: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r},${g},${b},${opacity})`;
  };
  
  export const baseColors = {
    gradient: {
      '001': '#0165FF',
      '002': '#C1D7FB',
      '003': '#003382',
      '004': '#002850',
    },
    brand: {
      '050': '#C9DEFF',
      '100': '#A1C6FF',
      '200': '#7DB0FF',
      '300': '#4890FF',
      '400': '#0064FF',
      '500': '#0048B7',
      '600': '#003382',
      '700': '#002850',
      '800': '#031D37',
    },
    neutral: {
      '000': '#FFFFFF',
      '005': '#F5F5F5',
      '010': '#E3E3E5',
      '020': '#C8C8CD',
      '030': '#B0B0B5',
      '040': '#939399',
      '050': '#78787D',
      '060': '#5E5E66',
      '070': '#46464D',
      '080': '#323238',
      '090': '#28282D',
      '096': '#17171A',
      '100': '#000000',
    },
    red: {
      '050': '#FFD7D2',
      '200': '#E32020',
      '700': '#831A1A',
    },
    darkGreen: {
      '000': '#219BA6',
      '080': '#3C7878',
      '100': '#00463D',
    },
    purple: {
      '000': '#E1D2FF',
      '080': '#9669D2',
      '100': '#583585',
    },
    green: {
      '000': '#DDFFE4',
      '080': '#307C0B',
    },
    gray: {
      '000': '#F5F5F5',
      '080': '#939399',
      '100': '#46464D',
    },
    orange: {
      '000': '#FCE3BE',
      '080': '#DC880A',
      '100': '#825108',
    },
    blue: {
      '050': '#C9DEFF',
      '400': '#0064FF',
    },
    transparency: {
      gray: {
        '000': hexToRGBA('#FFFFFF', 0.4),
        '015': hexToRGBA('#6C7080', 0.25),
        '040': hexToRGBA('#000000', 0.4),
      },
      brand: {
        '040': hexToRGBA('#E3E3E5', 0.2),
        '060': hexToRGBA('#002850', 0.7),
        '080': hexToRGBA('#031D37', 0.9),
      },
    },
    tale:{
      '000':'#00A3AD',
    },
    black:{
      '000':'#585858'
    }
  };