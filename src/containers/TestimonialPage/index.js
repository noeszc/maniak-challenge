import React from 'react';
import useLoadPage from 'containers/PagesManager/components/useLoadPage';

function TestimonialPage() {
  const state = useLoadPage();
  return (
    <div>
      <h1>TestimonialPage</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default TestimonialPage;
