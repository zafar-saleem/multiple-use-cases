import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  StyledInput,
  Container,
  Grid,
  StyledLabel,
  StyledTextArea,
  Field,
} from './App.styled';
import './App.css';

export default function App() {
  return (
    <Container>
      <form>
        <StyledInput>
          <StyledLabel>Your full given name:</StyledLabel>
          <Field>
            <input type="text" name="name" />
          </Field>
        </StyledInput>
        <Grid>
          <StyledInput isIcon={true}>
            <StyledLabel>Date of Birth</StyledLabel>
            <Field>
            	<FontAwesomeIcon className="icon-calendar" icon={faCalendarAlt} />
              <input type="date" name="name" />
            </Field>
          </StyledInput>
          <StyledInput>
            <StyledLabel>Country of residence or citizenship:</StyledLabel>
            <Field>
              <input type="text" name="name" />
            </Field>
          </StyledInput>
        </Grid>
        <StyledInput>
          <StyledLabel>What school do you plan to attend?</StyledLabel>
          <Field>
            <input type="text" name="name" />
          </Field>
        </StyledInput>
        <Field>
          <StyledLabel>
            Please take a moment to describe your intend area of study:
          </StyledLabel>
          <StyledTextArea placeholder="Enter details here"></StyledTextArea>
        </Field>
      </form>
    </Container>
  );
}
