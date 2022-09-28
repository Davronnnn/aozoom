import styled from "styled-components";
import  COLORS  from "../../constants/colors"

export const StyledCard = styled.div`
  background: ${COLORS.lightGrey};
  border-radius: 10px;
  padding: 25px;
  img {
    width: 100%;
    max-width: 195px;
  }
`;
