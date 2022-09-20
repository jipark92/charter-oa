import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';

import { MayMonthTable } from './components/MayMonthTable'
import JuneMonthTable from './components/JuneMonthTable';
import JulyMonthTable from './components/JulyMonthTable';
import useIsLoadingAndFetchData from './hooks/useIsLoadingAndFetchData'

describe(App, () => {

    it('should match snapshot', () => {
        const { asFragment } = render(<App />)
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders loading data text", () => {
        render(<App />)
        const loadingData = screen.getByTestId('loading-data').textContent
        expect(loadingData).toBe('LOADING DATA......')
    })

    it("should render components may,june,july table after 1 second", async () => {
        render(<App />)
        await waitFor(() => {
            let appComponents = screen.getByTestId('app-components')
            expect(appComponents).toBeInTheDocument('<MayMonthTable />')
        })
        await waitFor(() => {
            let appComponents = screen.getByTestId('app-components')
            expect(appComponents).toBeInTheDocument('<JuneMonthTable />')
        })
        await waitFor(() => {
            let appComponents = screen.getByTestId('app-components')
            expect(appComponents).toBeInTheDocument('<JulyMonthTable />')
        })
    })

    it('loading should change from true to false', async () => {
        const { isLoading } = render(<App />)
        expect(isLoading).not.toBe(true)
    })
})