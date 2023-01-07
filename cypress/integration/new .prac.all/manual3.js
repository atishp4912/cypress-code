describe('verify the testcases by tags',{ tags: ['@sanity'] },function(){

    it('Smoke Test',{ tags: ['@smoke'] },()=>{
        expect(1).to.eq(1)
    })
    it('Regression Test',{ tags: ['@regression'] },()=>{
        expect(1).to.eq(1)
    })
    it('Sprint Test',{ tags: ['@sprint']},()=>{
        expect(1).to.eq(1)
    })

    it('Smoke Test and Regression',{ tags: ['@smoke','@regression'] },()=>{
        expect(1).to.eq(1)
    })
    it('Smoke Test and Regression',{ tags: ['@smoke','@regression'] },()=>{
        expect(1).to.eq(1)
    })
    it('Regression Test and Sprint',{ tags: ['@sprint','@regression'] },()=>{
        expect(1).to.eq(1)
    })
    it('Sprint Test and Smoke',{ tags: ['@sprint','@smoke'] },()=>{
        expect(1).to.eq(1)
    })

})