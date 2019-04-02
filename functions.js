const axios = require('axios')

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Ryan'}
        user['lastName'] = 'Booth';
        return user
    },
    fetchUser: () => {
        let result = axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')

            return result
    },
    removeSNames: (names) => {
        let newArray = names.filter(name => {
                if (name.startsWith('S') || name.startsWith('s')){
                    return null
                } else {
                    return name
                }
            })
            return newArray
        }
    }

module.exports = functions;