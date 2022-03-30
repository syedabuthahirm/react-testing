import { screen, render, fireEvent } from '../../setupTests';
import Counter from '../../pages/Counter';
import User from '../../pages/User';
import { Route, Switch } from 'react-router-dom';

test('Counter Component', () => {
    const { getByTestId } = render(<>
        <Switch>
            <Route path="/users">
                <User />
            </Route>
            <Route path="/">
                <Counter />
            </Route>
        </Switch>
    </>);
    expect(screen.getByTestId('counterLabel').textContent).toBe('Current Value 0');
    fireEvent.click(screen.getByTestId('incrementBtn'));
    expect(screen.getByTestId('counterLabel').textContent).toBe('Current Value 1');
    fireEvent.click(screen.getByTestId('decrementBtn'));
    expect(screen.getByTestId('counterLabel').textContent).toBe('Current Value 0');
    fireEvent.click(screen.getByTestId('navigateToUser'));
    expect(screen.getByTestId('username').textContent).toBeTruthy();
});