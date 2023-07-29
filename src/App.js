import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Canvas = styled.canvas`
    background-color: white;
    width: 1000px;
    height: 1000px;
`

const App = () => {

    const ref = React.useRef(null)
    const contextRef = React.useRef(null)

    const [ctx, setCtx] = React.useState(null)
    const [isDraw, setIsDraw] = React.useState(false)

    React.useEffect(() => {
        const canvas = ref.current
        const context = canvas.getContext("2d")
        context.strokeStyle = "#000000"
        context.lineWidth = 2
        contextRef.current = context

        setCtx(contextRef.current)
    }, [])

    const startDrawEvent = () => {
        console.log("그리기 시작")
        setIsDraw(true)
    }

    const endDrawEvent = () => {
        console.log("그리기 종료")
        setIsDraw(false)
    }
    
    const drawEvent = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent
    
        if (ctx) {   // Canvas의 Context가 존재한다면
            if (isDraw) {   // 그리기 상태일 때
                console.log("그리기 중", offsetX, offsetY)
                ctx.lineTo(offsetX, offsetY)
                ctx.stroke()
            } else {   // 일반 상태일 때
                ctx.beginPath()
                ctx.moveTo(offsetX, offsetY)
            }
        }
    }

    return(
        <Container className="container">
            <Canvas 
                ref={ref} 
                onMouseDown={startDrawEvent}
                onMouseUp={endDrawEvent}
                onMouseMove={drawEvent}
                onMouseLeave={endDrawEvent}/>
        </Container>
    )
}

export default App
