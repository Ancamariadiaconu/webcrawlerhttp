const { normalizeURL} = require('./crawl.js')
const {test, expect} = require('@jest/globals')
test('normalizeURL', ()=> {
    const input = 'https://vodafone.ro/telefoane'
    const actual = normalizeURL(input)
    const expected = 'vodafone.ro/telefoane'
    expect(actual).toEqual(expected)
})
test('normalizeURL strip protocol', ()=> {
    const input = 'https://vodafone.ro/telefoane/'
    const actual = normalizeURL(input)
    const expected = 'vodafone.ro/telefoane'
    expect(actual).toEqual(expected)
})
test('normalizeURL capitals', ()=> {
    const input = 'https://VODAFONE.ro/telefoane/'
    const actual = normalizeURL(input)
    const expected = 'vodafone.ro/telefoane'
    expect(actual).toEqual(expected)
})