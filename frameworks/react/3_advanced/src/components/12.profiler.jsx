import React, { PureComponent, Profiler } from 'react';

class ProfilerExample extends PureComponent {
  constructor() {
    super();
    this.onRender = this.onRender.bind(this);
  }

  onRender(
    id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
  ) {
    console.log({
      id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
    });
  }

  render() {
    return (
      <Profiler id="profiler-example" onRender={this.onRender}>
        <ExampleComponent />
      </Profiler>
    );
  }
}

class ExampleComponent extends PureComponent {
  render() {
    return <div>Hello</div>;
  }
}

export default ProfilerExample;
