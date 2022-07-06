type titleType = {
    title: string
}

type streetType = {
    street: titleType
}

type ManType = {
    name: string
    age: number
    lessons:Array<{title: string}>
    address:streetType
}

let props: ManType
beforeEach(()=>{
    props = {
        name: "Nikita",
        age: 26,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "MSK"
            }
        }
    }
})

test("", () => {

    let props = {
        name: "Nikita",
        age: 26,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "MSK"
            }
        }
    }

    /*    let age = props.age
        let lessons = props.lessons*/

    const {age, lessons} = props
    /*const {age: a, lessons: l} = props*/
    const title = props.address.street.title
    /*const {title} = props.address.street*/

    expect(age).toBe(26)
    expect(lessons.length).toBe(2)
    expect(title).toBe("MSK")

})

test("",()=>{
/*    const l1 = props.lessons[0]
    const l2 = props.lessons[1]*/

    const [l1 , l2] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")


})