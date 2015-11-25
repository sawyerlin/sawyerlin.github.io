var config = {
    headers: {
        contents: {
            home: {
                name: 'Home'
            },
            tools: {
                name: 'Tools',
                contents: {
                    compare : {name: 'Compare', class: 'active'},
                    regex: {name: 'Regular Expression'},
                    base64: {name: 'Base 64'}
                }
            },
            todo: {
                name: 'Todo'
            },
            demos: {
                name: 'Demos'
            },
            experiments: {
                name: 'Experiments'
            },
            work: {
                name: 'Work'
            },
            contact: {
                name: 'Contact'
            },
            threeds: {
                name: '3DS',
                class: 'active',
                contents: {
                    compare : {name: 'Compare', class: 'active'},
                    regex: {name: 'Regular Expression'},
                    base64: {name: 'Base 64'}
                }
            }
        },
        active: 'threeds'
    }
};