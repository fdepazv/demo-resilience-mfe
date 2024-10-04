import React from 'react';
import MembersList from './components/MembersList';
import MfeErrorBoundary from './components/ErrorBoundary';

const App = ({ person, resetPerson }) => {

  return (
    <>
      <MembersList person={person} resetPerson={resetPerson} />

      {/* <MfeErrorBoundary>
        <MembersList person={person} resetPerson={resetPerson} />
      </MfeErrorBoundary> */}
    </>
  );
};

export default App;