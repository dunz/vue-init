// module.exports = {
//     'husky': {
//         'hooks': {
//             'pre-commit': 'echo "this should fail" && exit 1',
//             'pre-push': 'npm test'
//         }
//     }
// };

module.exports = {
    'hooks': {
        'pre-commit': 'scripts/executeTest && npm run test:unit && exit 1'
    }
};