import styled from "styled-components";

const backgroundColor = "#0471de";
const fontColor = "#f2f9fd";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

export const Field = styled.div`
	position: relative;

	.icon-calendar {
		position: absolute;
		top: .9rem;
		left: .8rem;
	}
`;

export const StyledLabel = styled.span`
  display: block;
  color: ${fontColor};
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.label`
  color: ${fontColor};

  input {
    width: 100%;
    margin: 0rem 0 1.5rem 0;
    padding: 0.75rem 1rem;
    padding-left: ${props => props.isIcon ? `2rem` : null};
    color: #ffffff;
    font-size: 1rem;
    border: 1px solid #e5e5e5;
    background-color: ${backgroundColor};
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
	}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 1010px) {
  	display: block;
  }
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 2rem;
  width: 100%;
  min-height: 10rem;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  font-family: "Lato";
  border: 1px solid #e5e5e5;
  background-color: ${backgroundColor};

  &::placeholder {
    color: #73a5ea;
    font-style: italic;
  }
`;
