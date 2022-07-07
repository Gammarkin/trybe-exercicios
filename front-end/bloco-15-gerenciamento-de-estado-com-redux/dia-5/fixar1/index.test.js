describe('testing clicks', () => {
    beforeEach(cleanup);
    test('the page should has a button and a text 0', () => {
        const { queryByText } = renderWithRedux(<App />);
        const buttonAdicionar = queryByText('Clique aqui');

        expect(buttonAdicionar).toBeInTheDocument();
        expect(queryByText('0')).toBeInTheDocument();
    });
});