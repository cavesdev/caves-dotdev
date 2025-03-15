import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { fonts, fontSizes } from '@/theme/fonts';
import { colors } from '@/theme/colors';

const globalCss = {
    body: {
        bg: 'deepCharcoal',
        color: 'snowWhite',
        fontFamily: fonts.body.value
    },
    // Animation keyframes
    '@keyframes blink': {
        '0%': {opacity: 1},
        '50%': {opacity: 0},
        '100%': {opacity: 1}
    },
    '@keyframes pulse': {
        '0%': {opacity: 1},
        '50%': {opacity: 0.5},
        '100%': {opacity: 1}
    }
};

const config = defineConfig({
    globalCss,
    theme: {
        tokens: {
            colors,
            fonts,
            fontSizes
        },
    }
});

const system = createSystem(defaultConfig, config);

export default system;
