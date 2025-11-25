import { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<div>hello</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
