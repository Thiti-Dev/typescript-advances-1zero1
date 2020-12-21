type SomeType = string;

// means If someType is assignable to a string or number then MyconditionalType would have a string otherwise it'd be null
type MyConditionalType = SomeType extends string | number ? string : null

// conditional type can be nested as more than one condition like
// Z extend string ? null : Z extend boolean ? number


//Example usage
function someFunction<T>(value:T){
    const someOtherFunction = (someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => {
        const a: 'TYPE A' | 'TYPE B' = someArg
    }
    return someOtherFunction
}


// result can either have someArgs which'd contain either typeA or B -> according to the conditional type [as below it would be locked at type B]
const result = someFunction('')


//
// ─── DISTRIBUTIVE CONDITONAL TYPE ─────────────────────────────────────────────── (separately comparison)
//

type StringOrNot<T> = T extends string ? string : never; // never use to describe some type that never happen -> like doesn't exist [and it can be used to filter union type]

type AUnion = string | boolean | never; // [hover to see the result]


// type Exclude <T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a'| 'b'> // remove a and b from the base T -> >a | b | c<

/*
    This is the flow of how exclude works
    'a' extends 'a' | 'b' ? never : 'a' => never
    'b' extends 'a' | 'b' ? never : 'b' => never
    'c' extends 'a' | 'b' ? never : 'c' => 'c'
    so c is the only remained
*/

type MyType<T> = T extends string | number ? T : never;
type MyResult = MyType<string | number | boolean> // boolean would become never

//means       (fn) => T   Assignable with (fn) => string | number   then return T       or never
type MyType2<T> = (() => T) extends ()=> string | number ? T : never;
type MyResult2 = MyType2<string | number | boolean> // boolean would become never

// ────────────────────────────────────────────────────────────────────────────────

// (NON DISTRIBUTIVELY)

type MyTypeNonDistributive<T> = [T] extends [string | number] ? T : never;
type MyResultFromNonDistributive = MyTypeNonDistributive<string | number>

/*
     So it would compare T with the whole [string|number] after the extends
*/

// ────────────────────────────────────────────────────────────────────────────────


//
// ─── WE CAN USE THE CONDITIONAL TYPE TO INFER SOME TYPE OR A PART OF THAT TYPE ──
//
//                 if T is assignable (infer [or created] U) and return U   -> same as type InferSomething<T> = T extends infer U ? T : any
type InferSomething<T> = T extends infer U ? U : any
type Inferred = InferSomething<'I am a string'>;

//             means if T satisfy or assignable with objA as any and b as number then return the value in A
//            {a} is not assignable to {a,b}
//            {a,b} is assignable to {a,b}
//             {a,b,c} is assignable to {a,b}   -> ignore the extra
type InferSomething2<T> = T extends {a: infer A, b: number} ? A : any;
type inferred2 = InferSomething2<{a: 'Hello',b:123,c:'extra'}>


//                     If found satisfy then return A type with the intersection of B
type InferSomething3<T> = T extends {a: infer A, b: infer B} ? A & B : any;
type inferred3 = InferSomething3<{
    a: {someAProp: 1};
    b: {someBProp: 'B'}
}>
const xxx:inferred3 = {
    someAProp: 1, // fixed variable -> can't be any other or it will cause error
    someBProp: 'B' // fixed variable -> can't be any other or it will cause error
}
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── MY RETURN TYPE ─────────────────────────────────────────────────────────────
//
// True would return as type and assign back to MyFuncReturnValue
type MyFuncReturnValue = ReturnType<() => true>
// ────────────────────────────────────────────────────────────────────────────────


