
function C4()
{
    const arr = ["Raj","Rahul","Shankar"];

    const ListItems = () => {
        return arr.map((val,index)=>{
            return <li key={index}>{val}</li>
        })
    }
    return(
        <div>
            <h1>List items in react</h1>
            <ol>
                {ListItems()}
            </ol>
        </div>

    )
}
export default C4 ;