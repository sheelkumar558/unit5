import { FlexRow, Span, Img } from "./styled/FlexRow";

export const SignIn = ({ user }) => {
  return (
    <div>
      <Img src={user.data.avatar} alt="" />
      <FlexRow>
        <Span>First Name :</Span>
        <Span>{user.data.first_name}</Span>
      </FlexRow>
      <FlexRow>
        <Span>Last Name :</Span>
        <Span>{user.data.last_name}</Span>
      </FlexRow>
      <FlexRow>
        <Span>Email :</Span>
        <Span>{user.data.email}</Span>
      </FlexRow>
    </div>
  );
};