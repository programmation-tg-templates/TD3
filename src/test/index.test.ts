// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {fahrenheitToCelsius} from '../index';

describe('Conversion de température', () => {
    test('Le point de congélation de l’eau', () => {
        expect(fahrenheitToCelsius(32)).toEqual(0);
    });

    test('Le point d’ébullition de l’eau', () => {
        expect(fahrenheitToCelsius(212)).toEqual(100);
    });
});
