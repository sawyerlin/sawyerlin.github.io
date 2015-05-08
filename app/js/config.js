var config = {
    headers: {
        contents: {
            home: {
                name: 'Home'
            },
            tools: {
                name: 'Tools',
                contents: [
                    {name: 'Compare', value: 'compare'},
                    {name: 'Regular Expression', value: 'regex'},
                    {name: 'Base 64', value: 'base64'}
                ]
            },
            todo: {
                name: 'Todo',
                class: 'active'
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
            }
        },
        active: 'todo' 
    }
};
