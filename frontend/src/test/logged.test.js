import { Logeado } from '../components/page/login/Logeado';
import { render } from '@testing-library/react';

// hacemos test de Logeado
// comprobamos que existe la pagina
describe('Logeado', () => {

    test('should render the Name', () => {
        const view = render(<Logeado />);
        view.getByText("Has iniciado sesión correctamente");
    });

});