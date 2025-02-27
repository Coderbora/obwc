/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            tsconfig: './api/tsconfig.json',
            isolatedModules: true,
        },
    },
    testTimeout: 10000,
};
