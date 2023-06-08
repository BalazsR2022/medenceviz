describe('A bemenet tesztelése', ()=>{
    it('Helyes bemenetre 1',()=>{
        let actual =checkInput(20,10,10)
        expect(actual).toBe(true)
    })
    it('Helytelen bemenetre 1',()=>{
        let actual = checkInput('aa')
        expect(actual).toBe(false)
    })
})