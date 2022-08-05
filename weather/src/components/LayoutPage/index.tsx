import { PropsWithChildren } from 'react';
import { Footer } from '../Footer'
import { Header } from '../Header'
import * as Styled from './styles'

type LayoutPageProps = PropsWithChildren<{
    onBack?(): void;
    onChangeSwitch?(): void;
}>

export function LayoutPage({ onBack, onChangeSwitch, children }: LayoutPageProps) {
    return (
        <Styled.Container>
            <Header onBack={onBack} onChangeUnit={onChangeSwitch} />

            <Styled.Content>
                {children}
            </Styled.Content>

            <Footer />
        </Styled.Container>
    )
}