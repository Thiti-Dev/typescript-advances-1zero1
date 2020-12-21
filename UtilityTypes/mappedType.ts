type Properties = 'car' | 'van'

type MyMappedTypeAsBool = {
    [P in Properties]: boolean
}

type MyMappedTypeAsItself = {
    [P in Properties]: P
}

//Generic need to be only one of string | number | system -> or it will cause error
type MyMappedTypeWithGeneric<Properties extends string | number | symbol> = {
    [P in Properties]: P;
}

type MyMappedTypeWhichkTakeWholeType<T> = {
    [P in keyof T]: T[P]; // can add like -> T[P] | null | else . . .
}

type MyNewTypedGenFromGeneric = MyMappedTypeWithGeneric<'Dog'|'Cat'>;

type MyNewTypedGenFromGenericWholeType = MyMappedTypeWhichkTakeWholeType<{firstname:"Thiti",lastname:"Mahawannakit"}>;


/* This would cause error -> because the key of firstname canonly be Thiti and lastname can only be mahawannakit
const a:MyNewTypedGenFromGenericWholeType = {
    firstname: "xxx",
    lastname: 'YYY'
}
*/


// Just a pick type-declaration
type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
}

type MyCustomType = Pick1<{username:"aaw0kenn",password:"secretxx$$"}, 'username'>
// ────────────────────────────────────────────────────────────────────────────────


//
// ─── RECORD ─────────────────────────────────────────────────────────────────────
//
const bookInfo: Record<string,string> = {}
bookInfo["1"] = "The darkness of held godz"
bookInfo["2"] = "The darkness of held godz"

//Dynamic [Called Mapped type]
type RecordAlternate<K extends keyof any, T> = { // Needed to be keyof any -> because it has to extend this interface with lot of array utilities and others
    [P in K]?: T  // Question mark mean this is not required to
    //someProperty: string -> Mapped type doesn't allow us to do this -> we would do it with intersection-type like below
} // & {someProperty: string}

// this would create dynamic record
const dataList: RecordAlternate<string | number, boolean | number> ={}
dataList["1"] = 1
dataList[0] = false

//or we would use interface over type
interface RecordAlt2{
    [key: string]: number
    //but we can't use union type like -> [key: string | number | etc. . .]
}

// Controlled record
// desribe that there will be r,g,b  in the record with the number given value
const customColor: Required<RecordAlternate<'r'|'g'|'b', number>> = {
    r: 255,
    g: 0,
    b:0
}
// ────────────────────────────────────────────────────────────────────────────────



// ────────────────────────────────────────────────────────────────────────────────

