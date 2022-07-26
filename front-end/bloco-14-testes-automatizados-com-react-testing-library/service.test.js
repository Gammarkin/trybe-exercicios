const service = require('./service')

afterEach(() => jest.clearAllMocks());

describe('test', () => {
    it('tests', () => {
        const mock = jest
            .spyOn(service, 'randomNumberBetween0and100')
            .mockReturnValue(10);

        expect(mock()).toBe(10);
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
    })

    it('tests division', () => {
        const mock = jest
            .spyOn(service, 'randomNumberBetween0and100')
            .mockImplementation((a, b) => a / b);

        expect(mock(4, 2)).toBe(2)
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockReset()
    })

    it('tests if the division is not called', () => {
        const mock = jest
            .spyOn(service, 'randomNumberBetween0and100');

        expect(mock(3, 4)).toBe(undefined)
    })

    it('mocks multiplications', () => {
        const mock = jest
            .spyOn(service, 'randomNumberBetween0and100')
            .mockImplementation((a, b, c) => a * b * c);

        expect(mock(1, 2, 3)).toBe(6);
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockReset();

        mock.mockImplementation((number) => number * 2);
        expect(mock(4)).toBe(8);
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockReset();
    })

    it('creates tree funcs', () => {
        const capsMock = jest.spyOn(service, 'capsLock');
        const firstMock = jest.spyOn(service, 'firstLetter');
        const concatMock = jest.spyOn(service, 'concat');

        capsMock.mockImplementation((str) => str.toLowerCase());
        firstMock.mockImplementation((str) => str[str.length - 1]);
        concatMock.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

        expect(capsMock('EITA')).toBe('eita');
        expect(firstMock('eita')).toBe('a');
        expect(concatMock('e', 'it', 'a')).toBe('eita');
        capsMock.mockReset();
        firstMock.mockReset();
        concatMock.mockReset();
    })

    it('tests if the reset was reseted', () => {
        const capsMock = jest.spyOn(service, 'capsLock');
        const firstMock = jest.spyOn(service, 'firstLetter');
        const concatMock = jest.spyOn(service, 'concat');

        expect(capsMock('eita')).toBe(undefined)
        expect(firstMock('EITA')).toBe(undefined)
        expect(concatMock('a', 'b')).toBe(undefined)
    })

    it('tests resolves', async () => {
        service.fetchDog = jest.fn()
            .mockResolvedValue("request sucess");

        await expect(service.fetchDog()).resolves.toBe("request sucess");
        service.fetchDog.mockReset();
        await expect(service.fetchDog()).toBe(undefined);
    })

    it("tests reject", async () => {
        service.fetchDog
            .mockRejectedValue("request failed");

        await expect(service.fetchDog()).rejects.toMatch("request failed");
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
        service.fetchDog.mockReset();
    });
})
