describe('A calcVolume függvény tesztje',()=>{
    it('Bemenet 20, 10, 10-ra elvárt 22',()=>{
        let actual =calcVolume(20,10,10)
        let expected = 1000;
        expected(actual).toBeCloseTo(expected, 0.01)    })
});