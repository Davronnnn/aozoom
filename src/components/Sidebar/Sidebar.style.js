import styled from "styled-components";
import COLORS from '../../constants/colors'

export const StyledSidebar = styled.div`
overflow: hidden;
.logo {
    width: 100%;
    max-width: 260px;
}
.log_out{
    color: ${COLORS.red};
}
.profile-image{
    margin: 36px 0px;
}
`;
