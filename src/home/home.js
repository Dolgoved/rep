import GutterlessList from "../chatList/chatList"
export const Home=(props)=>{
    return (
        <>
        <h3>This is Home page</h3>
        <GutterlessList chatList={props.chatList}/>
        </>
        
    )
}