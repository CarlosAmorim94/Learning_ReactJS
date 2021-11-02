import React from 'react'
import styled from 'styled-components'

export default function Modal(props) {

    const Esmaecer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgb(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    `

    const Modal = styled.div`
    background-color: white;
    border-radius: 15px;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 500px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    `
     function handleEsmaecer () {
        props.setShow(false)
     }

    return (
        
        <>
            { props.show === true &&
                <Esmaecer onClick={handleEsmaecer}>
                    <Modal>
                        {props.children}
                    </Modal>
                </Esmaecer>
            }
        </>
    )
}
