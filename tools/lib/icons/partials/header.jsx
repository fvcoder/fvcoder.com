import React from 'react'
import styled from  'styled-components'

const Layout = styled.header`
    width: 100%;
    height: 400px;
    background-color: #f3f3f3;
`
const Title = styled.nav`
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
`
export default function Header() {
    return (
        <Layout>
            <Title>Icon Find</Title>
            <p style={{ padding: '0 1rem' }}>Encuentra tus iconos de @fluentui/icon-svg</p>
        </Layout>
    )
}