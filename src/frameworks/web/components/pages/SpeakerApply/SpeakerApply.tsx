import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from 'theme';
import {
  // eslint-disable-next-line no-unused-vars
  speakerApplyElement, ISpeakerApplyState, ISpeakerApply,
} from 'interfaces/frameworks/web/components/pages/SpeakerApply/ISpeakerApply';
import SpeakerApplyStep1 from '../../organisms/SpeakerApply/SpeakerApplyStep1';
import SpeakerApplyStep2 from '../../organisms/SpeakerApply/SpeakerApplyStep2';
import SpeakerApplyComplete from '../../organisms/SpeakerApply/SpeakerApplyComplete';

const SpeakerApplyContainer = styled.div`
  padding: 120px 0;
  background-color: ${theme.color.secondary.Ash};
`;

export default class SpeakerApply extends React.PureComponent<ISpeakerApply, ISpeakerApplyState> {
  constructor(props: Readonly<ISpeakerApply>) {
    super(props);
    this.state = {
      currentStep: 1,
      introduce: '',
      sessionName: '',
      sessionDesc: '',
      youtube: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (nameValue: speakerApplyElement, value: string) => {
    type tplotOptions = {
      [key in speakerApplyElement]?: string;
    };
    const useState: tplotOptions = {
      [nameValue]: value,
    };
    useState[nameValue] = value;
    this.setState(useState as Pick<ISpeakerApplyState, speakerApplyElement>);
  }

  nextStep = () => {
    this.setState({
      currentStep: 2,
    });
  }

  onSubmit = () => {
    const {
      introduce, sessionName, sessionDesc, youtube,
    } = this.state;
    // eslint-disable-next-line no-undef, no-alert
    alert(`introduce : ${introduce} / sessionName : ${sessionName} / sessionDesc : ${sessionDesc} / youtube : ${youtube}`);
    // eslint-disable-next-line no-undef
    window.location.href = '/apply/speaker/complete';
  }

  render() {
    const { currentStep } = this.state;
    const { name, email } = this.props;
    return (
      <Router>
        <SpeakerApplyContainer>
          <Route exact path="/apply/speaker/complete" component={SpeakerApplyComplete} />
          <Route
            exact
            path="/apply/speaker"
            render={() => (
              <div>
                <SpeakerApplyStep1
                  currentStep={currentStep}
                  handleChange={this.handleChange}
                  name={name}
                  email={email}
                  nextStep={this.nextStep}
                />
                <SpeakerApplyStep2
                  currentStep={currentStep}
                  handleChange={this.handleChange}
                  onSubmit={() => this.onSubmit()}
                />
              </div>
            )}
          />
        </SpeakerApplyContainer>
      </Router>
    );
  }
}
