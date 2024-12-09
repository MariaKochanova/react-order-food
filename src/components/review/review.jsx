import { UserContainer } from '../user/user-container'

export const Review = ({ text, userId }) => {
    return (
        <>
            <UserContainer id={userId} />
            <p>{text}</p>
        </>
    )
}