import { Register } from '../components/page/login/Register';
import { render } from '@testing-library/react';


// hacemos test de Register
// comprobamos que existe la pagina
describe('Register', () => {
    test('should render the Name', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Name");
        expect(childElement).toBeTruthy();
    });
    // hacemos teste para todos los campos
    test('should render the Email', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Email");
        expect(childElement).toBeTruthy();
    });
    test('should render the Phone', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Phone");
        expect(childElement).toBeTruthy();
    });
    test('should render the Password', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Password");
        expect(childElement).toBeTruthy();
    });
    test('should render the Retype Password', () => {
        const { getByLabelText } = render(<Register />);
        const childElement = getByLabelText("Retype password");
        expect(childElement).toBeTruthy();
    });
});