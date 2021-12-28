
import logoImg from '../../assets/logo.svg'
import { ContainerHeader, ContentHeader } from './style'




export function Header() {
    return (
        <ContainerHeader>
            <ContentHeader>
            <img src={logoImg} alt=" dt Money" />
            <button type="button">Nova transacao</button>
            </ContentHeader>
        </ContainerHeader>
    )
}