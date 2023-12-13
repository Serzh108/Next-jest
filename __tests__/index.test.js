import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders Home', () => {
    render(<Home />);

    const link = screen.getByRole('link', {
      name: /By/i,
    });

    expect(link).toBeInTheDocument();

    const testText = screen.getByText('Get started by editing');
    expect(testText).toBeInTheDocument();
  });

  it('render text', () => {
    render(<Home />);
    const text1 = screen.getByText(
      /Find in-depth information about Next.js features and API/i,
    );
    expect(text1).toBeInTheDocument();
  });
});
