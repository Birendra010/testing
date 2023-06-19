

const index=require('../index')


test('our first test', ()=>{
//    throw new Error("something faild")  
});

test('absolute',()=>{
   const result = index.absolute(1);
   expect(result).toBe(1);
})

test(' should return a positive number',()=>{
    const result = index.absolute(-1);
    expect(result).toBe(1);
 })
 test(' should return a positive number',()=>{
    const result = index.absolute(0);
    expect(result).toBe(0);
 })


 //************************* greeting function  */
 
 test('welcome ',()=>{
    const result =index.greeting('birendra');
    expect(result).toContain('birendra')
 })



 describe('registerUser',()=>{

 it('divided by 3 and 5 return FizzBuzz',()=>{
    const result =index.fizzbuzz(15)
    expect(result).toBe("FizzBuzz")
 })
 it('divided by only  3  return Fizz',()=>{
    const result =index.fizzbuzz(3)
    expect(result).toBe("Fizz")
 })
 it('divided by only  5  return Buzz',()=>{
    const result =index.fizzbuzz(5)
    expect(result).toBe("Buzz")
 })

 it('not divided by 3  and 5 return input',()=>{
    const result =index.fizzbuzz(2)
    expect(result).toBe(2)
 })

})
////**********testing object */


test('onject',()=>{
    const result =index.object(1)
    // expect(result).toEqual({id:1,price:10}) // all value
    // expect(result).toMatchObject({price:10})  //single value => passed
    expect(result).toHaveProperty('price')       // price or id 

})



describe('registerUser',()=>{
    if('should throw if username is falsy',()=>{
        const args =[null,undefined,NaN,'',0,false];
        args.forEach(a =>{
            expect(()=>{
                index.registerUser(a)
            }).toThrow()
        })
    });
})

