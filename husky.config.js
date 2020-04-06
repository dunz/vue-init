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
        // 'pre-commit': 'scripts/executeTest.sh && npm run test:unit && exit 1'
        'pre-commit': 'scripts/executeTest.sh && exit 1'
    }
};