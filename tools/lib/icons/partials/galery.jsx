import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import axios from 'axios'

const Gird = styled.div`
    .infinite-scroll-component {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(10, minmax(0, 1fr));
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        min-width: 0;
        flex: 1 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: Ellipsis;
        width: 100%;
    }
    img {
        width: auto;
        height: 50px;
    }
`

function IconItem(props) {
    const importIcon = () => {
        if (confirm(`Importar el icono: ${props.name}`)) {
            axios.post('/api/icons?icon='+ props.name)
                .then(d => d.data)
                .then(d => {
                    console.log(d)
                })
        }
    }
    return (
        <Item title={props.name} onClick={importIcon}>
            <img src={props.src} alt={props.name} />
            <p>{props.name}</p>
        </Item>
    );
}

export default function IconGalery() {
    const [icons, setIcons] = useState([])
    const [noMore, setNoMore] = useState(false)
    const [index, setIndex] = useState(1)
    const [search, setSearch] = useState('')

    const getIcon = () => {
        
        axios.get('/api/icons?index='+ index + (search !== '' ? '&query=' + search : ''))
            .then(d => d.data)
            .then(d => {
                if(d.length === 0) {
                    setNoMore(true)
                }
                setIcons([...icons, ...d])
                setIndex(index +1)
            })
    }

    const searchIcon = (q) => {
        setSearch(q)
        if (q !== '') {
            setIndex(1)
            setIcons([])
            setNoMore(false)
            getIcon()
        }
    }


    return (
        <Gird>
            <input type="text" value={search} onChange={(e) => searchIcon(e.target.value)} />
            <InfiniteScroll
                dataLength={icons.length}
                next={getIcon}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {icons.map((x, i) => (
                    <IconItem src={x.src} name={x.name} key={i} />
                ))}
                {noMore ? <div>No hay mas iconos</div> : null}
            </InfiniteScroll>
        </Gird>
    )
}