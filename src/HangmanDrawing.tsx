const HEAD = () => {
    return (
        <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '100%',
            border: "10px solid black",
            position: 'absolute',
            top: '38px',
            right: '-18px'
        }} />
    )
}

const TRUNK = () => {
    return (
        <div style={{
            width: '10px',
            height: '80px',
            background: 'black',
            right: '1px',
            top: '85px',
            position: 'absolute'
        }}>
        </div>
    )
}

const LEFT = () => {
    return (
        <div
            style={{
                width: '10px',
                height: '60px',
                background: 'black',
                right: '0px',
                top: '80px',
                position: 'absolute',
                transform: 'rotate(-40deg)',
                transformOrigin: 'right bottom'
            }}
        >
        </div>
    )
}

const RIGHT = () => {
    return (
        <div
            style={{
                width: '10px',
                height: '60px',
                background: 'black',
                right: '0px',
                top: '80px',
                position: 'absolute',
                transform: 'rotate(40deg)',
                transformOrigin: 'left bottom'
            }}
        >
        </div>
    )
}

const RL = () => {
    return (
        <div style={{
            width: '10px',
            height: '90px',
            background: 'black',
            right: '1px',
            top: '145px',
            position: 'absolute',
            transform: 'rotate(10deg)',
            transformOrigin: 'left top'
        }}>
        </div>
    )
}

const LL = () => {
    return (
        <div style={{
            width: '10px',
            height: '90px',
            background: 'black',
            right: '1px',
            top: '145px',
            position: 'absolute',
            transform: 'rotate(-10deg)',
            transformOrigin: 'right top'
        }}>
        </div>
    )
}


type HangmanDrawingProps = {
    numberOfGuesses:number
}


const BODY_PARTS = [<HEAD />, <TRUNK />, <RIGHT />, <LEFT />, <LL />, <RL />]

export const HangmanDrawing = ({numberOfGuesses}:HangmanDrawingProps) => {
    return (
        <div style={{ position: "relative" }}>


            <div style={{ height: "10px", width: "150px", background: 'black', marginLeft: '70px' }} />
            <div style={{ height: "30px", width: "10px", background: "black", marginLeft: '210px', position: 'absolute' }} />
            {BODY_PARTS.slice(0,numberOfGuesses)}
            <div style={{ height: "300px", width: "10px", background: "black", marginLeft: '70px' }} />
            <div style={{ height: "10px", width: "150px", background: 'black' }} />
        </div>
    )
}
