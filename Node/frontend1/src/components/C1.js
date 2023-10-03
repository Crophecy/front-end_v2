// props is an object 
// props = {prodName: "t-shirt , color :"blue", price : "400"}
export function C2(props){
    return(
        <div><h1>I have a {props.prodName} in {props.color} which is around {props.price}</h1></div>
    )
}
//expected output = I have a t-shirt
// Obtained = I have a props.prodName
export function C3(){
    return(
        <div><h1>C3 component</h1></div>
    )
}