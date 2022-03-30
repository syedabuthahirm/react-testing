import { screen, render, fireEvent } from '../../setupTests';
import User from "../../pages/User";
import { waitFor } from '@testing-library/react';
import axios from 'axios';

test('User Component', async () => {
    axios.get.mockResolvedValueOnce({
        data: {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
    });
    const { getByTestId } = render(<User />);
    await waitFor(() => { expect(screen.getByRole('heading').textContent).toBe('Sincere@april.biz') })
});