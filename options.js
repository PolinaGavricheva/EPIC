module.exports = {
    studyOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Nature theme', callback_data: '1'}],
                [{text: 'Sports topic', callback_data: '2'}],
                [{text: 'The topic of languages', callback_data: '3'}]
            ]
        })
    }
}

